const url = document.location.pathname;

function init() {
    switch (url) {
        case `/`:
        case `/index.html`:
            console.log("index page");
            break;
        case "/movie-details.html":
            console.log("movie details page");
            break;
        case "/search.html":
            console.log("search page");
            break;
        case "/shows.html":
            console.log("tv shows page");
            break;
        case "/tv-details.html":
            console.log("tv details page");
            break;
        default:
            alert("Sorry! nothing found");
    }
}

document.addEventListener("DOMContentLoaded", init);