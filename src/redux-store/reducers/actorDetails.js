import R from 'ramda';

import {
    FETCH_ACTOR_BY_ID_START,
    FETCH_ACTOR_BY_ID_SUCCESS
} from 'redux-store/actionTypes';

const initialState = {
    details : {},
    films : [],
    loading : false
}

export default (state = initialState, {type, payload}) => {
    switch (type){
        case FETCH_ACTOR_BY_ID_START : {
            return R.merge(state, {
                loading : true
            })
        };

        case FETCH_ACTOR_BY_ID_SUCCESS : {
            return R.merge(
                state, {
                details : payload.details,
                films : payload.movies,
                loading : false
                }
            )
        };

        default : 
            return state
    }
}