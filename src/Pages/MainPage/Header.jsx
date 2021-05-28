import React from 'react';
import './Header.css'
import iconLight from '../../assets/aMyIcon-light.png';

function Header() {
    return (
        <div id="header" className="header">
            <div className="header_container">
                <div className="header_left">
                    <img id="header_logo" src={iconLight} alt="Logo" className="small_icon_i"></img>
                </div>
                <div></div>
                <div className="header_right">
                    <a id="header_home" className="header_link_current_page" href="#">Home</a>
                    <a href="https://facebook.com.hk">Facebook</a>
                    <a href="https://google.com.hk">Google</a>
                </div>
            </div>
        </div>
    );
}

export default Header;