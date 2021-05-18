import './Cursor.css';
import React, { useState, useEffect } from 'react';

function Cursor() {
    const [pos, setPos] = useState({ x: 200, y: 200 })
    const [cursorStyle, setCursorStyle] = useState(0);
    const size = 18;
    useEffect(() => {
        console.log('cursor effect testing')
        function handleMouseMove(e) {
            setPos({
                x: e.clientX - size / 2,
                y: e.clientY - size / 2
            });

        }

        function handleCursorChange(e) {
            var props = window.getComputedStyle(e.target);
            var cursorType = props.getPropertyValue('Cursor');
            cursorType === 'pointer' ? setCursorStyle(1) : setCursorStyle(0);
        }

        document.addEventListener('mouseover', handleCursorChange, false);
        document.addEventListener('mousemove', handleMouseMove);
        return () => {
            document.removeEventListener('mouseover', handleCursorChange);
            document.removeEventListener('mousemove', handleMouseMove);
        }
    }, []);

    return (
        <div className={`Cursor ${cursorStyle === 1 ? 'Cursor_pointer' : ''}`}
            style={{
                left: pos.x, top: pos.y,
                height: size, width: size,
                borderRadius: size / 2
            }}>
        </div>
    );
}

export default Cursor;
