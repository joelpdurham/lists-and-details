import React from 'react';
import Film from './Film.js';
import { useGetFilms } from '../hooks/useGetFilms.js';

const Films = () => {
  const { films } = useGetFilms();

  const filmList = films.map((film, i) => (
    <li key={i}>
      <Film film={film}/>
    </li>
  ));
  
  return (
    <>
      <h3>Films</h3>
      <ul>
        {filmList}
      </ul>
    </>
  );
};

export default Films;
