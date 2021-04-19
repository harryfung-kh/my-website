import React from 'react';
import './Glassmorphism.css';

export default ({ id, className, style, glassColor, children }) =>
(
    <div
        id={`${id}`}
        className={`glass_${glassColor} ${className}`}
        style={{ style }}
    >
        {children}
    </div>
);