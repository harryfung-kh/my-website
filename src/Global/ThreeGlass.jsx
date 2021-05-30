import React from 'react';
import './ThreeGlass.css';
import Glass from './Glassmorphism'

import frontEndLight from '../assets/homePage/front-end-light.png';

function ThreeGlass({ children, className }) {
    return (
        <div id="three_glass_container" className={className}>
            <Glass id="middle_glass" glassColor="lightblue">
                <div id="middle_glass_left">
                    <img src={frontEndLight} alt="Front-End" />
                    <h3>test</h3>
                    <h4>O_O</h4>
                </div>
                <div id="middle_glass_middle"> O_O </div>
                <div id="middle_glass_right">hello</div>
            </Glass>
            {/* <Glass id="top_glass" glassColor="pink"></Glass> */}
            <Glass id="bottom_glass" glassColor="pink"></Glass>
            {children}
        </div>
    )
};

export default ThreeGlass