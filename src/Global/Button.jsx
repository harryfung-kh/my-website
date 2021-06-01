import React from 'react';
import './Button.css';

const Button = ({ children, parameter }) => {
    let btnStyle = null;
    let height = 40;
    let width = 90;
    let borderHeight = 0;
    if (parameter != null) {
        height = parameter.height ? parameter.height : height;
        width = parameter.width ? parameter.width : width;
        borderHeight = height * 0.45;
        btnStyle = {
            width: width,
            height: height
        };
    }
    return (
        <div
            className="btn_container"
            style={btnStyle != null ? btnStyle : {}}
        >
            <div className="btn" style={{ borderRadius: `${borderHeight}px` }}>
                {children}
            </div>
        </div >
    )
};
export default Button;