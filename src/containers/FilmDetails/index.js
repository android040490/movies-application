import React, { Component } from 'react';
import { connect } from 'react-redux';
import R from 'ramda';

import { getFilmById } from 'redux-store/actions';
import { getFilmDetails, getTrailerId, getActors, getFilmLoading } from 'redux-store/selectors';

import ActorThumbnail from 'components/ActorThumbnail';
import PreviousPageBtn from 'components/PreviousPageBtn';
import FilmSidebar from 'components/FilmSidebar';
import Preloader from 'components/Preloader';
import ControllPanel from 'components/ControllPanel';

class Film extends Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.router.goBack()
    }

    componentDidMount() {
        this.props.getFilmById(this.props.params.id);
    }


    renderFilm() {
        const { film, trailerId, actors } = this.props
        console.log(film)
        return (
            <div className="film-details">
                <div className="film-details__header" style={{ background: `url(https://image.tmdb.org/t/p/original${film.backdrop_path}) , rgba(200, 100, 100, .8)` }} >
                    <div className="film-details__header-wrapper">
                        <div className="film-details__header-content wrapper">
                            <div className="film-details__header-img">
                                <img className="" src={` https://image.tmdb.org/t/p/w600_and_h900_bestv2${film.poster_path}`} alt={`${film.title}`} />
                            </div>
                            <div className="film-details__header-description">
                                <div>
                                    <h3 className='film-details__title'>{film.title} <span>({new Date(film.release_date).getFullYear()})</span></h3>
                                </div>
                                <div className="film-details__overview">
                                    <h5>Overview:</h5>
                                    <p>{film.overview}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="film-details__content wrapper">
                    <div className="film-details__actors-list">
                        <h3 className="film-details__actors-list-title">Top Billed Cast</h3>
                        <div className="film-details__actors-list-items">{actors.map(actor => { return <div key={actor.id} className="film-details__actors-list-item"><ActorThumbnail data={actor} /></div> })}</div>
                    </div>
                    <div className="film-details__sidebar">
                        <FilmSidebar film={film} />
                    </div>
                </div>

                <div className="video-iframe wrapper">

                    <div className="video-iframe__video">
                        <iframe src={`https://www.youtube.com/embed/${trailerId}`}>
                        </iframe>
                    </div>
                </div>

            </div>

        );
    };

    render() {
        const { film, loading } = this.props;
        return (
            <div className="film-page">
                <ControllPanel>
                    <PreviousPageBtn/>
                </ControllPanel>
                
                <div className="film-page__content">
                    {!loading && Object.keys(film).length ? this.renderFilm() : <Preloader/>}
                </div>
            </div>
        );
    };
};

const mapDispatchToProps = {
    getFilmById
};

const mapStateToProps = (state) => ({
    film: getFilmDetails(state),
    trailerId: getTrailerId(state),
    actors: getActors(state),
    loading: getFilmLoading(state)
});

export default connect(mapStateToProps, mapDispatchToProps)(Film);