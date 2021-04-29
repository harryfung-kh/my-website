import React from 'react';
import './MainPage.css'
import Header from './Header'

function MainPage(){
    return(
        <div id="main" className="main_grid_container">
            <Header/>
            <main id="content"></main>
            <footer id="footer"></footer>
        </div>
    );
}

export default MainPage