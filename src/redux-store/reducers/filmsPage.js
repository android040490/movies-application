import R from 'ramda';

import {
    FETCH_FILMS_START,
    FETCH_FILMS_SUCCESS,
    FETCH_FILMS_BY_SEARCH_START,
    FETCH_FILMS_BY_SEARCH_SUCCESS,
    SEARCH_FILM
} from '../actionTypes';

const initialState = {
    ids: [],
    search: '',
    currentPage: 0,
    loading: false
};

export default (state = initialState, { type, payload, currentPage }) => {
    switch (type) {

        case FETCH_FILMS_START || FETCH_FILMS_BY_SEARCH_START:
            return R.merge(state, {
                loading: true
            })

        case FETCH_FILMS_SUCCESS || FETCH_FILMS_BY_SEARCH_SUCCESS:
            return R.merge(state, {
                ids: R.pluck('id', payload),
                currentPage: currentPage,
                loading: false
            })
        case SEARCH_FILM:
            return R.merge(state, { search: payload });
            
        default:
            return state;
    }
}