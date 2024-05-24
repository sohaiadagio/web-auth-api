const url = 'https://imdb-top-100-movies.p.rapidapi.com/';
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '7c1315d98amsh07d8bb6ba8e106cp101a95jsn6b13bef9c5d6',
        'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com'
    }
};

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('fetchMoviesButton').addEventListener('click', fetchTopMovies);
});

async function fetchTopMovies() {
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        displayMovies(result);
    } catch (error) {
        console.error(error);
    }
}

function displayMovies(movies) {
    const moviesList = document.getElementById('moviesList');
    moviesList.innerHTML = '';

    movies.forEach(movie => {
        const movieItem = document.createElement('div');
        movieItem.className = 'movie-item';
        movieItem.innerHTML = `
            <h5>${movie.title}</h5>
            <p>Rank: ${movie.rank}</p>
            <p>Rating: ${movie.rating}</p>
        `;
        moviesList.appendChild(movieItem);
    });
}
