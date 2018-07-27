import R from 'ramda';
import { createSelector } from 'reselect'

export const getFilmsById = (state, id) => R.prop(id, state.films);

export const getFilms = state => {
    const films = R.map(id => getFilmsById(state, id), state.filmsPage.ids);
    return films;
};

export const getCurrentPage = state => state.filmsPage.currentPage;


export const getSearchString = (state) => state.filmsPage.search.toLowerCase();


export const getFilteredFilms =  createSelector( 
    [getFilms, getSearchString], 
    ( films, search ) => R.filter( ( item ) => R.contains( search , R.prop('title', item).toLowerCase()), films )
);

export const getLoading = (state) => state.filmsPage.loading;


// filmDetails reducer

export const getFilmDetails = state => state.filmDetails.details;

export const getTrailerId = state => state.filmDetails.trailer;

export const getActorsIds = state => state.filmDetails.actors.ids;

export const getActorsEntities = state =>  state.filmDetails.actors.entities;

export const getActors = createSelector(
    [getActorsIds, getActorsEntities],
    (ids, entities) => ids.map(id => entities[id])
);

export const getFilmLoading = state => state.filmDetails.loading;

//actorDetails reducer

export const getActorDetails = (state) => state.actorDetails.details;

export const getActorFilms = (state) => state.actorDetails.films;

export const getActorLoading = (state) => state.actorDetails.loading;

//PROPS selectors

export const getRouter = (props) => props.router;

export const getUrlParamId = (props) => props.router.params.id;

export const getCurrentLocation = (props) => props.location.pathname.split('/')[1];

export const getStringOfFields = (field, list) => {
    return R.join(', ', R.pluck(field, list));
};