import React from 'react';
import { Link } from 'react-router';
import ReactSVG from 'react-svg';

import arrow from 'assets/icons/baseline-keyboard_arrow_down-24px.svg';

const NavigationMenu = () => {
    return (
        <ul className="nav-bar">
            <li className="nav-bar__item"><div>Films</div>
                <div className="nav-bar__item-icon"><ReactSVG  src={arrow}/></div>
                <ul>
                    <li><Link className="nav-bar__link" to="/movies/films/now-in-cinemas?page=1">Now in cinemas</Link></li>
                    <li><Link className="nav-bar__link" to="/movies/films/upcoming-in-cinemas?page=1">Upcoming in cinemas</Link></li>
                    <li><Link className="nav-bar__link" to="/movies/films/top-rated?page=1">Top rated</Link></li>
                    <li><Link className="nav-bar__link" to="/movies/films/popular?page=1">Most popular</Link></li>
                </ul>
            </li>
            <li className="nav-bar__item"><div>TV series</div>
                <div className="nav-bar__item-icon"><ReactSVG  src={arrow}/></div>
                <ul>
                    <li><Link className="nav-bar__link" to="/movies/tv-series/popular-series?page=1">Most popular</Link></li>
                </ul>
            </li>
            <li ><Link className="nav-bar__item" to="/persons?page=1">Actors</Link></li>
        </ul>
    );
};

export default NavigationMenu;