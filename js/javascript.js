"use strict"

let numberOfFilms;

function start() {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

    while(numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
    }
}

start();


let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function showMyDB () {
    if(personalMovieDB.privat == false){
        console.log(personalMovieDB);
    }
};

showMyDB();

function rememberMyFilms(){
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
    }
};

rememberMyFilms();


function writeYourGenres () {
    for(let i=1;i<=3;i++){
        let genre = prompt("Ваш любимый жанр под номером: "+ [i])
        personalMovieDB.genres[i-1] = genre;
    }
}
writeYourGenres();

function detectPersonalLevel() {
    if(personalMovieDB.count < 10){
        alert("Просмотрено довольно мало фильмов")
    } else if(personalMovieDB.count >=10 && personalMovieDB.count <=30){
        alert("Вы классчический зритель");
    } else if (personalMovieDB.count > 30) {
        alert("Вы киноман");
    } else{
        alert("Произошла ошибка")
    }
}

detectPersonalLevel();


