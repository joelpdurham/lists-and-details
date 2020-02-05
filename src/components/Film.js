import React from 'react';
import PropTypes from 'prop-types';

const Film = ({ title }) => {
  return (
    <h4>{title}</h4>
  );
};

Film.propTypes = {
  title: PropTypes.string.isRequired
};

export default Film;
