import { useState, useEffect } from 'react';
import getFilms from '../services/getFilms';

export const useFindFilmByTitle = (title) => {
  const [film, setFilm] = useState({});

  useEffect(() => {
    getFilms()
      .then(films => films.find(film => film.title === title))
      .then(film => setFilm(film));
  }, []);

  return { film };
};
