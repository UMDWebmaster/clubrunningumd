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
                    <p>
                        Maryland Club Running is a member of the{' '}
                        <a href="clubrunning.org">National Intercollegiate Running Club Association</a> (NIRCA).
                        NIRCA hosts races throughout the Fall Cross Country, Winter Indoor, and Spring Outdoor
                        Track seasons. Our club participates in both NIRCA hosted meets and open college meets.
                        During the fall, we primarily compete in NIRCA or club meets, while in the spring, our
                        focus shifts to open college meets
                    </p>

                    <div class="divider"></div>


                </div>
            </section>
        </div>
    );
}

// Custom Previous and Next arrow components


export default Home;
