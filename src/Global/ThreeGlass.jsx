import React from 'react';
import './ThreeGlass.css';
import Glass from './Glassmorphism';

function ThreeGlass({ children, className, cards }) {
    function wrap(card, className) {
        return (
            <div className={className}>
                {card}
            </div>
        )
    }
    return (
        <div id="three_glass_container" className={className}>
            <Glass id="middle_glass" glassColor="lightblue">
                {wrap(cards[0], "middle_glass_left")}
                {wrap(cards[1], "middle_glass_middle")}
                {wrap(cards[2], "middle_glass_right")}
            </Glass>
            {/* <Glass id="top_glass" glassColor="pink"></Glass> */}
            <Glass id="bottom_glass" glassColor="pink"></Glass>
            {children}
        </div>
    )
};

export default ThreeGlass