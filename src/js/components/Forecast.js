import React from 'react';
import PropTypes from 'react-router-dom';
import queryString from 'query-string';

// Components
import DayItem from './DayItem';

// Utilities
import { getForecast } from '../utils/api';
import { getDate } from '../utils/helpers';

class Forecast extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      forecast: [
        {
          location: ''
        }
      ],
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
      })).catch(e => console.log(e));
  }

  handleClick(city) {
    city.cityName = this.city;
    this.props.history.push({
      pathname: `/details/${this.city}`,
      state: city
    })
  }

  render() {
    const location = this.state.forecast[0].location;
    const loading = this.state.loading;
    console.log('THIS IS FROM FORECAST');
    console.log(this.state.forecast);
    
    if (loading) {
      return (
        <h2 className="heading-loading ">Loading</h2>
      )
    } else {
      return (
        <section className="section-forecast">
          <h2 className="heading-city-name">
            {location.country}, {location.region}
          </h2>
        <ul className="weather wrap">
          {this.state.forecast.map((dayDt, index) => {
            return (
              <DayItem onClick={this.handleClick.bind(this, dayDt)} key={index} day={dayDt} />
            );
          })}
        </ul>
        </section>
      )
    }  
  }
}

export default Forecast;