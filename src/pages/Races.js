import React from 'react';
import '../CSS/Races.css';
import natsPic from '../Pictures/natsTeamPic.JPG';


function Races() {
    return (
        <div>


            <div class="teamPic-container">
                <img src={natsPic} alt="" className="teamPic" /> 
            </div>

            
               

                <div>
                    <p>
                        Maryland Club Running is a member of the{' '}
                        <a href="clubrunning.org">National Intercollegiate Running Club Association</a> (NIRCA).
                        NIRCA hosts races throughout the Fall Cross Country, Winter Indoor, and Spring Outdoor
                        Track seasons. Our club participates in both NIRCA hosted meets and open college meets.
                        During the fall, we primarily compete in NIRCA or club meets, while in the spring, our
                        focus shifts to open college meets
                    </p>

                    <div class="divider"></div>

                    <div className="flex flex-col items-center justify-center">
                        <h3 className="text-white text-3xl font-bold mt-5 mb-5">Fall 2023 Race Schedule</h3>
                    
                        <table>
                            <thead>
                                <tr>
                                    <th>Date</th>
                                    <th>Race</th>
                                    <th>Location</th>
                                    
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>2/11/2023</td>
                                    <td>Happy Valley Invite</td>
                                    <td>State College, PA</td>                              
                                </tr>
                                <tr>
                                    <td>2/25/2023</td>
                                    <td>Capital Relays - American University</td>
                                    <td>Washington, DC</td>
                                </tr>
                                <tr>
                                    <td>3/25/2023</td>
                                    <td>Dashing Dukes Invitational - JMU</td>
                                    <td>Harrisonburg, VA</td>
                                  
                                </tr>
                                <tr>
                                    <td>4/1/2023</td>
                                    <td>*Towson Invitational</td>
                                    <td>Towson, MD</td>
                                   
                                </tr>
                                <tr>
                                    <td>4/16/2023</td>
                                    <td>NIRCA Track and Field Nationals</td>
                                    <td>Olivet, MI</td>
                                   
                                </tr>
                                <tr>
                                    <td>4/29/2023</td>
                                    <td>**Paul Kaiser Invite</td>
                                    <td>Shippensburg, PA</td>
                                   
                                </tr>
                                <tr>
                                    <td>5/5/2023</td>
                                    <td>*Kehoe Twilight</td>
                                    <td>College Park, MD</td>
                                   
                                </tr>
                                <tr>
                                    <td>5/7/2023</td>
                                    <td>Frederick Half Marathon</td>
                                    <td>Frederick, MD</td>
                                    
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div class="divider"></div>                  
                 
                </div>
            
        </div>
    );
}

export default Races;
