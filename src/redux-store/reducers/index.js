import {combineReducers} from 'redux'
import {routerReducer} from 'react-router-redux'

import filmsPage from './filmsPage';
import filmDetails from './filmDetails';
import actorDetails from './actorDetails';
import personsPage from './personsPage';
import commonData from './commonData';

export default combineReducers({
    routing: routerReducer,
    filmsPage,
    filmDetails,
    actorDetails,
    personsPage,
    commonData
});
