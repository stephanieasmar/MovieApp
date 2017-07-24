// GOALS: Use promises to run functions that draws the movie information/poster to the DOM


//STEPS:
//saveMovie: saves the movie data to local storage
//removeMovie: removes saved movie data from local storage
//listMovies: lists all movies curently located in local storage

var movieURL="http://www.omdbapi.com/?i=tt3896198&apikey=1ca32dee";
var posterURL="http://img.omdbapi.com/?i=tt3896198&h=600&apikey=1ca32dee";

MOVIE_TITLE_SELECTOR = '[data-movie-search="movie-title"]'
SEARCH_BUTTON_SELECTOR = '[data-search-role="search-button"]'

function makeMovieElement() {
    var movieElement = document.createElement('div');
    document.body.appendChild(movieElement);
}

function makePosterElement() {
    var posterElement = document.createElement('div');
    document.body.appendChild(posterElement);
}

function getUserInput(textArea) {
    var $input = $(textArea); 
    var $key = $input.attr('name');
    var $value = $input.val(); 


function getMovieData() {
    $.get(movieURL, function(movieData) {
        console.log(movieData);
    });
}

function getPosterData() {
    $.get(posterURL, function(posterData) {
        console.log(posterData);
    });
}




//************************STUFF**************************//


// function main() {
//     getMovieData()
//         .then(doSomthingHere);
// }
