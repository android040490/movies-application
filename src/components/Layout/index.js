import React from 'react';

import Header from 'components/Header';


const Layout = ({ children }) => (

    <div className="page">
        <div className="page__header">
            <Header />
        </div>
        <div className="page__content">
            {children}
        </div>
    </div>

);

export default Layout;