import { useState, useEffect } from 'react';
import { getFilmsById } from '../services/getFilms';

export const useFindFilmByTitle = (id) => {
  const [film, setFilm] = useState({});

  useEffect(() => {
    getFilmsById(id)
      .then(film => setFilm(film));
  }, []);

  return { film };
};
