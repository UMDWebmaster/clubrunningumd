import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaStrava, FaEnvelope } from 'react-icons/fa';

function Footer() {
    return (
        <>
            <footer id="footer" className="bg-neutral-900 flex items-center justify-center border-t border-white border-opacity-70 text-white pt-6 pb-1 w-full">
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
            <footer className="bg-neutral-900 flex items-center justify-center text-white pt-2 pb-3 w-full">
                <div className="inner">
                    <ul className="flex color-white">
                        <li className="inline-block mr-5 color-white">Report bugs or request features to <strong><a href="mailto:umdwebmast3r@gmail.com">umdwebmast3r@gmail.com</a></strong></li>
                    </ul>
                </div>
            </footer>
        </>
    );
}

export default Footer;