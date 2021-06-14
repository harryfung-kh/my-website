import React from 'react';
import './Glassmorphism.css';


function Glass({ id, className, style, glassColor, children }) {

    if (glassColor == null)
        glassColor = "pink";

    return (
        <div
            id={id ? id : null}
            className={`${className ? className : ''} glass_${glassColor}`}
            style={{ style }}
        >
            {children}
        </div>);
}

export default Glass;
