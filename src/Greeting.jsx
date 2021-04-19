import React from 'react';
import './Greeting.css';
import './test.css';
import Glass from './Global/Glassmorphism';

function Greeting() {

    return (
        <div id="greeting" className="">
            <div className="background_minion"></div>
            <div className="glitch-wrapper">
                <div className="glitch" data-text="Hello, World">Hello, World</div>
            </div>
            <Glass id="outer_circle" className="greeting_circle" glassColor="pink">
                <Glass id="inner_circle" className="greeting_circle" glassColor="pink">
                    <p>Enter</p>
                </Glass>
            </Glass>
        </div>
    );
}

export default Greeting;