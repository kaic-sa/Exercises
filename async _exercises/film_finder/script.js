const tmdbKey = 'cf89260d0fdd354391a8ebaec6f026ff';
const tmdbBaseUrl = 'https://api.themoviedb.org/3';
const playBtn = document.getElementById('playBtn');

const getGenres = async() => {
    const genreRequestEndpoint = '/genre/movie/list'
    const requestParams = `?api_key=${tmdbKey}`
    const urlToFetch = tmdbBaseUrl + genreRequestEndpoint + requestParams;
    try {
        const response = await fetch(urlToFetch);
        if (response.ok) {
            const jsonResponse = await response.json();

            const genres = jsonResponse.genres;
            return genres;
        }
    } catch (error) {
        console.log(error)
    }
};

const getMovies = async() => {
    const selectedGenre = getSelectedGenre();
    const discoverMovieEndpoint = '/discover/movie'
    const requestParams = `?api_key=${tmdbKey}&with_genre${selectedGenre}`
    const urlToFetch = tmdbBaseUrl + discoverMovieEndpoint + requestParams;
    const response = await fetch(urlToFetch)
    try {
        if (response.ok) {
            console.log('entrei')
            const jsonResponse = await response.json();
            const movies = jsonResponse.results;
            return movies;
        }

    } catch (error) {
        console.log(error)
    }
};

const getMovieInfo = async(movies) => {
    const movieId = movies.id;
    console.log(movies.id)
    const movieEndpoint = `/movie/${movieId}`
    const requestParams = `?api_key=${tmdbKey}`
    const urlToFetch = tdmbBaseUrl + movieEndpoint + tdmbKey
    try {
        const response = await fetch(urlToFetch);
        if (response.ok) {
            console.log('entrei aqui')
            const movieInfo = await response.json()
            return movieInfo;
        }
    } catch (error) {
        console.log(error)
    }
};

// Gets a list of movies and ultimately displays the info of a random movie from the list
const showRandomMovie = async() => {
    const movieInfo = document.getElementById('movieInfo');
    if (movieInfo.childNodes.length > 0) {
        clearCurrentMovie();
    };
    console.log('aqui2 ')
    const movies = await getMovies();
    console.log(movies)
    const randomMovie = getRandomMovie(movies)
    console.log(randomMovie)
    const info = getMovieInfo(randomMovie);
    displayMovie(info)
};

getGenres().then(populateGenreDropdown);
playBtn.onclick = showRandomMovie;