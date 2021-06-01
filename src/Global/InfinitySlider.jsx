import React, { useState } from 'react';
import './InfinitySlider.css';
const v = ['1', '2', '3', '4', '5', '6', '7'];

function InfinitySlider() {
    var s = ['hidden', 'hidden', 'hidden', 'hidden', 'hidden', 'hidden', 'hidden']
    const [center, setCenter] = useState(2);

    s[center] = 'center';
    s[(center - 1 + s.length) % s.length] = 'left';
    s[(center - 2 + s.length) % s.length] = 'leftD';
    s[(center + 1) % s.length] = 'right';
    s[(center + 2) % s.length] = 'rightD';

    const slides = [];
    for (var i = 0; i < v.length; i++) {
        slides.push(
            <div key={i} className={`slide ${s[i]}`} >{v[i]}</div>
        )
    }

    const slider = (<div className='slider'>{slides}</div>);

    return (
        <div className="slider-container">
            {slider}
            <div className="prev-button" onClick={() => setCenter((center + 1 + s.length) % s.length)}></div>
            <div className="next-button" onClick={() => setCenter((center - 1 + s.length) % s.length)}></div>
        </div>
    );
}

export default InfinitySlider;