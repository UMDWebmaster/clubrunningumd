import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import '../CSS/Header.css';

function Header() {
    const location = useLocation();

    useEffect(() => {
        const listItems = document.querySelectorAll('.tabs li');
        listItems.forEach((item) => {
            item.classList.remove('active');
        });

        const activeListItem = document.querySelector(`.tabs li a[href="${location.pathname}"]`);
        if (activeListItem) {
            activeListItem.parentElement.classList.add('active');
        }
    }, [location]);

    return (
        <div>
            <header class="App-header">
                <div class="tabs">
                    <ul>
                        <li className="home"><a href="/home">UNIVERSITY OF MARYLAND CLUB RUNNING</a></li>
                        <li dropdown-toggleOff><a href="https://gmail.us4.list-manage.com/subscribe/post?u=aea7db195a60f69f817e5110d&amp;id=c08d6f1486&amp;f_id=002edfe8f0">Sign-Up</a></li>
                        
                        <li><a href="/Blog">Blog</a></li>


                        
                        <li>
                            <a href="/Photos" class="dropdown-toggle">Archive</a>
                            <ul className="dropdown">
                                <li><a href="/Photos">Photos</a></li>
                                <li><a href="https://us4.campaign-archive.com/home/?u=aea7db195a60f69f817e5110d&amp;id=c08d6f1486">Emails</a></li>
                            </ul>

                        </li>
                        <li>
                            <a href="/Races" class="dropdown-toggle">Members</a>
                            <ul className="dropdown">
                                <li><a href="/Races">Races</a></li>
                                <li><a href="/Records">Records</a></li>
                                <li><a href="/Workouts">Workouts</a></li>
                                <li><a href="/Routes">Routes</a></li>


                            </ul>

                        </li>
                        <li>
                            <a href="/about" class="dropdown-toggle">About</a>
                            <ul className="dropdown">
                                <li><a href="/about">Officers</a></li>
                                <li><a href="/JoinUs">Join Us</a></li>
                            </ul>

                        </li>


                    </ul>
                </div>
            </header>

            <nav id="nav">
                <ul class="links" id="myMenus"></ul>
            </nav>
        </div>



    );
}

export default Header;
