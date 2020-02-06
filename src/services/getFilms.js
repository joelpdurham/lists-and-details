export const getFilms = () => {
  console.log('MAKING A FETCH CALL');
  return fetch('https://ghibliapi.herokuapp.com/films')
    .then(res => res.json());
};

export const getFilmsById = (id) => {
  console.log('MAKING A FETCH CALL');
  return fetch(`https://ghibliapi.herokuapp.com/films/${id}`)
    .then(res => res.json());
};
