import React from 'react';
import ThreeGlass from '../../../Global/ThreeGlass'
import './Home.css'
import en from '../../../assets/i18n/en.json';
import meIcon from '../../../assets/about-me.png'

function Home() {
    return (
        <div id="home_container">
            <div className="h1_container main_padding">
                <h1>{en.h1FrontEndnBackEndProgrammer}</h1>
            </div>
            <div className="h2_container main_padding">
                <h2>{en.h2Hello}</h2>
            </div>
            <div id="about_me">
                <img id="me_icon" src={meIcon} alt="me" className="large_icon"></img>
                <div className="h1_container main_padding">
                    <h1>{en.aboutMe}</h1>
                </div>
            </div>
            <ThreeGlass className="main_padding" />

        </div>
    )
};

export default Home