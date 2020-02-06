export const getFilms = () => {
  return fetch('https://ghibliapi.herokuapp.com/films')
    .then(res => res.json());
};

export const getFilmsById = (id) => {
  return fetch(`https://ghibliapi.herokuapp.com/films/${id}`)
    .then(res => res.json());
};
