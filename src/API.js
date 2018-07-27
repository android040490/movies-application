import axios from 'axios';

const API_KEY = 'ea53235d3cd5996cc07ef798483ee9c3';

export const fetchTopRatedFilms = (id) => {
    return axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=${id}`)
};

export const fetchFilmById = (id) => {
    return axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`)
};

export const fetchFilmTrailer = (id) => {
    return axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}&language=en-US`)
};

export const fetchFilmActors = (id) => {
    return axios.get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}`)
};

export const fetchActorDetails = (id) => {
    return axios.get(`https://api.themoviedb.org/3/person/${id}?api_key=${API_KEY}&language=en-US`)
}

export const fetchActorMovies = (id) => {
    return axios.get(`https://api.themoviedb.org/3/person/${id}/movie_credits?api_key=${API_KEY}&language=en-US`)
}

export const fetchFilms = (id, path) => {
    switch (path){
        case 'top-rated':{
            return fetchTopRatedFilms(id)
        }
    }
};