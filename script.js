let numberOfFilms;

function start() {
  numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

  while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
  }

  personalMovieDB.count = numberOfFilms;
}

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

function rememberMyFilms(repeat) {
  for (let i = 1; i <= repeat; i++) {
    const movieName = prompt("Один из последних просмотренных фильмов?", "");
    if (movieName == "" || movieName.length > 50) {
      i--;
      continue;
    }
    const movieRate = prompt("На сколько оцените его?", "");
    if (movieRate == "" || movieRate.length > 50) {
      i--;
      continue;
    }
    personalMovieDB.movies[movieName] = movieRate;
  }
}

function detectPersonalLevel() {
  if (personalMovieDB.count < 10) {
    console.log("Просмотрено довольно мало фильмов");
  } else if (10 <= personalMovieDB.count && personalMovieDB.count <= 30) {
    console.log("Вы классический зритель");
  } else if (personalMovieDB.count > 30) {
    console.log("Вы киноман");
  } else {
    console.log("Произошла ошибка");
  }
}

function showMyDB(privat) {
  if (!privat) {
    console.log(personalMovieDB);
  }
}

function writeYourGeners(repeat) {
  for (let i = 1; i <= repeat; i++) {
    personalMovieDB.genres.push(
      prompt(`Ваш любимый жанр под номером ${i}?`, "")
    );
  }
}

start();

detectPersonalLevel();

rememberMyFilms(2);

writeYourGeners(3);

showMyDB(personalMovieDB.privat);
