import React from 'react';
import { useParams } from 'react-router-dom';
import { useFindFilmByTitle } from '../hooks/useFindFilmByTitle';

const FilmDetails = () => {
  const { filmTitle } = useParams();
  const { film } = useFindFilmByTitle(filmTitle);

  return (
    <>
      <h4>{film.title}</h4>
      <p>{film.description}</p>
      <p>Directed by {film.director}</p>
      <p>Released: {film.release_date}</p>
    </>
  );
};

export default FilmDetails;
