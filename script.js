const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: false,

  start() {
    let numberOfFilms;
    this.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
    while (this.count == "" || this.count == null || isNaN(this.count)) {
      this.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
    }
    this.count = numberOfFilms;
  },

  rememberMyFilms(repeat = 2) {
    for (let i = 1; i <= repeat; i++) {
      const movieName = prompt(
          "Один из последних просмотренных фильмов?",
          ""
        ).trim(),
        movieRate = prompt("На сколько оцените его?", "").trim();
      if (
        movieName == "" ||
        movieName.length > 50 ||
        movieRate == "" ||
        movieRate.length > 50
      ) {
        i--;
        continue;
      }
      personalMovieDB.movies[movieName] = movieRate;
    }
  },

  detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
      console.log("Просмотрено довольно мало фильмов");
    } else if (10 <= personalMovieDB.count && personalMovieDB.count <= 30) {
      console.log("Вы классический зритель");
    } else if (personalMovieDB.count > 30) {
      console.log("Вы киноман");
    } else {
      console.log("Произошла ошибка");
    }
  },

  toggleVisibleMyDB() {
    this.privat = !this.privat;
  },

  showMyDB() {
    if (!this.privat) {
      console.log(personalMovieDB);
    }
  },

  writeYourGeners(repeat = 3) {
    let genre;
    for (let i = 1; i <= repeat; i++) {
      genre = prompt(`Ваш любимый жанр под номером ${i}?`, "");
      if (genre == "" || genre == null) {
        i--;
        continue;
      }
      personalMovieDB.genres.push(genre);
    }
    this.genres.forEach((genre, i) =>
      console.log(`Любимый жанр ${i + 1} - это ${genre}`)
    );
  },
};

personalMovieDB.start();
personalMovieDB.detectPersonalLevel();
personalMovieDB.rememberMyFilms();
personalMovieDB.writeYourGeners();
personalMovieDB.showMyDB();
personalMovieDB.toggleVisibleMyDB();
personalMovieDB.showMyDB();
