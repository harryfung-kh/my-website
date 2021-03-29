import './Cursor.css';
import React, { useState, useEffect } from 'react';

function Cursor() {
    const [pos, setPos] = useState({ x: 200, y: 200 })
    const [cursorStyle, setCursorStyle] = useState(0);

    useEffect(() => {
        console.log('testing')
        function handleMouseMove(e) {
            setPos({ x: e.pageX - 10, y: e.pageY - 10 });

        }

        function handleCursorChange(e) {
            var props = window.getComputedStyle(e.target);
            var cursorType = props.getPropertyValue('Cursor');
            cursorType == 'pointer'? setCursorStyle(1) : setCursorStyle(0);
        }

        document.addEventListener('mouseover', handleCursorChange, false);
        document.addEventListener('mousemove', handleMouseMove);
        return () => {
            document.removeEventListener('mouseover', handleCursorChange);
            document.removeEventListener('mousemove', handleMouseMove);
        }
    }, []);

    return (
        <div className={`Cursor ${cursorStyle === 1 ? 'Cursor-pointer' : ''}`}
            style={{ left: pos.x, top: pos.y }}>
        </div>
    );
}

export default Cursor;
