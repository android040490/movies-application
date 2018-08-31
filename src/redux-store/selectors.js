import R from 'ramda';
import { createSelector } from 'reselect';
import queryString from 'query-string';

export const getFilmsById = (state, id) => R.prop(id, state.filmsPage.entities);

export const getFilmsList = state => {
    const films = R.map(id => getFilmsById(state, id), state.filmsPage.ids);
    return films;
};

export const getCurrentPageFromStore = state => state.filmsPage.currentPage;

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

export const getSimilarFilms = state => state.filmDetails.similar;

//actorDetails reducer

export const getActorDetails = (state) => state.actorDetails.details;

export const getActorFilms = (state) => state.actorDetails.films;

export const getActorLoading = (state) => state.actorDetails.loading;

//PROPS selectors

export const getRouter = (props) => props.router;

export const getPersonId = (props) => props.router.params.id;

export const getUrlParamId = (props) => queryString.parse(props.location.search).page;

export const getQueryParamSearch = (props) => queryString.parse(props.location.search).search;

export const getUrlParamPage = (props) => props.router.params.page;

export const getCurrentPath = (props) => props.location.pathname.split('/')[1];

export const getFullLocationPath = (props) => props.location.pathname;