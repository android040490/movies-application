import axios from 'axios';

import * as Api from 'API';

import {
    FETCH_FILMS_START,
    FETCH_FILMS_SUCCESS,
    FETCH_FILMS_FAILURE,
    FETCH_FILM_BY_ID_START,
    FETCH_FILM_BY_ID_SUCCESS,
    FETCH_FILM_BY_ID_FAILURE,
    FETCH_ACTOR_BY_ID_START,
    FETCH_ACTOR_BY_ID_SUCCESS,
    FETCH_FILMS_BY_SEARCH_START,
    FETCH_FILMS_BY_SEARCH_SUCCESS,
    FETCH_FILMS_BY_SEARCH_FAILURE
} from 'redux-store/actionTypes';

export const getFilms = (moviesType, page, pathName,  pageId) =>  dispatch => {
    dispatch({ type: FETCH_FILMS_START});

    Api.fetchMovies[moviesType][page]( pageId )
        .then((response) => {
            dispatch({      
                type: FETCH_FILMS_SUCCESS,
                payload: response.data,
                currentPage: pathName
            });
        })
        .catch((err) => {
            dispatch({
                type: FETCH_FILMS_FAILURE,
                payload: err,
                error: true
                })
      });  
};

export const getFilmsBySearch = (searchString, pathName, id) =>  ( dispatch , getState )=> {
    dispatch({ type: FETCH_FILMS_BY_SEARCH_START});

    Api.fetchFilmsBysearch( searchString, id )
        .then((response) => {
            dispatch({      
                type: FETCH_FILMS_BY_SEARCH_SUCCESS,
                payload: response.data,
                currentPage: pathName
            });
        })
        .catch((err) => {
            dispatch({
                type: FETCH_FILMS_BY_SEARCH_FAILURE,
                payload: err,
                error: true
                })
      });  
};

export const getFilmById = ( category, id )=> async dispatch => {
    dispatch({type: FETCH_FILM_BY_ID_START});

    
    let trailers = await Api.fetchInfoAboutMovie.trailers[category](id).
    then(resp => resp.data.results)
    let movieInfo = await Api.fetchInfoAboutMovie.movieInfo[category](id).then(resp => resp.data)
    let actors = await Api.fetchInfoAboutMovie.people[category](id).then(resp => resp.data.cast)
    let similarFilms = await Api.fetchInfoAboutMovie.similarMovies[category](id).then(resp => resp.data.results)

    dispatch({
        type: FETCH_FILM_BY_ID_SUCCESS,
        payload: {
            details : movieInfo,
            trailers : trailers,
            actors : actors,
            similarFilms : similarFilms
        } 
    })
};

export const getActorById = (id) => async (dispatch) => {
    dispatch({type : FETCH_ACTOR_BY_ID_START})

    const details = await Api.fetchActorDetails(id).then(resp => resp.data);
    const movies = await Api.fetchActorMovies(id).then(resp => resp.data.cast);
    dispatch({
        type : FETCH_ACTOR_BY_ID_SUCCESS,
        payload : {
            details : details,
            movies : movies
        }
    })
}
