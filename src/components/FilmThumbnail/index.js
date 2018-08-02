
import React, { Component } from 'react';
import {withRouter} from 'react-router';

class FilmThumbnail extends Component {
    constructor(props) {
        super(props);
        
        this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick(){
        this.props.router.push(`/film/${this.props.film.id}`)
    }

    render() {
        let {film} = this.props;
        return (
            <div onClick={this.handleClick} className="film-card-thumbnail">
                <div className="film-card-thumbnail__img">
                    <img src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${film.poster_path}`} alt={film.original_title} />
                </div>
                <h3 className="film-card-thumbnail__title">{film.title}</h3>
            </div>
        );
    }
}

export default withRouter(FilmThumbnail);