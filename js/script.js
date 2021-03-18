//12 практика
const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?",'');

const peronalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt("Один из просмотренных фильмов?",''),
      b = prompt("На сколько оцените его?",'');

peronalMovieDB.movies[a] = b;

console.log(peronalMovieDB);