import React from 'react';
import PropTypes from 'prop-types';

import HeaderForm from './HeaderForm';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="head-wrapper">
        <header className="header wrap">
          <div className="header__title">
            <h1 className="heading-primary">
              Main Header
            </h1>
          </div>
          <HeaderForm onClick={this.props.onClick} />
      </header>
    </div>
    )
  }
}


export default Header;