import React, { Component } from 'react';
import { connect } from 'react-redux';
import R from 'ramda';

import { getFilmById } from 'redux-store/actions';
import { getStringOfFields } from 'redux-store/selectors';
import { getFilmDetails, getTrailerId, getActors, getFilmLoading } from 'redux-store/selectors';

import ActorThumbnail from 'components/ActorThumbnail';
import PreviousPageBtn from 'components/PreviousPageBtn';

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
                                <div>
                                    <p><strong>Release date:</strong> <span>{new Date(film.release_date).toLocaleDateString()}</span></p>
                                    <p><strong>Original language: </strong><span>{film.original_language}</span></p>
                                    <p><strong>Production companies: </strong>{getStringOfFields('name', film.production_companies)}</p>
                                    <p><strong>Production countries: </strong>{getStringOfFields('name', film.production_countries)}</p>
                                    <p><strong>Genre: </strong>{getStringOfFields('name', film.genres)}</p>
                                    <p><strong>Budget: </strong>{film.budget} $</p>
                                    <p><strong>Revenue: </strong>{film.revenue} $</p>
                                    <p><strong>Runtime: </strong>{film.runtime} m</p>
                                    <h5>Overview:</h5>
                                    <p>{film.overview}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="film-details__content wrapper">
                    <div className="film-details__actors-list">
                        {actors.map(actor => { return <div  key={actor.id} className="film-details__actors-list-item"><ActorThumbnail data={actor} /></div>})}
                    </div>
                    <div className="film-details__sidebar"></div>
                </div>

                <div><iframe style={{ width: '800px', height: '400px' }} src={`https://www.youtube.com/embed/${trailerId}`}></iframe></div>

            </div>

        );
    };

    render() {
        const { film, loading } = this.props;
        return (
            <div className="film-page">
                <div className="film-page__header"><PreviousPageBtn /></div>

                <div className="film-page__content">
                    {!loading && Object.keys(film).length ? this.renderFilm() : "loading"}
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