var URL="http://www.omdbapi.com";

var MOVIE_SEARCH_SELECTOR = '[data-movie-search="movie-search"]'
var FORM_SELECTOR = '[data-form-role="form"]'
var MOVIE_SECTION_SELECTOR = '[data-movie-info="movie-info"]'
var MOVIE_TITLE_DISPLAY = '[data-title-display="target"]'
var POSTER_IMAGE_DISPLAY = '[data-poster-display="target"]'



//-------------------MOVIE DATA-----TITLE, YEAR & POSTER--------------------//

function getMovieData(searchTerms) {
    return $.get(URL, searchTerms)
}

function drawMovieTitle(data) {
    for(i=0; i<2; i++){
    title = data["Search"][i]["Title"]
    year = data["Search"][i]["Year"]
    poster = data["Search"][i]["Poster"]
    $(MOVIE_TITLE_DISPLAY)[i].textContent = (title + ", " + year)
    $(POSTER_IMAGE_DISPLAY)[i].attributes[0].value = poster
    }
}

//-----------------------------------------------------------//


$(FORM_SELECTOR).on("submit", function(event) {
    event.preventDefault();
    var data = {
    "s": " ",
    "apikey": "1ca32dee"
    }
    data.s = $(MOVIE_SEARCH_SELECTOR).val();
    getMovieData(data)
        .then(drawMovieTitle)
    // getPosterData(image)
        .then(drawPosterImage)
});


















// function makeMovieElement() {
//     var movieElement = document.createElement('div');
//     document.body.appendChild(movieElement);
// }

// function makePosterElement() {
//     var posterElement = document.createElement('div');
//     document.body.appendChild(posterElement);
// }