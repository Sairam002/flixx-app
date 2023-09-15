const currentPath = document.location.pathname;
const api_URL = "https://api.themoviedb.org/3";
const api_Key = "1d03f25d443f1b48d1e93a91ee77ca52";

function init() {
    switch (currentPath) {
        case `/`:
        case `/index.html`:
            // console.log("index page");
            popularMovies();
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

async function fetchAPIDetails(endpoint) {
    const response = await fetch(`${api_URL}/${endpoint}?api_key=${api_Key}&language=en-US`);
    const data = await response.json();

    return data.results;
}

async function popularMovies() {
    const popularMovies = document.getElementById("popular-movies");
    let movies = await fetchAPIDetails("movie/popular");

    movies = Array.from(movies);
    movies.forEach(function (movie) {
        const div = document.createElement("div");
        const a = document.createElement("a");
        const img = document.createElement("img");
        const innerDiv = document.createElement("div");
        const h5 = document.createElement("h5");
        const p = document.createElement("P");
        const small = document.createElement("small");

        small.setAttribute("class", "text-muted");
        small.textContent = `Release: ${movie.release_date}`;

        p.setAttribute("class", "card-text");
        p.appendChild(small);

        h5.setAttribute("class", "card-title");
        h5.textContent = `${movie.title}`;

        innerDiv.setAttribute("class", "card-body");
        innerDiv.appendChild(h5);
        innerDiv.appendChild(p);

        img.setAttribute(
            "src",
            `${movie.poster_path ?
                `https://image.tmdb.org/t/p/w500${movie.poster_path}` : "../images/no-image.jpg"}`);
        img.classList.add("card-img-top");
        img.setAttribute("alt", "Movie Title");

        a.setAttribute("href", `movie-details.html?id=${movie.id}`);
        a.appendChild(img);

        div.setAttribute("class", "card");
        div.appendChild(a);
        div.appendChild(innerDiv);

        popularMovies.appendChild(div);
    })
}


document.addEventListener("DOMContentLoaded", init);
// fetchDetails("movie/popular?language=en-US&page=1")