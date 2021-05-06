import React from 'react';
import './MainPage.css'
import Header from './Header'
import Footer from './Footer'
function MainPage() {
    return (
        <div id="main" className="main_grid_container">
            <Header />
            <main id="content"></main>
            <Footer />
        </div>
    );
}

export default MainPage