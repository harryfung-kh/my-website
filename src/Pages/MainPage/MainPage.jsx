import React from 'react';
import './MainPage.css'
import Header from './Header'
import Footer from './Footer'
import Content from './Content'
function MainPage() {
    return (
        <div id="main" className="main_grid_container">
            <Header />
            <Content />
            <Footer />
        </div>
    );
}

export default MainPage