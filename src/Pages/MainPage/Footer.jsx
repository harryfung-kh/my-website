import React from 'react';
import './Footer.css'
import githubLight from '../../assets/social/github-light.png';
import mailLight from '../../assets/social/mail-light.png';
import { Link, useRouteMatch } from 'react-router-dom';

function Footer() {
    let match = useRouteMatch();
    let homeUrl = match.url;
    let myGalleryUrl = match.url + '/MyGallery';
    return (
        <footer id="footer">
            <div id="animation" className="">
                <div id="animation_container">
                    <div id="animation_gif"></div>
                </div>
                <h3>Harry Fung - Portfolio Website</h3>
                <p>Web Developer．Backend Developer</p>
            </div>
            <div className="footer_d_container">
                <div id="about">
                    <h3>ABOUT THIS WEBSITE</h3>
                    <p>
                        This website is created by ReactJs, axios and<br /> Create-React-App.
                    </p>
                </div>
                <div id="social_media">
                    <h3>FOLLOW / CONTACT</h3>
                    <div>
                        <a href="https://github.com/harryfung-kh">
                            <img src={githubLight} alt="github" className="small_icon c_pointer"></img>
                        </a>
                        <a href="mailto:harryfung.k.h@outlook.com">
                            <img src={mailLight} alt="mail" className="small_icon c_pointer"></img>
                        </a>
                    </div>
                </div>
                <div id="location">
                    <h3>Navigation</h3>
                    <p>
                        <Link to={homeUrl} >HOME</Link>
                        <Link to={myGalleryUrl}>PROJECT</Link>
                    </p>
                </div>


            </div>
        </footer>
    )
}
export default React.memo(Footer);