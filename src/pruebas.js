/*jshint esversion: 6 */

movies = [
  {
    title: 'La battaglia di Algeri',
    year: 1966,
    director: 'Gillo Pontecorvo',
    duration: '2h 1min',
    genre: ['Drama', 'War'],
    rate: 8.1
  },
  {
    title: 'Ah-ga-ssi',
    year: 2016,
    director: 'Chan-wook Park',
    duration: '2h 24min',
    genre: ['Crime', 'Drama', 'Mystery', 'Romance', 'Thriller'],
    rate: 8.1
  },
  {
    title: 'Pirates of the Caribbean: The Curse of the Black Pearl',
    year: 2003,
    director: 'Gore Verbinski',
    duration: '2h 23min',
    genre: ['Action', 'Adventure', 'Fantasy'],
    rate: 8
  },
  {
    title: 'PK',
    year: 2014,
    director: 'Rajkumar Hirani',
    duration: '2h 33min',
    genre: ['Comedy', 'Drama', 'Fantasy', 'Sci-Fi'],
    rate: 8.2
  },
  {
    title: 'Dog Day Afternoon',
    year: 1975,
    director: 'Sidney Lumet',
    duration: '2h 5min',
    genre: ['Biography', 'Crime', 'Drama', 'Thriller'],
    rate: 8
  },
  {
    title: 'Dead Poets Society',
    year: 1989,
    director: 'Peter Weir',
    genre: ['Comedy', 'Drama'],
    rate: 8
  }
];
const hours2Min = hourStr => {
  if (hourStr.length === 2) return Number(hourStr[0]) * 60;
  else if (hourStr.length === 5 || hourStr.length === 4) return Number(hourStr.replace('min', ''));
  else {
    let hourArr = hourStr
      .replace('h', '')
      .replace('min', '')
      .split(' ');
    return Number(hourArr[0]) * 60 + Number(hourArr[1]);
  }
};

let turnHoursToMinutes = moviesArr =>
  [...moviesArr].map(movie => {
    if (movie.duration) movie.duration = hours2Min(movie.duration);
    return movie;
  });

console.log(turnHoursToMinutes(movies));
