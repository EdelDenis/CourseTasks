"use strict"


let personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
        while(personalMovieDB.count == "" || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
        }
    },
    showMyDB: function () {
        if(personalMovieDB.privat){
            console.log("База данных засекречена");
        } else {
            console.log(personalMovieDB);
        }
    },
    toggleVisibleDB:function () {
      if(personalMovieDB.privat){
          personalMovieDB.privat = false
      } else {
        personalMovieDB.privat = true
      }
    },
    rememberMyFilms: function(){
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
    },
    writeYourGenres:function () {
        for(let i=1;i<=3;i++){
            let genre = prompt("Ваш любимый жанр под номером: "+ [i])
            if(genre == "" || genre == null ) {
                console.log("Вы не ввели жанр");
                i--;
            } else {
                personalMovieDB.genres[i-1] = genre;
            }
        }
        personalMovieDB.genres.forEach((item,i) => {
             console.log("Ваш любимый жанр под номером: " + [i+1] + " - это " + item);
        })
        
    },
    detectPersonalLevel: function() {
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


};

personalMovieDB.start();
personalMovieDB.showMyDB();
personalMovieDB.rememberMyFilms();
personalMovieDB.writeYourGenres();
personalMovieDB.detectPersonalLevel();





