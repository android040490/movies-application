import {
    FETCH_PERSONS_START,
    FETCH_PERSONS_SUCCESS,
    FETCH_PERSONS_FAILURE } from 'redux-store/actionTypes';

const initialState = {
    loading : false,
    data : []
}

export default ( state = initialState, {type, payload}) => {
    switch (type) {

        case FETCH_PERSONS_START :
            return { 
                ...state,
                loading : true
            }

        case FETCH_PERSONS_SUCCESS :
            return {
                ...state,
                loading : false,
                data : payload.results
            }

        default : 
            return state
    }
}