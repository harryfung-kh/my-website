import React from 'react';
import './ThreeGlass.css';
import Glass from './Glassmorphism'

function ThreeGlass() {
    return (
        <div id="three_glass_container">
            <Glass id="middle_glass" glassColor="lightblue">
                <div id="middle_glass_left">hell, weee</div>
                <div id="middle_glass_right">hello</div>
            </Glass>
            {/* <Glass id="top_glass" glassColor="pink"></Glass> */}
            <Glass id="bottom_glass" glassColor="pink"></Glass>
        </div>
    )
};

export default ThreeGlass