const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

let filmName1 = prompt("Один из последних просмотренных фильмов?", ""),
  filmRate1 = +prompt("На сколько оцените его?", ""),
  filmName2 = prompt("Один из последних просмотренных фильмов?", ""),
  filmRate2 = +prompt("На сколько оцените его", "");

personalMovieDB.movies[filmName1] = filmRate1;
personalMovieDB.movies[filmName2] = filmRate2;

console.log(personalMovieDB);
