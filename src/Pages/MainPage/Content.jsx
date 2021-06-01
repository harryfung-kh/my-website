import React from 'react';
import './Content.css'
import Home from './ContentPage/Home'


function Content() {
    return (
        <main id="content">
            <Home />
        </main >
    )
}

export default React.memo(Content);