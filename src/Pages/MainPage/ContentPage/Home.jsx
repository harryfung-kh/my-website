import React from 'react';
//reuse Component
import Card from '../../../Global/Card'
import Section from '../../../Global/Section'

import './Home.css'
import en from '../../../assets/i18n/en.json';

import frontEndLight from '../../../assets/homePage/front-end-light.png';
import backEndLight from '../../../assets/homePage/back-end-light.png';
import devOps from '../../../assets/homePage/devops-light.png';

//helper
import { setIcon, setTitle } from '../../../Util/SetPropertyHelper.js'

function Home() {
    let images = [frontEndLight, backEndLight, devOps]
    let cards = [];
    en.roles.forEach((e, i) => {
        cards.push(
            <Card key={i}
                icon={images[i]}
                header={e.name}
                langHeader={e.skill}
                langArr={e.languages}
            >
            </Card>);
    });

    let sections = [];
    en.sections.forEach((e, i) => {
        let icon = setIcon(e.icon);
        let title = setTitle(e.title)
        let main = { 'content': cards }
        sections.push(
            <Section
                key={i}
                id="about_me"
                icon={icon}
                title={title}
                type='ThreeGlass'
                main={main}>
            </Section>
        )
    });

    return (
        <div id="home_container">
            <div className="h1_container main_padding">
                <h1>{en.h1FrontEndnBackEndProgrammer}</h1>
            </div>
            <div className="h2_container main_padding">
                <h2>{en.h2Hello}</h2>
            </div>
            {sections}

        </div>
    )
};

export default Home