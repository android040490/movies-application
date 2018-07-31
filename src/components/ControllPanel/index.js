import React from 'react';

const ControllPanel = ({children}) => {
    return (
        <div className="controll-panel wrapper">
            {React.Children.map(children, child => (
                <div className="controll-panel__item">{child}</div>
            ))}
        </div>
    );
};

export default ControllPanel;