const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

if (personalMovieDB.count < 10) {
  alert("Просмотрено довольно мало фильмов");
} else if (10 <= personalMovieDB.count && personalMovieDB.count <= 30) {
  alert("Вы классический зритель");
} else if (personalMovieDB.count > 30) {
  alert("Вы киноман");
} else {
  alert("Произошла ошибка");
}

while (Object.keys(personalMovieDB.movies).length < 2) {
  const movieName = prompt("Один из последних просмотренных фильмов?", "");
  if (!movieName && movieName !== 0 || movieName.length > 50) {
    continue;
  }
  const movieRate = prompt("На сколько оцените его?", "");
  if (!movieRate && movieRate !== 0 || movieRate.length > 50) {
    continue;
  }
  personalMovieDB.movies[movieName] = movieRate;
}

console.log(personalMovieDB);
