import React from 'react';

import NavigationMenu from 'components/NavigationMenu';


const Header = () => {
    return (
        <div className="header wrapper">
            <div className="header__nav-bar"><NavigationMenu/></div>
        </div>
    );
};

export default Header;