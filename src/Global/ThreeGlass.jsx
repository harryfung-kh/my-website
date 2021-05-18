import React from 'react';
import './ThreeGlass.css';
import Glass from './Glassmorphism'

function ThreeGlass() {
    return (
        <div id="three_glass_container">
            <Glass id="middle_glass"></Glass>
            <Glass id="top_glass" glassColor="white"></Glass>
            <Glass id="bottom_glass" glassColor="white"></Glass>
        </div>
    )
};

export default ThreeGlass