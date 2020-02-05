import React from 'react';
import Film from './Film.js';
import { useGetFilms } from '../hooks/useGetFilms.js';

const Body = () => {
  const { films } = useGetFilms();

  const filmList = films.map((film, i) => (
    <li key={i}>
      <Film film={film}/>
    </li>
  ));
  
  return (
    <>
      <h3>my body</h3>
      <ul>
        {filmList}
      </ul>
    </>
  );
};

export default Body;
