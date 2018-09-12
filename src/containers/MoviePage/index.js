import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getFilmById } from 'redux-store/actions';
import {
    getFilmDetails,
    getTrailerId,
    getActors,
    getFilmLoading,
    getSimilarFilms,
    getFullLocationPath,
    getQueryParamMovieId,
    getQueryParamCategory

} from 'redux-store/selectors';

import PreviousPageBtn from 'components/PreviousPageBtn';
import Preloader from 'components/Preloader';
import ControllPanel from 'components/ControllPanel';
import FilmInfo from 'components/FilmInfo';

class MoviePage extends Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.router.goBack()
    }

    componentDidMount() {
        this.props.getFilmById( this.props.movieCategory, this.props.movieId);

    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.movieId != this.props.movieId) {
            this.props.getFilmById( nextProps.movieCategory, nextProps.movieId);
        }
    }

    renderFilm() {
        return (
            <FilmInfo {...this.props} />
        );
    };

    render() {
        const { film, loading } = this.props;
        return (
            <div>
                <ControllPanel>
                    <PreviousPageBtn />
                </ControllPanel>
                <div>
                    {!loading && Object.keys(film).length ? this.renderFilm() : <Preloader />}
                </div>
            </div>
        );
    };
};

const mapDispatchToProps = {
    getFilmById
};

const mapStateToProps = (state, ownProps) => ({
    film: getFilmDetails(state),
    trailerId: getTrailerId(state),
    actors: getActors(state),
    loading: getFilmLoading(state),
    similarFilms: getSimilarFilms(state),
    fullPath: getFullLocationPath(ownProps),
    movieId: getQueryParamMovieId(ownProps),
    movieCategory: getQueryParamCategory(ownProps)
});

export default connect(mapStateToProps, mapDispatchToProps)(MoviePage);