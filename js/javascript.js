"use strict"

let numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?");

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


for(let i=0;i<2;i++){
let questionA = prompt("Один из последних просмореных фильмов?", "");
let questionB = prompt("На сколько оцените его?", "");
if (questionA != null && questionB != null && questionA != "" && questionB != "" && questionA < 50){
    personalMovieDB.movies[questionA] = questionB;
    console.log("done");
}


};

console.log(personalMovieDB);