import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaStrava, FaEnvelope } from 'react-icons/fa';

function Footer() {
    return (
        <>
            <footer id="footer" className="bg-black flex items-center justify-center border-t border-white border-opacity-70 text-white py-6 w-full">
                <div className="inner">
                    <ul className="flex color-white">
                        <li className="inline-block mr-5 color-white"><a href="https://www.facebook.com/UMDclubrunning/?fref=ts"><FaFacebook size={32}/></a></li>
                        <li className="inline-block mr-5"><a href="https://twitter.com/umdclubrunning"><FaTwitter size={32} /></a></li>
                        <li className="inline-block mr-5"><a href="https://www.instagram.com/umdclubrunning/"><FaInstagram size={32} /></a></li>
                        <li className="inline-block mr-5"><a href="mailto:umdclubrunning@gmail.com"><FaEnvelope size={32} /></a></li>
                        <li className="inline-block"><a className="icon" href="https://www.strava.com/clubs/874154"><FaStrava size={32} /></a></li>
                    </ul>                  
                </div>
            </footer>
        </>
    );
}

export default Footer;
