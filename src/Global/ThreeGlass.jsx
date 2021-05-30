import React from 'react';
import './ThreeGlass.css';
import Glass from './Glassmorphism';
import Card from './Card';
import en from '../assets/i18n/en.json';

import frontEndLight from '../assets/homePage/front-end-light.png';
import backEndLight from '../assets/homePage/back-end-light.png';
import devOps from '../assets/homePage/devops-light.png';

function ThreeGlass({ children, className }) {
    let classes = ["middle_glass_left", "middle_glass_middle", "middle_glass_right"];
    let images = [frontEndLight, backEndLight, devOps]
    let cards = [];
    let i = 0;
    en.roles.forEach((e) => {
        cards.push(
            <Card key={classes[i]}
                id={classes[i]}
                icon={images[i]}
                header={e.name}
                langHeader={e.skill}
                langArr={e.languages}
            >
            </Card>);
        i++;
    })

    return (
        <div id="three_glass_container" className={className}>
            <Glass id="middle_glass" glassColor="lightblue">
                {cards}
            </Glass>
            {/* <Glass id="top_glass" glassColor="pink"></Glass> */}
            <Glass id="bottom_glass" glassColor="pink"></Glass>
            {children}
        </div>
    )
};

export default ThreeGlass