const fetch = require('node-fetch');
const config = require('../config');

const API_URL = 'https://api.themoviedb.org/3';
// const API_URL_POSTER_PATH = 'https://image.tmdb.org/t/p'

const CACHE = {};

// const getConfig = async () => {
//     let URL = `${API_URL}/configuration?api_key=${config.get('movies').api_key}`;
//     try {
//         let res = fetch(URL);
//         let data = await res.json();
//         console.log(data)

//         return data;
//     } catch (err) {
//         throw err 
//     }
// }


//Global Search

const searchGlobal = async (keyword) => {
    let now = new Date().getTime() / 1000;

    if (CACHE[keyword] && now < CACHE[keyword].timestamp + config.get('movies').cache_expiery) {
        return CACHE[keyword];
    }

    let URL = `${API_URL}/search/multi?api_key=${config.get('movies').api_key}&query=${keyword}`
    try {
        let res = await fetch(URL);
        let data = await res.json();

        CACHE[keyword] = {
            timestamp: new Date().getTime() / 1000,
            data
        };

        return data;
    } catch (err) {
        throw err;
    }
}

// Movie Search

const popMovies = async () => {
    let URL = `${API_URL}/movie/popular?api_key=${config.get('movies').api_key}`
    try {
        let res = await fetch(URL);
        let data = await res.json();

        return data;
    } catch (err) {
        throw err;
    }
}

const searchMovies = async (keyword) => {
    let now = new Date().getTime() / 1000;

    if (CACHE[keyword] && now < CACHE[keyword].timestamp + config.get('movies').cache_expiery) {
        return CACHE[keyword];
    }

    let URL = `${API_URL}/search/movie?api_key=${config.get('movies').api_key}&query=${keyword}`
    try {
        let res = await fetch(URL);
        let data = await res.json();

        CACHE[keyword] = {
            timestamp: new Date().getTime() / 1000,
            data
        };

        return data;
    } catch (err) {
        throw err;
    }
}

const getMovieByID = async (movie_id) => {
    let now = new Date().getTime() / 1000;

    if (CACHE[movie_id] && now < CACHE[movie_id].timestamp + config.get('movies').cache_expiery) {
        return CACHE[movie_id];
    }

    let URL = `${API_URL}/movie/${movie_id}?api_key=${config.get('movies').api_key}`
    try {
        let res = await fetch(URL);
        let data = await res.json();

        CACHE[movie_id] = {
            timestamp: new Date().getTime() / 1000,
            data
        };

        return data;    
    } catch (err) {
        throw err
    }
}

// const getPosterForMovie = async (poster_path) => {
//     let URL = `${API_URL_POSTER_PATH}/w185/${poster_path}`;
//     try {
//         let res = await fetch(URL);
//         let data = await res.json();
        
//         return data;
//     } catch (err) {
//         throw err
//     }
// }

const getVideoForMovie = async (movie_id) => {
    let URL = `${API_URL}/movie/${movie_id}/videos?api_key=${config.get('movies').api_key}`
    try {
        let res = await fetch(URL);
        let data = await res.json();
        
        return data;
    } catch (err) {
        throw err
    }
}

// Tv Show Search

const searchTvShow = async (keyword) => {
    let now = new Date().getTime() / 1000;

    if (CACHE[keyword] && now < CACHE[keyword].timestamp + config.get('movies').cache_expiery) {
        return CACHE[keyword];
    }

    let URL = `${API_URL}/search/tv?api_key=${config.get('movies').api_key}&query=${keyword}`
    try {
        let res = await fetch(URL);
        let data = await res.json();

        CACHE[keyword] = {
            timestamp: new Date().getTime() / 1000,
            data
        };

        return data;
    } catch (err) {
        throw err;
    }
}

const getTvShowByID = async (tv_id) => {
    let now = new Date().getTime() / 1000;

    if (CACHE[tv_id] && now < CACHE[tv_id].timestamp + config.get('movies').cache_expiery) {
        return CACHE[tv_id];
    }

    let URL = `${API_URL}/tv/${tv_id}?api_key=${config.get('movies').api_key}&language=en-US`
    try {
        let res = await fetch(URL);
        let data = await res.json();

        CACHE[tv_id] = {
            timestamp: new Date().getTime() / 1000,
            data
        };

        return data;
    } catch (err) {
        throw err;
    }
}

module.exports = {
    searchGlobal,
    searchMovies,
    popMovies,
    getMovieByID,
    getVideoForMovie,
    // getPosterForMovie,
    searchTvShow,
    getTvShowByID
};