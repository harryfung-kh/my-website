import React from 'react';
//reuse Component
import ThreeGlass from '../../../Global/ThreeGlass'
import Card from '../../../Global/Card'
import Section from '../../../Global/Section'

import './Home.css'
import en from '../../../assets/i18n/en.json';

// ****     section 1
import meIcon from '../../../assets/about-me.png'
// ****     ****    section 1 ThreeGlass
import frontEndLight from '../../../assets/homePage/front-end-light.png';
import backEndLight from '../../../assets/homePage/back-end-light.png';
import devOps from '../../../assets/homePage/devops-light.png';

//helper
import { setIcon, setTitle } from '../../../Util/SetPropertyHelper.js'

function Home() {

    // for section 1 ThreeGlass
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
        let title = setTitle(e)
        let main = { 'content': cards }
        sections.push(
            <Section id="about_me"
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