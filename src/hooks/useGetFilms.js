import { useState, useEffect } from 'react';
import getFilms from '../services/getFilms';

export const useGetFilms = () => {
  const [films, setFilms] = useState([]);
  
  useEffect(() => {
    getFilms()
      .then(films => {
        setFilms(films);
      });
  }, []);

  return { films };
};
