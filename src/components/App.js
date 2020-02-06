import React from 'react';
import {
  BrowserRouter as Router, Switch, Route
} from 'react-router-dom';
import Films from './Films.js';
import FilmDetails from './FilmDetails.js';

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
      <Switch>
        <Route exact path="/" component={Films}/>
        <Route path="/:id" component={FilmDetails}/>
      </Switch>
    </Router>
  );
}

