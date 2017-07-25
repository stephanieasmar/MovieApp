var movieURL="http://www.omdbapi.com";
var posterURL="http://img.omdbapi.com";

var MOVIE_SEARCH_SELECTOR = '[data-movie-search="movie-search"]'
var FORM_SELECTOR = '[data-form-role="form"]'
var MOVIE_SECTION_SELECTOR = '[data-movie-info="movie-info"]'
var MOVIE_TITLE_DISPLAY = '[data-title-display="target"]'
var POSTER_IMAGE_DISPLAY = '[data-poster-display="target"]'

// function makeMovieElement() {
//     var movieElement = document.createElement('div');
//     document.body.appendChild(movieElement);
// }

// function makePosterElement() {
//     var posterElement = document.createElement('div');
//     document.body.appendChild(posterElement);
// }

function getMovieData(searchTerms) {
    return $.get(movieURL, searchTerms)
}

function drawMovieTitle(data) {
    for(i=0; i<2; i++){
    title = data["Search"][i]["Title"]
    year = data["Search"][i]["Year"]
    $(MOVIE_TITLE_DISPLAY)[i].textContent = (title + ", " + year)
    }
}

function getPosterData(searchTerms) {
    return $.get(posterURL, searchTerms, function(data) {
        console.log(data)
    });
}

// function drawPosterData(data) {
//     for(i=0; i<2; i++){
//     poster = data["Search"][i]["Title"]
//     $(POSTER_IMAGE_DISPLAY)[i] = (poster)
//     }
// }

$(FORM_SELECTOR).on("submit", function(event) {
    event.preventDefault();
    var data = {
    "s": " ",
    "apikey": "1ca32dee"
    }
    data.s = $(MOVIE_SEARCH_SELECTOR).val();
    getMovieData(data)
        .then(drawMovieTitle)
});


function main() {

}