//18 практика функции
let numberOfFilms;
function start() {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?",'');
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?",'');
    }
}

start();


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
}
peronalMovieDB.movies[a] = b;

console.log(peronalMovieDB);

function writeYourGenres(){
    for(let i = 1; i <= 3; i++){
        peronalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
    }
}
writeYourGenres();