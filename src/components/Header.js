import React, { useEffect, useState } from 'react';
import { Tab } from '@headlessui/react';
import { useLocation } from 'react-router-dom';
import '../CSS/Header.css';

function Header() {
    const location = useLocation();
    const [isMobileView, setIsMobileView] = useState(false);
    const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);

    useEffect(() => {

        //removes active
        const listItems = document.querySelectorAll('.tab');
        listItems.forEach((item) => {item.classList.remove('active');});

        //Adds active to current page on desktop
        const activeListItem = document.querySelector(`.tab a[href*="${location.pathname}"]`);
        if (activeListItem) {
            activeListItem.parentElement.classList.add('active');
        }

        //for mobile
        const handleResize = () => { setIsMobileView(window.innerWidth <= 768);};
        window.addEventListener('resize', handleResize);
        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, [location]);

    const toggleMenu = () => { setIsHamburgerOpen(!isHamburgerOpen); };

    return (
        <header className="App-header bg-black">
            
            {isMobileView && (//title on mobile
                <div className="MobileHome">
                    <a href="/home" className="home no-highlight text-xl text-red-600 font-bold whitespace-nowrap">
                        UMD CLUB RUNNING
                    </a>
                </div>
            )}

            <Tab.Group className={`tabs ${isMobileView ? 'hidden' : ''}`}>
                <Tab.List className={`text-white text-xl ${isMobileView ? 'hidden' : ''}`}>
                    <Tab className="tab home no-highlight text-xl text-red-600">
                        <a href="/home">UNIVERSITY OF MARYLAND CLUB RUNNING</a>
                    </Tab>
                    <Tab className="tab">
                        <a href="/signup">
                            Sign-Up
                        </a>
                    </Tab>
                    <Tab className="tab active:text-red-600">
                        <a href="/Blog">Blog</a>
                    </Tab>
                    <Tab className="tab">
                        <a href="/Photos" className="dropdown-toggle">Archive</a>
                        <ul className="dropdown">
                            <li><a href="/Photos">Photos</a></li>
                            <li><a href="https://us4.campaign-archive.com/home/?u=aea7db195a60f69f817e5110d&id=c08d6f1486">Emails</a></li>
                        </ul>
                    </Tab>
                    <Tab className="tab">
                        <a href="/Races" className="dropdown-toggle">
                            Info
                        </a>
                        <ul className="dropdown">
                            <li><a href="/Races">Races</a></li>
                            <li><a href="/Records">Records</a></li>
                            <li><a href="/Workouts">Train</a></li>
                            <li><a href="/Routes">Routes</a></li>
                        </ul>
                    </Tab>
                    <Tab className="tab">
                        <a href="/about" className="dropdown-toggle">About</a>
                        <ul className="dropdown">
                            <li><a href="/about">Officers</a></li>
                            <li><a href="https://docs.google.com/document/d/1AbWsGq4yMjutG-I_jPUq9fuutEBvtcoPZ5IwTnRc1Ns/edit#heading=h.vkmalmlatt01">Join Us</a></li>
                        </ul>
                    </Tab>
                </Tab.List>
            </Tab.Group>

           

            {isMobileView && ( //hamburger menu
                <>
                    <div className="header-wrapper flex justify-end">
                        <div className={`hamburger-menu mr-5 -mt-2 mb-1 ${isHamburgerOpen ? 'change' : ''}`} onClick={toggleMenu}>
                            <div className="bar1 bg-white w-6 h-[5px]"></div>
                            <div className="bar2 bg-white w-6 h-[5px]"></div>
                            <div className="bar3 bg-white w-6 h-[5px]"></div>
                        </div>
                    </div>
                </>
            )}

            {isMobileView && isHamburgerOpen && ( //scrollable menu on click
                <div className="scrollmenu font-bold text-white">
                    <a href="/SignUp">Sign-Up</a>
                    <a href="/Blog">Blog</a>
                    <a href="/Photos">Photos</a>
                    <a href="/Races">Races</a>
                    <a href="/Records">Records</a>
                    <a href="/Workouts">Workouts</a>
                    <a href="/Routes">Routes</a>
                    <a href="/about">Officers</a>
                    <a href="https://docs.google.com/document/d/1AbWsGq4yMjutG-I_jPUq9fuutEBvtcoPZ5IwTnRc1Ns/edit">Join Us</a>
                </div>
            )}
        </header>
    );
}

export default Header;
