import React from 'react';
import {Link} from 'react-router';

const NavigationMenu = () => {
    return (
        <div>
            <Link to="/films/top-rated/1">Top rated</Link>
            <Link to="/films/popular/1">Most popular</Link>
        </div>
    );
};

export default NavigationMenu;