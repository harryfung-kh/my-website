import React from 'react';
import './Glitch.css'
const Glitch = ({ children }) => (
    <div className="glitch_wrapper">
        <div className="glitch" data-text={`${children}`}>
            {children}
        </div>
    </div>
);
export default Glitch;