import React, { useEffect, useState } from 'react';
import { Tab } from '@headlessui/react';
import { useLocation } from 'react-router-dom';
import '../CSS/Header.css';

function Header() {
    const location = useLocation();
    const [isMobileView, setIsMobileView] = useState(false);
    const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);

    useEffect(() => {
        const listItems = document.querySelectorAll('.tab');
        listItems.forEach((item) => {
            item.classList.remove('active');
        });

        const activeListItem = document.querySelector(`.tab a[href*="${location.pathname}"]`);
        if (activeListItem) {
            activeListItem.parentElement.classList.add('active');
        }

        // Check if the current window width is less than or equal to 768px (typical mobile screen)
        const handleResize = () => {
            setIsMobileView(window.innerWidth <= 768);
        };

        // Add event listener to update isMobileView state on window resize
        window.addEventListener('resize', handleResize);
        // Call handleResize initially to set the initial isMobileView value
        handleResize();

        // Cleanup the event listener on component unmount
        return () => window.removeEventListener('resize', handleResize);
    }, [location]);

    const toggleMenu = () => {
        setIsHamburgerOpen(!isHamburgerOpen);
    };

    return (
        <header className="App-header bg-black">
            {/* Display an image in place of the "UNIVERSITY OF MARYLAND CLUB RUNNING" tab on mobile */}
            {isMobileView && (
                <div className="MobileHome">
                    <a href="/home" className="home no-highlight text-xl text-red-600 font-bold whitespace-nowrap">
                        UMD CLUB RUNNING
                    </a>
                </div>
            )}

            {/* Hide the tab on mobile */}
            <Tab.Group className={`tabs ${isMobileView ? 'hidden' : ''}`}>
                <Tab.List>
                    <Tab className="tab home no-highlight text-xl text-red-600">
                        <a href="/home">UNIVERSITY OF MARYLAND CLUB RUNNING</a>
                    </Tab>
                    <Tab.List className="text-white text-xl">
                        <Tab className="tab" dropdown-toggleOff>
                            <a href="https://gmail.us4.list-manage.com/subscribe/post?u=aea7db195a60f69f817e5110d&amp;id=c08d6f1486&amp;f_id=002edfe8f0">
                                Sign-Up
                            </a>
                        </Tab>
                        <Tab className="tab">
                            <a href="/Blog">Blog</a>
                        </Tab>
                        <Tab className="tab">
                            <a href="/Photos" className="dropdown-toggle">
                                Archive
                            </a>
                            <ul className="dropdown">
                                <li>
                                    <a href="/Photos">Photos</a>
                                </li>
                                <li>
                                    <a href="https://us4.campaign-archive.com/home/?u=aea7db195a60f69f817e5110d&amp;id=c08d6f1486">
                                        Emails
                                    </a>
                                </li>
                            </ul>
                        </Tab>
                        <Tab className="tab">
                            <a href="/Races" className="dropdown-toggle">
                                Info
                            </a>
                            <ul className="dropdown">
                                <li>
                                    <a href="/Races">Races</a>
                                </li>
                                <li>
                                    <a href="/Records">Records</a>
                                </li>
                                <li>
                                    <a href="/Workouts">Workouts</a>
                                </li>
                                <li>
                                    <a href="/Routes">Routes</a>
                                </li>
                            </ul>
                        </Tab>
                        <Tab className="tab">
                            <a href="/about" className="dropdown-toggle">
                                About
                            </a>
                            <ul className="dropdown">
                                <li>
                                    <a href="/about">Officers</a>
                                </li>
                                <li>
                                    <a href="/JoinUs">Join Us</a>
                                </li>
                            </ul>
                        </Tab>
                    </Tab.List>
                </Tab.List>
            </Tab.Group>

            {/* Hamburger Icon */}
            {isMobileView && (
                <div className="header-wrapper flex justify-end">
                    <div className="hamburger-menu mr-3 mt-1" onClick={toggleMenu}>
                        <span className="hamburger-icon text-3xl" style={{ color: 'white' }}>
                            &#9776;
                        </span>
                        {isHamburgerOpen && (
                            <div className="hamburger-content text-white">
                                <ul>
                                    <li>
                                        <a href="/home">Home</a>
                                    </li>
                                    <li>
                                        <a href="/gallery">Gallery</a>
                                    </li>
                                    <li>
                                        <a href="/contact">Contact</a>
                                    </li>
                                    {/* Add more menu items as needed */}
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </header>
    );
}

export default Header;
