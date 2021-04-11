import React from 'react';
import './Greeting.css';
import centerbackground from './assets/banana2.jpg'

function Greeting() {

    return (
        <div id="greeting" className="">
            <div className="banana"></div>
            <div id="outer_circle" className="greeting_circle">
                <div id="inner_circle" className="greeting_circle"
                    style={{
                        width: "60%",
                        backgroundImage: `url(${centerbackground})`,
                    }}>
                </div>
            </div>
        </div>
    );
}

export default Greeting;