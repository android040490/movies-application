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
    SEARCH_FILM
} from 'redux-store/actionTypes';

export const getFilms = (param, path) =>  dispatch => {
    dispatch({ type: FETCH_FILMS_START});

    Api.fetchFilms(param, path)
        .then((response) => {
            dispatch({      
                type: FETCH_FILMS_SUCCESS,
                payload: response.data.results,
                currentPage: param
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

export const getFilmById = id => async dispatch => {
    dispatch({type: FETCH_FILM_BY_ID_START});

    
    let trailers = await Api.fetchFilmTrailer(id).
    then(resp => resp.data.results)
    let movieInfo = await Api.fetchFilmById(id).then(resp => resp.data)
    let actors = await Api.fetchFilmActors(id).then(resp => resp.data.cast)

    dispatch({
        type: FETCH_FILM_BY_ID_SUCCESS,
        payload: {
            details : movieInfo,
            trailers : trailers,
            actors : actors
        } 
    });

    // Api.fetchFilmById(id)
    //     .then((response) => {
    //         dispatch({      
    //             type: FETCH_FILM_BY_ID_SUCCESS,
    //             payload: {
    //                 details : response.data
    //             } 
    //         });
    //     })
    //     .catch((err) => {
    //         dispatch({
    //             type: FETCH_FILM_BY_ID_FAILURE,
    //             payload: err,
    //             error: true
    //             });
    //     });
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

export const searchFilm = text => dispatch => {
    dispatch({
        type: SEARCH_FILM,
        payload: text
    });
};
