import {
    FETCH_PERSONS_SUCCESS,
    FETCH_FILMS_BY_SEARCH_SUCCESS,
    FETCH_FILMS_SUCCESS } from 'redux-store/actionTypes';

const initialState = {
    totalPages : null
}

export default ( state = initialState, {type, payload}) => {
    switch (type) {

        case FETCH_PERSONS_SUCCESS :
            return {
                ...state,
                totalPages : payload.total_pages
            }

        case FETCH_FILMS_BY_SEARCH_SUCCESS :
        return {
            ...state,
            totalPages : payload.total_pages
        }

        case FETCH_FILMS_SUCCESS :
        return {
            ...state,
            totalPages : payload.total_pages
        }

        default : 
            return state
    }
}