import React from 'react';

import NavigationMenu from 'components/NavigationMenu';
import Label from 'components/Label';


const Header = () => {
    return (
        <div className="header wrapper">
            <div className="header__logo">
                <Label/>
            </div>
            <div className="header__nav-bar"><NavigationMenu/></div>
        </div>
    );
};

export default Header;