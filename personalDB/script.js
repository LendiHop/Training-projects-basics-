'use strict';

let personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: true,
    start: function () {
        do {
            personalMovieDB.count = +prompt("How many films you already watched?", "");
        } while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count));
    },
    rememberMyFilms: function () {
        let counter = 0;
        while (counter !== 2) {
            let a = prompt("One of the films that you recently watched?", "");
            if (a === null || a == "" || a.length > 50) {
                continue;
            }  else {
                let b = prompt("Did you like it? (rate from 1-10)", ""); 
                if (b === null || b == "") {
                    continue;
               } else {
                    counter++;
                    personalMovieDB.movies[a] = +b;
               }
            }   
        }
    },
    detectPersonalLevel: function () {
        if (personalMovieDB.count < 10) {
            alert("You watched not many films");
        } else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
            alert("You are a classic watcher");
        } else if (personalMovieDB.count > 30) {
            alert("You watched so many films");
        } else {
            alert("Error");
        }      
    },
    showMyDB: function () {
        if(personalMovieDB.privat == false) {
            console.log(personalMovieDB);
        }  else {
            console.log("Database is privat");
        }
    },
    writeYourGenres: function () {
        let a;
        for (let i = 1; i <= 3; i++) {
            a = prompt(`What is your favourite genre number ${i}:`, '');
            if (a === null || a == "" || a.length > 50) {
                i--;
                continue;
            } else {
                personalMovieDB.genres[i-1] = a;
            }
        }
        personalMovieDB.genres.forEach((currentValue, index) => {
            console.log(`Favourite genre #${index+1} is ${currentValue}`);
        });
    },
    toggleVisibleMyDB: function () {
        if (personalMovieDB.privat == false) {
            personalMovieDB.privat = true;
        } else {
            personalMovieDB.privat = false;
        }
    }
};

personalMovieDB.writeYourGenres();
personalMovieDB.toggleVisibleMyDB();
personalMovieDB.showMyDB();