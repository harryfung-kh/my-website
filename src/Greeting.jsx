import React from 'react';
import './Greeting.css';
import centerbackground from './assets/banana2.jpg'
import Glass from './Global/Glassmorphism';

function Greeting() {

    return (
        <div id="greeting" className="">
            <div className="background_minion"></div>
            <h1 id="greeting_title">Hello from Harry Fung</h1>
            <Glass id="outer_circle" className="greeting_circle">
                {/* <div id="outer_circle" className="greeting_circle"> */}
                <Glass id="inner_circle" className="greeting_circle">
                </Glass>
                {/* </div> */}
            </Glass>
        </div>
    );
}

export default Greeting;