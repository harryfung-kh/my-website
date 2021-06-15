import React from 'react';
import './Header.css'
import iconLight from '../../assets/aMyIcon-light.png';
import { Link, useRouteMatch, useLocation } from 'react-router-dom';

function Header() {
    let match = useRouteMatch();
    let location = useLocation();
    console.log(match);
    console.log(location);

    let homeUrl = match.url;
    let myPinterestUrl = match.url + 'myPinterest';

    function isActive(url) {
        if (typeof url === 'string' || url instanceof String)
            return url.localeCompare(location.pathname) === 0 ?
                "header_link_current_page" : "";
        return "";
    }

    return (
        <div id="header" className="header">
            <nav className="header_container">
                <div className="header_left">
                    <img id="header_logo" src={iconLight} alt="Logo" className="small_icon_i"></img>
                </div>
                <div></div>
                <div className="header_right">
                    <div className="hamburger">
                        <div className="hamburger_line">
                        </div>
                        <div className="hamburger_line">
                        </div>
                        <div className="hamburger_line">
                        </div>
                    </div>
                    <Link to={homeUrl} className={isActive(homeUrl)}>
                        HOME
                    </Link>
                    <Link to={myPinterestUrl} className={isActive(myPinterestUrl)}>
                        PROJECTS
                    </Link>
                    < a href="https://google.com.hk">CONTACT</a>
                </div>
            </nav>
        </div>
    );
}

export default React.memo(Header);