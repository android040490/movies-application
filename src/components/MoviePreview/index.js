
import React, { Component } from 'react';
import { Link } from 'react-router';
import R from 'ramda';

import {getDateFromString} from 'Pipes';

class MoviePreview extends Component {

    render() {
        const { film, type } = this.props;
        const shortDescription = `${R.take(150, film.overview)}...`
        return (
            <div className='movie-preview'>
                <div className='movie-preview__content'>
                    <div className='movie-preview__img'>
                        <img src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${film.poster_path}`} alt={film.title} />
                    </div>
                    <div className="movie-preview__description">
                        <div>
                            <h3 className='movie-preview__title'>{film.title || film.name}</h3>
                            <p className="movie-preview__releast-date">{getDateFromString(film.release_date || film.first_air_date)}</p>
                            <p className='movie-preview__overview'>{shortDescription}</p>
                        </div>
                        <div>
                            <hr/>
                            <div ><Link className='movie-preview__link' to={`/movie?category=${type}&movieId=${film.id}`} >More info</Link></div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default MoviePreview;