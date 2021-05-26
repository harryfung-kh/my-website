import React from 'react';
import './BackgroundMask.css';

function BackgroundMask({ width, height, z }) {
    let _z = z == null ? -1 : z;
    const style = {
        width: width,
        height: height,
        zIndex: _z
    }



    return (
        <div className="background_mask"
            style={style}>
        </div>
    );
}

export default BackgroundMask;