let personalMovieDB = {
    privat: false,
    movies: {}
};
let filmOne;
let filmTwo;
let filmTree;
let evOne;
let evTwo;
let evTree;
let privat = false;

filmOne = prompt('Один из последних просмотренных фильмов? ');
evOne = prompt('На сколько оцените его? ');
filmTwo = prompt('Один из последних просмотренных фильмов? ');
evTwo = prompt('На сколько оцените его? ');
filmTree = prompt('Один из последних просмотренных фильмов? ');
evTree = prompt('На сколько оцените его? ');

personalMovieDB.movies[filmOne] = evOne;
personalMovieDB.movies[filmTwo] = evTwo;
personalMovieDB.movies[filmTree] = evTree;
personalMovieDB.privat = privat;


if (personalMovieDB.privat != true) {
    document.getElementById("container").innerHTML = '<table><tr><td>Названия фильмов</td><td>Оценка фильмов</td></tr></table>';
    createTable();
    console.log(personalMovieDB.privat);
};

function createTable() {
    for (key in personalMovieDB.movies)
    {
        let row = document.createElement('tr');
        row.innerHTML = `<td>${key}</td><td>${personalMovieDB.movies[key]}</td>`;
        document.querySelector('table').appendChild(row);
    }
};