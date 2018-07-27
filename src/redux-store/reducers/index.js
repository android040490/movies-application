import {combineReducers} from 'redux'
import {routerReducer} from 'react-router-redux'

import films from './films';
import filmsPage from './filmsPage';
import filmDetails from './filmDetails';
import actorDetails from './actorDetails';

export default combineReducers({
    routing: routerReducer,
    films,
    filmsPage,
    filmDetails,
    actorDetails
});
