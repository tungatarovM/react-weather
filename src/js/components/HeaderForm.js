import React from 'react';



class HeaderForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      city: ''
    }

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
      <form className="form">
          <div className="form__group form__group--secondary">
            <input 
            className="form__input form__input--secondary" 
            type="text" placeholder="Enter a city name" 
            onChange={this.handleUpdate}
            value={this.state.city}/>

            <button
            className="btn btn--green btn--small btn--btn-link"
            onClick={this.handleClick}>
              Get Weather
            </button>
          </div>
      </form>
    )
  }
};

export default HeaderForm;