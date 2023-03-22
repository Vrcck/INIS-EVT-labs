let personalMovieDB = {
    privat: numberOfFilms,
    movies: {}
};
let filmOne;
let filmTwo;
let filmTree;
let evOne;
let evTwo;
let evTree;

filmOne = prompt('Один из последних просмотренных фильмов? ');
evOne = prompt('На сколько оцените его? ');
filmTwo = prompt('Один из последних просмотренных фильмов? ');
evTwo = prompt('На сколько оцените его? ');
filmTree = prompt('Один из последних просмотренных фильмов? ');
evTree = prompt('На сколько оцените его? ');

personalMovieDB.movies[filmOne] = evOne;
personalMovieDB.movies[filmTwo] = evTwo;
personalMovieDB.movies[filmTree] = evTree;

