import React from 'react';
import ThreeGlass from '../../../Global/ThreeGlass'
import './Home.css'
import en from '../../../assets/i18n/en.json';

function Home() {
    return (
        <div id="home_container">
            <h1>{en.h1FrontEndnBackEndProgrammer}</h1>
            <h2>{en.h2Hello}</h2>
            <ThreeGlass />

        </div>
    )
};

export default Home