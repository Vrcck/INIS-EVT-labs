/*let numberOfFilms;
do {
    numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');
} while (numberOfFilms == '' || numberOfFilms === null || numberOfFilms >= 50);

let personalMovieDB = {
    count: numberOfFilms,
    movies: {}
};

let filmOne;

do {
    filmOne = prompt('Один из последних просмотренных фильмов?', '');
} while (filmOne == '' || filmOne === null || filmOne >= 50);


let evOne;

do {
    evOne = prompt('На сколько оцените его?', '');
} while (evOne == '' || evOne === null || evOne >= 50);

let filmTwo;

do {
    filmTwo = prompt('Один из последних просмотренных фильмов?', '');
} while (filmTwo == '' || filmTwo === null || filmTwo >= 50);

let evTwo;

do {
    evTwo = prompt('На сколько оцените его?', '');
} while (evTwo == '' || evTwo === null || evTwo >= 50);


personalMovieDB.movies[filmOne] = evOne;
personalMovieDB.movies[filmTwo] = evTwo;

console.log(personalMovieDB);*/
const make = 'Ford'; 
const model = 'Mustang'; 
const car = {make, model}; 
concole.log(car);