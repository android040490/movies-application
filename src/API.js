import axios from 'axios';

const API_KEY = 'ea53235d3cd5996cc07ef798483ee9c3';
const MOVIE_DB_URL = 'https://api.themoviedb.org/3';

export const fetchTopRatedFilms = (id) => {
    return axios.get(`${MOVIE_DB_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US&page=${id}`)
};

export const fetchPopularFilms = (id) => {
    return axios.get(`${MOVIE_DB_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=${id}`)
};

export const fetchPopularSeries = (id) => {
    return axios.get(`${MOVIE_DB_URL}/tv/popular?api_key=${API_KEY}&language=en-US&page=${id}`)
}

export const fetchNowPlayingFilms = (id) => {
    return axios.get(`${MOVIE_DB_URL}/movie/now_playing?api_key=${API_KEY}&language=en-US&page=${id}`)
}

export const fetchUpcomingFilms = (id) => {
    return axios.get(`${MOVIE_DB_URL}/movie/upcoming?api_key=${API_KEY}&language=en-US&page=${id}`)
}

// Film details
export const fetchSimilarFilms = (id) => {
    return axios.get(`${MOVIE_DB_URL}/movie/${id}/similar?api_key=${API_KEY}&language=en-US&page=1`)
}

export const fetchFilmDetails = (id) => {
    return axios.get(`${MOVIE_DB_URL}/movie/${id}?api_key=${API_KEY}&language=en-US`)
};

export const fetchFilmTrailers = (id) => {
    return axios.get(`${MOVIE_DB_URL}/movie/${id}/videos?api_key=${API_KEY}&language=en-US`)
};

export const fetchFilmActors = (id) => {
    return axios.get(`${MOVIE_DB_URL}/movie/${id}/credits?api_key=${API_KEY}`)
};

// TV series details
export const fetchTvSeriesDetails = (id) => {
    return axios.get(`${MOVIE_DB_URL}/tv/${id}?api_key=${API_KEY}&language=en-US`)
};

export const fetchTvSeriesTrailers = (id) => {
    return axios.get(`${MOVIE_DB_URL}/tv/${id}/videos?api_key=${API_KEY}&language=en-US`)
};

export const fetchTvSeriesActors = (id) => {
    return axios.get(`${MOVIE_DB_URL}/tv/${id}/credits?api_key=${API_KEY}&language=en-US`)
};

export const fetchSimilarTvSeries = (id) => {
    return axios.get(`${MOVIE_DB_URL}/tv/${id}/similar?api_key=${API_KEY}&language=en-US&page=1`)
};

// Actor details
export const fetchActorDetails = (id) => {
    return axios.get(`${MOVIE_DB_URL}/person/${id}?api_key=${API_KEY}&language=en-US`)
}

export const fetchActorMovies = (id) => {
    return axios.get(`${MOVIE_DB_URL}/person/${id}/movie_credits?api_key=${API_KEY}&language=en-US`)
}

export const fetchFilmsBysearch = ( searchString, id = 1) => {
    return axios.get(`${MOVIE_DB_URL}/search/movie?api_key=${API_KEY}&language=en-US&query=${searchString}&page=${id}&include_adult=true`)
}

// Persons List
export const fetchPopularPersons = (pageId) => {
    return axios.get(`${MOVIE_DB_URL}/person/popular?api_key=${API_KEY}&language=en-US&page=${pageId}`)
}

export const fetchMovies = {
    'films': {
        'top-rated' : fetchTopRatedFilms,
        'popular' : fetchPopularFilms,
        'now-in-cinemas' : fetchNowPlayingFilms,
        'upcoming-in-cinemas' : fetchUpcomingFilms
    },
    'tv-series' : {
        'popular-series' : fetchPopularSeries
    }
}

export const fetchInfoAboutMovie = {
    trailers : {
        'films' : fetchFilmTrailers,
        'tv-series' : fetchTvSeriesTrailers
    },
    movieInfo : {
        'films' : fetchFilmDetails,
        'tv-series' : fetchTvSeriesDetails
    },
    people : {
        'films' : fetchFilmActors,
        'tv-series' : fetchTvSeriesActors
    },
    similarMovies : {
        'films' : fetchSimilarFilms,
        'tv-series' : fetchSimilarTvSeries
    }

}
