import R from 'ramda';

import {
    FETCH_FILMS_START,
    FETCH_FILMS_SUCCESS,
    FETCH_FILMS_BY_SEARCH_START,
    FETCH_FILMS_BY_SEARCH_SUCCESS
} from '../actionTypes';

const initialState = {
    ids: [],
    entities : {},
    currentPage : 0,
    loading : false,
    pageNumber : null,
    totalResults : null
};

export default (state = initialState, { type, payload, currentPage }) => {
    switch (type) {

        case FETCH_FILMS_START :
            return R.merge(state, {
                loading: true
            })
        case  FETCH_FILMS_BY_SEARCH_START:
            return R.merge(state, {
                loading: true
            })

        case FETCH_FILMS_SUCCESS :
            return R.merge(state, {
                ids: R.pluck('id', payload.results),
                entities : R.indexBy( R.prop('id'), payload.results),
                currentPage: currentPage,
                loading: false,
                pageNumber : payload.page,
                totalResults : payload.total_results
            })

        case FETCH_FILMS_BY_SEARCH_SUCCESS :
            return R.merge(state, {
                ids: R.pluck('id', payload.results),
                entities : R.indexBy( R.prop('id'), payload.results),
                currentPage: currentPage,
                loading: false,
                pageNumber : payload.page,
                totalResults : payload.total_results

            })
            
        default:
            return state;
    }
}