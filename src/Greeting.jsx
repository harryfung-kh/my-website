import React from 'react';
import './Greeting.css';
import './test.css';
import centerbackground from './assets/banana2.jpg'
import Glass from './Global/Glassmorphism';

function Greeting() {

    return (
        <div id="greeting" className="">
            <div className="background_minion"></div>
            {/* <div class="glitch-wrapper">
                <div class="glitch" data-text="Hello, World">Hello, World</div>
            </div> */}
            <Glass id="outer_circle" className="greeting_circle">
                {/* <div id="outer_circle" className="greeting_circle"> */}
                <Glass id="inner_circle" className="greeting_circle">
                    <p>Enter</p>
                </Glass>
                {/* </div> */}
            </Glass>
        </div>
    );
}

export default Greeting;