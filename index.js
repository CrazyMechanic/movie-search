import {
  addMoviesToList,
  createMarkup,
  createStyle
} from './dom.js';

const getData = (url) => fetch(url).then((res) => res.json())
  .then((data) => data.Search);

const searchString = 'Batman';

getData(`http://www.omdbapi.com/?apikey=a6a0fc64&s=${searchString}`)
  .then((movies) => movies.forEach((movie) => addMoviesToList(movie)))
  .catch((err) => console.log(err));

const init = () => {
  createMarkup();
  createStyle();
};

init();
