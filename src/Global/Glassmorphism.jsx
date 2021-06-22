import React from 'react';
import './Glassmorphism.css';


function Glass({ id, className, style, glassColor, children }, ref) {

    if (glassColor == null)
        glassColor = "pink";

    return (
        <div
            id={id ? id : null}
            className={`${className ? className : ''} glass_${glassColor}`}
            style={{ style }}
            ref={ref}
        >
            {children}
        </div>);
}

export default React.forwardRef(Glass);
