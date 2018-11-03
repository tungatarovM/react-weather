import React from 'react';
import PropTypes from 'prop-types';

import { getForecast } from '../../utils/api';

class PrimaryForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      city: '',
    };

    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleUpdate(e) {
    const cityName = e.target.value;

    this.setState({
      city: cityName,
    })
  }

  handleClick(e) {
    // getForecast(this.state.city)
    //   .then(res => res.forecast.forecastday)
    //   .then(res => res.map((el) => {
    //       return {
    //         date: el.date,
    //         avgTemp: el.day.avgtemp_c,
    //         condition: el.day.condition.text,
    //       };
    //     })
    //   )
    // .then(res => this.props.handleSubmit(res));
    e.preventDefault();
    this.props.onClick(this.state.city);

    this.setState({
      city: '',
    })
  }

  render() {
    return (
      <section className="section-form">
        <form className="form form--center">
          <h2 className="heading-secondary u-margin-bottom-medium">
            Enter a City and State
          </h2>
          <div className="form__group form__group--primary">
            <input 
              className="form__input u-margin-bottom-small" 
              type="text" 
              placeholder="Enter a city name" 
              onChange={this.handleUpdate}
              value={this.state.city}
              />

            <button
              className="btn btn--green btn--medium btn--btn-link"            
              onClick={this.handleClick}>
                Get Weather
            </button>
          </div>
        </form>
      </section>
    )
  }
}

PrimaryForm.propTypes = {
  onClick: PropTypes.func,
}


export default  PrimaryForm;