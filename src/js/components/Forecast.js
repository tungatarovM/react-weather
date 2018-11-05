import React from 'react';
import PropTypes from 'react-router-dom';
import queryString from 'query-string';

import { getForecast } from '../utils/api';
import { getDate } from '../utils/helpers';

const DayItem = (props) => {
  console.log(props.day);
  const date = getDate(props.day.date);
  return (
    <li onClick={props.onClick} className="weather__day">
      <div className="weather__icon">
        <img src={props.day.condition.icon}></img>
      </div>
      <h3 className="heading-tertiary">
        <span className="date date--month">{date.day} {date.month}</span>
        <span className="date date--week">{date.weekday}</span>
      </h3>
    </li>
  )
}

class Forecast extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      forecast: [],
      loading: true,
    }

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.city = queryString.parse(this.props.location.search).city;
    this.makeRequest(this.city);
  }

  componentWillReceiveProps(nextProps) {
    this.city = queryString.parse(nextProps.location.search).city;
    this.makeRequest(this.city)
  }

  makeRequest(city) {
    getForecast(city)
    this.setState({
      loading: true,
    });

    getForecast(city)
      .then(forecast => this.setState({
        forecast: forecast,
        loading: false,
      }))
  }

  handleClick(city) {
    city.cityName = this.city;
    this.props.history.push({
      pathname: `/details/${this.city}`,
      state: city
    })
  }

  render() {
    const loading = this.state.loading;
    console.log(this.state.forecast);
    
    if (loading) {
      return (
        <h2 className="heading-loading ">Loading</h2>
      )
    } else {
      return (
        <ul className="weather wrap">
          {this.state.forecast.map((dayDt, index) => {
            return (
              <DayItem onClick={this.handleClick.bind(this, dayDt)} key={index} day={dayDt} />
            );
          })}
        </ul>
      )
    }  
  }
}

Forecast.propTypes = {

}


export default Forecast;