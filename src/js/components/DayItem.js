import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Utilities
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

DayItem.propTypes = {
  onClick: PropTypes.func,
  day: PropTypes.object.isRequired
}
export default DayItem;