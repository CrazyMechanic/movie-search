const getData = (url) => fetch(url).then((res) => res.json())
  .then((data) => data.Search);

const searchString = 'Batman';

getData(`http://www.omdbapi.com/?apikey=a6a0fc64&s=${searchString}`)
  .then((movies) => movies.forEach((movie) => console.log(movie)))
  .catch((err) => console.log(err));
