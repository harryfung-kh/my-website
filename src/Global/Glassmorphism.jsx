import React from 'react';
import './Glassmorphism.css';


function Glass({ id, className, style, glassColor, children }) {

    if (glassColor == null)
        glassColor = "pink";

    return (
        <div
            id={id ? id : null}
            className={`glass_${glassColor} ${className ? className : ''}`}
            style={{ style }}
        >
            {children}
        </div>);
}

export default Glass;
