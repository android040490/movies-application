import React from 'react';

import NavigationMenu from 'components/NavigationMenu';


const Header = () => {
    return (
        <div className="header wrapper">
            <h1 className="header__logo">
                <span>M</span>
                <span>o</span>
                <span>v</span>
                <span>i</span>
                <span>e</span>
                <span>s</span>
            </h1>
            <div className="header__nav-bar"><NavigationMenu/></div>
        </div>
    );
};

export default Header;