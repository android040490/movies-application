import R from 'ramda';

import {
    FETCH_FILM_BY_ID_START,
    FETCH_FILM_BY_ID_SUCCESS
} from '../actionTypes';


const initialState = {
    details : {},
    trailer : '',
    loading : false,
    actors : {
        ids : [],
        entities : {}
    }
};

export default (state = initialState, { type, payload}) => {
    switch (type) {
        case FETCH_FILM_BY_ID_START : {
            return R.merge( state, { loading : true })
        }

        case FETCH_FILM_BY_ID_SUCCESS: {
            let trailer = R.find( R.propEq('type', 'Trailer'), payload.trailers);
            let trailerId = ''
            if( trailer ){
                trailerId = trailer.key
            }
            const actorsData = R.indexBy(R.prop('id'), R.slice(0, 10, payload.actors));
            const actorsIds = R.keys( actorsData );
            return R.merge(
                state, 
                {details : payload.details,
                trailer : trailerId,
                loading : false,
                actors : {
                    entities : actorsData,
                    ids : actorsIds
                }});
            }
    
        default:
            return state;
    }
    
}
