import React from 'react';
import PropTypes from 'prop-types';


//Utils 
import { getDate } from '../utils/helpers';


class Details extends React.Component {
  constructor(props) {
    super(props);

    this.weather = this.props.location.state;
    this.date = getDate(this.weather.date);
  }

  componentDidMount() {
    this.weather = this.props.location.state;
    this.date = getDate(this.weather);
  }

  componentWillReceiveProps(nextProps) {
    console.log('Details will receive props');
    console.log(nextProps);
    
  }
  render() {
    return ( 
      <div className="details">
        <div className="details__item">
          <div className="details__description">
            <h3 className="heading-city-name heading-city-name--small">
              {this.weather.location.country}, {this.weather.location.region}
            </h3>

            <div className="details__icon">
              <img src={this.weather.condition.icon}></img>
            </div>

            <h3 className="heading-tertiary u-neg-margin-top-small-1 u-margin-bottom-small">
              <span className="date date--month">{this.date.day} {this.date.month}</span>
              <span className="date date--week">{this.date.weekday}</span>
            </h3>

            <p className="details__condition">{this.weather.condition.text}</p>
            <p className="details__max">
              <span className="u-text-bold">Макс. температура:</span> {this.weather.temp.maxTemp}
            </p>

            <p className="details__min">
              <span className="u-text-bold">Мин. температура:</span> {this.weather.temp.minTemp}
            </p>
          </div>
        </div>
      </div> 
    );
  }
}

export default Details;