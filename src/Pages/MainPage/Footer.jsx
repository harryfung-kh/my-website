import React from 'react';
import './Footer.css'
import facebookLight from '../../assets/social/facebook-light.png';
import githubLight from '../../assets/social/github-light.png';
import mailLight from '../../assets/social/mail-light.png';

function Footer() {
    return (
        <footer id="footer">
            <div id="animation" className="">
                <div id="animation_container">
                    <div id="animation_gif"></div>
                </div>
                <h3>TEMPLATE</h3>
                <p>Wxx Axsiwn. Twaa. Daruy.</p>
            </div>
            <div className="footer_d_container">
                <div id="location">
                    <h3>LAERTION</h3>
                    <p>my friend</p>
                </div>
                <div id="social_media">
                    <h3>FOLLOW ON</h3>
                    <div>
                        <img src={githubLight} alt="github" className="small_icon c_pointer"></img>
                        <img src={facebookLight} alt="facebook" className="small_icon c_pointer"></img>
                        <img src={mailLight} alt="mail" className="small_icon c_pointer"></img>

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