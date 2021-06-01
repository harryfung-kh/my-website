import React from 'react';
//reuse Component
import ThreeGlass from '../../../Global/ThreeGlass'
import Card from '../../../Global/Card'

import './Home.css'
import en from '../../../assets/i18n/en.json';

// ****     section 1
import meIcon from '../../../assets/about-me.png'
// ****     ****    section 1 ThreeGlass
import frontEndLight from '../../../assets/homePage/front-end-light.png';
import backEndLight from '../../../assets/homePage/back-end-light.png';
import devOps from '../../../assets/homePage/devops-light.png';

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


    return (
        <div id="home_container">
            <div className="h1_container main_padding">
                <h1>{en.h1FrontEndnBackEndProgrammer}</h1>
            </div>
            <div className="h2_container main_padding">
                <h2>{en.h2Hello}</h2>
            </div>
            {/*section 1*/}
            <div id="about_me">
                <img id="me_icon" src={meIcon} alt="me" className="large_icon"></img>
                <div className="h1_container main_padding">
                    <h1>{en.aboutMe}</h1>
                </div>
            </div>
            <ThreeGlass className="main_padding" cards={cards} />
            {/*section 1 end*/}
        </div>
    )
};

export default Home