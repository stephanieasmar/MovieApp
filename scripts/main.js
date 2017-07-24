var movieURL="http://www.omdbapi.com/?i=tt3896198&apikey=1ca32dee";
var posterURL="http://img.omdbapi.com/?i=tt3896198&h=600&apikey=1ca32dee";


// GOALS: Use promises to run functions that draws the movie information/poster to the DOM


//STEPS:
//saveMovie: saves the movie data to local storage
//removeMovie: removes saved movie data from local storage
//listMovies: lists all movies curently located in local storage

MOVIE_SELECTOR = '[data-movie-search="movieInput"]'


//onLoad: Welcomes users to site via a popup window
function onLoad() {
    var openedWindow = window.open('')
}


function makeMovieElement() {
    var movieEl = document.createElement('div');
    document.body.appendChild(movieEl);
}



function makePosterElement() {
    var posterEl = document.createElement('div');
    document.body.appendChild(posterEl);
}




//getMovieData: gets movie data
function getMovieData(URL, movieEl) {
    var $userInput = $(textArea);

}





//getPosterData: gets poster data 
function getPosterData(URL, posterEl) {
    
}










//When the user submits in textArea, get data from form:
// function getUserInput(textArea) {
//     var $input = $(textArea); 
//     var $key = $input.attr('name');
//     var $value = $input.val(); 

