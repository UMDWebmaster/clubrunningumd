import React from 'react';
import '../CSS/Races.css';
import natsPic from '../Pictures/natsTeamPic.JPG';


function Races() {
    return (
        <div className="page-container races-page">


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


                    <h3 className="title">Maryland Club Running Spring 2023 Meet Schedule</h3>
                    <div id="post">
                        <table className="races">
                            <thead>
                                <tr>
                                    <th>Date</th>
                                    <th>Race</th>
                                    <th>Location</th>
                                    <th>Results</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>2/11/2023</td>
                                    <td>Happy Valley Invite</td>
                                    <td>State College, PA</td>
                                    <td>
                                        <a href="http://results.tfmeetpro.com/Nittany_Track_and_Field/Happy_Valley_Invitational_2023/index.html">
                                            Results
                                        </a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>2/25/2023</td>
                                    <td>Capital Relays - American University</td>
                                    <td>Washington, DC</td>
                                    <td>
                                        <a href="https://mcusercontent.com/aea7db195a60f69f817e5110d/files/b7bcdd4a-7818-2cde-d7d9-766c50c3c479/Capital_Relays_Results_2023_Men_s_Results.pdf">
                                            Men's Results
                                        </a>{' '}
                                        <a href="https://mcusercontent.com/aea7db195a60f69f817e5110d/files/30b2c466-6611-616a-7595-ccacae4434d5/Capital_Relays_Results_2023_Women_s_Results_2.pdf">
                                            Women's Results
                                        </a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>3/25/2023</td>
                                    <td>Dashing Dukes Invitational - JMU</td>
                                    <td>Harrisonburg, VA</td>
                                    <td>
                                        <a href="https://mcusercontent.com/aea7db195a60f69f817e5110d/files/c447ed04-8b94-cd3c-401e-8bef1a07058c/Dashing_Dukes_Results_2023.pdf">
                                            Results
                                        </a>{' '}
                                        
                                    </td>
                                </tr>
                                <tr>
                                    <td>3/31/2023-4/1/2023</td>
                                    <td>*Towson Invitational</td>
                                    <td>Towson, MD</td>
                                    <td>
                                        <a href="https://results.mdtimingllc.com/meets/22063">
                                            Results
                                        </a>{' '}

                                    </td>
                                </tr>
                                <tr>
                                    <td>4/15/2023-4/16/2023</td>
                                    <td>NIRCA Track and Field Nationals</td>
                                    <td>Olivet, MI</td>
                                    <td>
                                        <a href="http://live.crossroadstiming.com/meets/541522/events">
                                            Results
                                        </a>{' '}

                                    </td>
                                </tr>
                                <tr>
                                    <td>4/29/2023</td>
                                    <td>**Paul Kaiser Invite</td>
                                    <td>Shippensburg, PA</td>
                                    <td>
                                        <a href="http://results.tfmeetpro.com/MACFAT_LLC/2023_Paul_Kaiser_Track__Field_Classic/">
                                            Results
                                        </a>{' '}

                                    </td>
                                </tr>
                                <tr>
                                    <td>5/5/2023</td>
                                    <td>*Kehoe Twilight</td>
                                    <td>College Park, MD</td>
                                    <td>
                                        <a href="https://results.mdtimingllc.com/meets/24481">
                                            Results
                                        </a>{' '}

                                    </td>
                                </tr>
                                <tr>
                                    <td>5/7/2023</td>
                                    <td>Frederick Half Marathon</td>
                                    <td>Frederick, MD</td>
                                    <td>
                                        <a href="https://www.athlinks.com/event/28522/results/Event/1039789/Results">
                                            Results
                                        </a>{' '}

                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div class="divider"></div>


                  
                    <p>
                        <strong>Note: ** designates that the meet is a D1/D2/D3 meet.</strong>
                    </p>
                    <p>
                        <strong>
                            Note: Entry into Half-Marathon is restricted to club members who are very active and come
                            to practice often over the course of the semester.
                        </strong>
                    </p>
                </div>
            </section>
        </div>
    );
}

export default Races;
