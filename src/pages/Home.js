import React from 'react';
import '../CSS/Home.css';
import natsPic from '../Pictures/natsTeamPic.JPG';

function Home() {
    

    return (
        <div className="Home-container home-page">


            <div class="teamPic-container">
                <img src={natsPic} alt="" className="teamPic" />
            </div>

            <section id="main" className="race-table-container records">


                <div className="container">
                    <h1>About Us</h1>
                    <p>
                        Please sign up to join us Mon-Fri at the School of Public Health (SPH) East Side (closest to Xfinity Center) under the overhang starting January 30th. Practices now start at 5pm!

                        Our mission is to support and encourage a healthy approach to running and training for all members of the University of Maryland. We provide an atmosphere in which runners of all abilities can meet each other, share running knowledge and simply enjoy running together as well as compete against other club college teams.
                    </p>

                    <div class="divider"></div>


                </div>
            </section>
        </div>
    );
}



export default Home;
