import React from 'react';
import '../CSS/Footer.css';
import { FaFacebook, FaTwitter, FaInstagram, FaTumblr, FaStrava } from 'react-icons/fa';

function Footer() {
    return (
        <div>
            <footer id="footer">
                <div className="inner">
                    <p>Have a question about Maryland Club Running? Feel free to email us at <b>umdclubrunning@gmail.com</b></p>

                    <ul className="icons">
                        <li><a className="icon" href="https://www.facebook.com/UMDclubrunning/?fref=ts"><FaFacebook size={35} /><span className="label"></span></a></li>
                        <li><a className="icon" href="https://twitter.com/umdclubrunning"><FaTwitter size={35} /><span className="label"></span></a></li>
                        <li><a className="icon" href="https://www.instagram.com/umdclubrunning/"><FaInstagram size={35} /><span className="label"></span></a></li>
                        <li><a className="icon" href="https://maryland-club-running.tumblr.com/"><FaTumblr size={35} /><span className="label"></span></a></li>
                        <li><a className="icon" href="https://www.strava.com/clubs/874154"><FaStrava size={35} /><span className="label"></span></a></li>

                    </ul>

                    <ul className="copyright">
                        <li><b>Follow us on social media!</b></li>
                    </ul>

                    <p>This content is not endorsed, approved, sponsored, or provided by or on behalf of the University of Maryland or its affiliates, but it is endorsed, approved, sponsored, and provided by your president Sohan Ganatra</p>
                </div>
            </footer>
        </div>
    );
}

export default Footer;
