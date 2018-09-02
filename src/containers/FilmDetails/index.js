import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Parallax } from 'react-parallax';

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

import ActorThumbnail from 'components/ActorThumbnail';
import PreviousPageBtn from 'components/PreviousPageBtn';
import FilmSidebar from 'components/FilmSidebar';
import Preloader from 'components/Preloader';
import ControllPanel from 'components/ControllPanel';
import SliderCaousel from 'components/SliderCarousel';

class Film extends Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.router.goBack()
    }

    componentDidMount() {
        console.log(this.props)
        this.props.getFilmById( this.props.movieCategory, this.props.movieId);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.movieId != this.props.movieId) {
            this.props.getFilmById( nextProps.movieCategory, nextProps.movieId);
        }
    }

    renderFilm() {
        const { film, trailerId, actors, similarFilms } = this.props
        return (

            <div className="film-page">
                <Parallax bgImage={`https://image.tmdb.org/t/p/original${film.backdrop_path}`}
                    strength={400}>
                    <div className="film-page__header">
                        <div className="film-page__header-wrapper">
                            <div className="film-page__header-content wrapper">
                                <div className="film-page__header-img">
                                    <img className="" src={` https://image.tmdb.org/t/p/w600_and_h900_bestv2${film.poster_path}`} alt={`${film.title}`} />
                                </div>
                                <div className="film-page__header-description">
                                    <div>
                                        <h3 className='film-page__title'>{film.title || film.name} <span>({new Date(film.release_date || film.first_air_date).getFullYear()})</span></h3>
                                    </div>
                                    <div className="film-page__overview">
                                        <h5>Overview:</h5>
                                        <p>{film.overview}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Parallax>
                <div className="film-page__content wrapper">
                    <div>
                        <div className="film-page__content-section">
                            <h3 className="film-page__content-section-title">Top Billed Cast</h3>
                            <div className="list-cards">{actors.map(actor => { return <div key={actor.id} className="list-cards__item"><ActorThumbnail data={actor} /></div> })}</div>
                        </div>
                        <hr />
                        <div className="film-page__content-section">
                            <h3 className="film-page__content-section-title">Trailer</h3>
                            <div className="video-iframe__video">
                                <iframe src={`https://www.youtube.com/embed/${trailerId}`}>
                                </iframe>
                            </div>
                        </div>
                        <hr />
                        <div className="film-page__content-section">
                            <h3 className="film-page__content-section-title">Similar Films</h3>
                            {similarFilms.length ? <SliderCaousel movies={similarFilms} /> : <div>No similar films</div>}

                        </div>
                    </div>
                    <div className="film-page__sidebar">
                        <FilmSidebar film={film} />
                    </div>
                </div>
            </div>

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

export default connect(mapStateToProps, mapDispatchToProps)(Film);