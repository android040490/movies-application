import React, { Component } from 'react';

import FilmThumbnail from 'components/FilmThumbnail';

class ThumbnailsList extends Component {
    constructor(props) {
        super(props);
        
    this.state = {
        fullList : false
    }

        this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick(){
        this.setState({fullList : !this.state.fullList})
    }

    moviesList(){
        if (this.state.fullList){
            return this.props.movies
        }
        return this.props.movies.slice(0, 8)
    }

    render() {
        let { movies, category} = this.props
        return (
            <div>
                <h3>{movies.length} {category}</h3>
                <div className="list-cards">
                    {this.moviesList().map( movie => <div key={movie.id} className="list-cards__item"><FilmThumbnail category={category} film={movie} /></div>)}
                </div>
                <div style={{textAlign : 'center'}}>
                    <button className="toggler-btn" onClick={this.handleClick}>{this.state.fullList ? 'roll up' : 'more'}</button>
                </div>
            </div>
        );
    }
}

export default ThumbnailsList;