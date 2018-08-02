import React from 'react';
import {Link} from 'react-router';

const NavigationMenu = () => {
    return (
        <ul className="nav-bar">
            <li className="nav-bar__item"><Link className="nav-bar__link" to="/films/top-rated/1">Top rated</Link></li>
            <li className="nav-bar__item"><Link className="nav-bar__link" to="/films/popular/1">Most popular</Link></li>
        </ul>
    );
};

export default NavigationMenu;