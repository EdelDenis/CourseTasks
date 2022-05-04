"use strict"

let personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function () {
        personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
        while( personalMovieDB.count == "" ||  personalMovieDB.count == null || isNaN( personalMovieDB.count)){
            personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
        }
    },
    showMyDB: function () {
        if(personalMovieDB.privat == false) {
            console.log(personalMovieDB);
       }
    },
    toggleVisibleDB: function () {
        if(personalMovieDB.privat == false) {
            personalMovieDB.privat = true
        } else {
            personalMovieDB.privat = false
        }
    },
    rememberMyFilms: function () {
        for(let i=1;i<3;i++){
            const a = prompt("Один из последних просмотренных фильмов?", ""),
                  b = prompt("На сколько оцените его?", "");
              
            if(a != "" && b != "" && a != null && b != null && a.length < 50){
                personalMovieDB.movies[a] = b;
                console.log("done");
              } else {
                console.log("error")
                i--;
              }
        };
    },
    detectPersonalLevel: function () {
        if(personalMovieDB.count < 10) {
            alert("Просмотрено довольно мало фильмов!");
        } else if (personalMovieDB.count >=10 && personalMovieDB.count <=30){
            alert("Вы классический зритель!")
        } else {
            alert("Вы киноман!")
        }
    },
    writeYourGenres: function () {
        for(let i=1;i<=3;i++){
           let genre = prompt("Ваш любимый жанр под номером: " + i);
           
           if(genre !== "" && genre != null){
           personalMovieDB.genres[i-1] = genre;
           } else {
            alert("Вы ввели некорректные данные или не ввели их вовсе")
            i--;
           }
        }

        personalMovieDB.genres.forEach((item, i ) => {
            console.log("Любимый жанр номер  " + [i+1] + ": " + item)
        });
   }
};

personalMovieDB.start();
personalMovieDB.showMyDB();
personalMovieDB.rememberMyFilms();
personalMovieDB.detectPersonalLevel();
personalMovieDB.writeYourGenres();






