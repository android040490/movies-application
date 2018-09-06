import React from 'react';
import { Link } from 'react-router';
import ReactSVG from 'react-svg';

import arrow from 'assets/icons/baseline-keyboard_arrow_down-24px.svg';

const NavigationMenu = () => {
    return (
        <ul className="nav-bar">
            <li className="nav-bar__item"><div>Films</div>
                <div className="nav-bar__item-icon">
                    <ReactSVG  src={arrow}/>
                </div>
                <ul>
                    <li><Link className="nav-bar__link" to="/movies/movie/now_playing?page=1">Now in cinemas</Link></li>
                    <li><Link className="nav-bar__link" to="/movies/movie/upcoming?page=1">Upcoming in cinemas</Link></li>
                    <li><Link className="nav-bar__link" to="/movies/movie/top_rated?page=1">Top rated</Link></li>
                    <li><Link className="nav-bar__link" to="/movies/movie/popular?page=1">Most popular</Link></li>
                </ul>
            </li>
            <li className="nav-bar__item"><div>TV series</div>
                <div className="nav-bar__item-icon">
                    <ReactSVG  src={arrow}/>
                </div>
                <ul>
                    <li><Link className="nav-bar__link" to="/movies/tv/popular?page=1">Most popular</Link></li>
                    <li><Link className="nav-bar__link" to="/movies/tv/top_rated?page=1">Top rated</Link></li>
                    <li><Link className="nav-bar__link" to="/movies/tv/on_the_air?page=1">On the air</Link></li>
                </ul>
            </li>
            <li ><Link className="nav-bar__item" to="/persons?page=1">Actors</Link></li>
        </ul>
    );
};

export default NavigationMenu;