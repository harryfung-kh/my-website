import React from 'react';
import './Glitch.css'

export default ({ children }) => (
    <div className="glitch_wrapper">
        <div className="glitch" data-text={`${children}`}>
            {children}
        </div>
    </div>
);