import React, { useEffect, useRef, useState } from 'react';
import './InfinitySlider.css';

function InfinitySlider() {
    const [center, setCenter] = useState(2);
    const prevButton = useRef(null);
    const nextButton = useRef(null);

    useEffect(() => {
        console.log('infinity slider effect testing');
        console.log(prevButton.current);
        function handleClick() {
        }
        return;
    })

    return (
        <div className="slider-container">
            <div className="slider">
                <div className="slide leftD">0</div>
                <div className="slide left" >1</div>
                <div className="slide center" >2</div>
                <div className="slide right" >3</div>
                <div className="slide rightD">4</div>
                <div className="slide hidden">5</div>
                <div className="slide hidden ">6</div>
                <div className="slide hidden">7</div>
            </div>
            <div className="prev-button" ref={prevButton}></div>
            <div className="next-button" ref={nextButton}></div>
        </div>
    );
}

export default InfinitySlider;