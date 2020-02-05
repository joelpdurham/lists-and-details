import React from 'react';
//import PropTypes from 'prop-types';
import {
  BrowserRouter as Router,
  // Route,
  // Switch,
  // Link
} from 'react-router-dom';
import Body from './Body.js';

const Header = () => (
  <>
    <h1>Studio Ghibli API</h1>
    <h5>Cause it cute af</h5>
  </>
);

export default function App() {
  return (
    <Router>
      <Header />
      <Body />
    </Router>
  );
}

