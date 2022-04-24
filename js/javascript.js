"use strict"

let numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?");
while(numberOfFilms == null || numberOfFilms == 0){
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?");
};

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
if (questionA != null && questionB != null && questionA != "" && questionB != "" && questionA.length < 50){
    personalMovieDB.movies[questionA] = questionB;
    console.log("done");
} else {
    console.log("Error")
    i--;
}
};

if(personalMovieDB.count < 10){
    alert("Просмотрено довольно мало фильмов")
} else if(personalMovieDB.count >=10 && personalMovieDB.count <=30){
    alert("Вы классчический зритель");
} else if (personalMovieDB.count > 30) {
    alert("Вы киноман");
} else{
    alert("Произошла ошибка")
}

console.log(personalMovieDB);