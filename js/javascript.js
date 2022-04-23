"use strict"

let numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

if(numberOfFilms<10){
    alert("Просмотрено довольно мало фильмов")
} else if(numberOfFilms<=30){
    alert("Вы классический зритель")
} else if(numberOfFilms>30){
    alert("Вы киноман")
} else{
    console.log("Произошла ошибка")
}

let personalMovieDB = {
    count: numberOfFilms,
    movies: {
      
    },
    actors: {},
    genres: [],
    privat: false
};


for (let i = 0; i < 2; i++){
    let a = prompt("Один из последних просмотреных фильмов?", "");
    let b = prompt("На сколько оцените его?", "");
    if(a != null && b != null && a != "" && b != "" && a.length < 50){
        personalMovieDB.movies[a] = b;
        console.log("done");
    } else {
        console.log("error");
        i--;
    }
    
    
    
}

console.log(personalMovieDB);