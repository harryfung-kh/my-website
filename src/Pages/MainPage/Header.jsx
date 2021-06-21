import React, { useRef, useState } from 'react';
import './Header.css'
import iconLight from '../../assets/aMyIcon-light.png';
import { Link, useRouteMatch, useLocation } from 'react-router-dom';
import { trimDoubleSlash } from '../../Util/SetPropertyHelper'
import crossLight from '../../assets/header/cross-light.png'

function Header() {
    let match = useRouteMatch();
    let location = useLocation();
    let homeUrl = match.url;
    let myGalleryUrl = match.url + '/ApiTest';

    myGalleryUrl = trimDoubleSlash(myGalleryUrl);
    homeUrl = trimDoubleSlash(homeUrl);

    const myHam = useRef(null);
    const [nav, setNav] = useState(false);


    function isActive(url) {
        if (typeof url === 'string' || url instanceof String)
            return url.localeCompare(location.pathname) === 0 ?
                "header_link_current_page" : "";
        return "";
    }

    function handleHamClick(e) {
        let newNav = !nav;
        if (newNav) {
            document.documentElement.style.overflowY = 'hidden';
        } else {
            document.documentElement.style.overflowY = 'visible';
        }
        setNav(newNav);
    }

    return (
        <div id="header" className="header">
            <nav className="header_container">
                <Link to={homeUrl}>
                    <div className="header_left">
                        <img id="header_logo" src={iconLight} alt="Logo" className="small_icon_i"></img>
                    </div>
                </Link>
                <div className="hamburger_container">
                    <div className="hamburger" ref={myHam} onClick={handleHamClick}>
                        <div className="first_line hamburger_line">
                        </div>
                        <div className="hamburger_line">
                        </div>
                        <div className="hamburger_line">
                        </div>
                    </div>
                </div>
                <div className={`header_right ${nav ? 'header_right_active' : ''}`}>
                    <Link to={homeUrl} className={isActive(homeUrl)} onClick={handleHamClick}>
                        HOME
                    </Link>
                    <Link to={myGalleryUrl} className={isActive(myGalleryUrl)} onClick={handleHamClick}>
                        PROJECTS
                    </Link>
                    <Link to={homeUrl}>
                        CONTACT
                    </Link>
                    <div className="nav_bar_cross" onClick={handleHamClick}>
                        <img src={crossLight} alt="X" style={{ maxWidth: '36px' }}></img>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default React.memo(Header);