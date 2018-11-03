import React from 'react';
import PropTypes from 'prop-types';

import HeaderForm from './HeaderForm';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header className="header">
        <div className="header__title">
          <h1 className="heading-primary">
            Main Header
          </h1>
        </div>
        <HeaderForm onClick={this.props.onClick} />
    </header>
    )
  }
}


export default Header;