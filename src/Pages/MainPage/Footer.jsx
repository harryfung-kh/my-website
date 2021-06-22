import React from 'react';
import './Footer.css'
import githubLight from '../../assets/social/github-light.png';
import mailLight from '../../assets/social/mail-light.png';
import { Link } from 'react-router-dom';

function Footer() {
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
                <div id="location">
                    <h3>Harry Fung - Porfo</h3>
                    <p>my friend</p>
                </div>
                <div id="social_media">
                    <h3>FOLLOW ON</h3>
                    <div>
                        <a href="https://github.com/harryfung-kh">
                            <img src={githubLight} alt="github" className="small_icon c_pointer"></img>
                        </a>
                        <a href="mailto:harryfung.k.h@outlook.com">
                            <img src={mailLight} alt="mail" className="small_icon c_pointer"></img>
                        </a>
                    </div>
                </div>
                <div id="about">
                    <h3>ABOUUT MEEA</h3>
                    <p>
                        hello aee yww goaaw about this
                        yeah! hekk jieek are good euw
                    </p>
                </div>
            </div>
        </footer>
    )
}
export default React.memo(Footer);