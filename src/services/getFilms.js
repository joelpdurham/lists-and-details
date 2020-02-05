const getFilms = () => {
  return fetch('https://ghibliapi.herokuapp.com/films')
    .then(res => res.json());
};

export default getFilms;