import React from 'react';
import PropTypes from 'prop-types';


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
            Название города
          </h2>
          <div className="form__group form__group--primary">
            <input 
              className="form__input u-margin-bottom-small" 
              type="text" 
              placeholder="Введите название города" 
              onChange={this.handleUpdate}
              value={this.state.city}
              />

            <button
              className="btn btn--green btn--medium btn--btn-link"            
              onClick={this.handleClick}>
                Найти
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