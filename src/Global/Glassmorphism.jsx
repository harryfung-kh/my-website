import React from 'react';
import './Glassmorphism.css';

export default ({ id, className, style, children }) =>
(
    <div
        id={`${id}`}
        className={`glass_pink ${className}`}
        style={{ style }}
    >
        {children}
    </div>
);