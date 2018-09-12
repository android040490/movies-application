import React, { Component } from 'react';
import { Parallax } from 'react-parallax';
import FastAverageColor from 'fast-average-color/dist/index.es6';

import ActorThumbnail from 'components/ActorThumbnail';
import FilmSidebar from 'components/FilmSidebar';
import SliderCaousel from 'components/SliderCarousel';

class FilmInfo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            bg : 'rgba(255, 255, 255, .7)',
            color : '#fff'
        }
        
        this.posterRef = React.createRef();
        this.getColor = this.getColor.bind(this);
    }

    getColor(){
        let fac = new FastAverageColor();
        let container = this.posterRef.current;
        let color = fac.getColor(container, {top: 600});
        let {value, isDark} = color;
        let bg = `rgba(${value[0]},${value[1]},${value[2]}, .7)`;

        this.setState({bg : bg, color : isDark ? '#fff' : '#000'})
        fac.destroy();
    }

    render() {
        const { film, trailerId, actors, similarFilms } = this.props;
        let {bg, color} = this.state;
        return (
            <div className="film-page">
                <Parallax bgImage={`https://image.tmdb.org/t/p/original${film.backdrop_path}`}
                    strength={200}>
                    <div style={{color: color}} className="film-page__header">
                        <div style={{backgroundColor : bg}} className="film-page__header-wrapper">
                            <div className="film-page__header-content wrapper">
                                <div className="film-page__header-img">
                                    <img ref={this.posterRef} onLoad={this.getColor} crossOrigin='anonymous' src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${film.poster_path}`} alt={`${film.title}`} />
                                </div>
                                <div className="film-page__header-description">
                                    <div>
                                        <h3 className='film-page__title'>{film.title || film.name} <span>({new Date(film.release_date || film.first_air_date).getFullYear()})</span></h3>
                                    </div>
                                    <div className="film-page__overview">
                                        <h4>Overview:</h4>
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
    }
}

export default FilmInfo;