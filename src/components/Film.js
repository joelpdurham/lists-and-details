import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

const Film = ({ film }) => {
  const history = useHistory();

  const handleClick = event => {
    event.preventDefault();
    history.push(`/${film.title}`);
  };
  
  return (
    <h4 onClick={handleClick}>{film.title}</h4>
  );
};

Film.propTypes = {
  film: PropTypes.shape({
    title: PropTypes.string
  })
};

export default Film;
