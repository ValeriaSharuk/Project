//15 практика циклы
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

if (a != null && b != null && a != '' && b != '' && a.length < 50){
    peronalMovieDB.movies[a] = b;
    console.log('done');
}
else {
    console.log('error');
    const a = prompt("Один из просмотренных фильмов?",''),
          b = prompt("На сколько оцените его?",'');
}
peronalMovieDB.movies[a] = b;

console.log(peronalMovieDB);