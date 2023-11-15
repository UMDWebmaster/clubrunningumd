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
                <div className="flex flex-col items-center justify-center">
                    <p className="text-white w-3/4 mt-8 mb-8">
                        Maryland Club Running is a member of the{' '}
                        <a href="clubrunning.org">National Intercollegiate Running Club Association</a> (NIRCA).
                        NIRCA hosts races throughout the Fall Cross Country, Winter Indoor, and Spring Outdoor
                        Track seasons. Our club participates in both NIRCA hosted meets and open college meets.
                        During the fall, we primarily compete in NIRCA or club meets, while in the spring, our
                        focus shifts to open college meets
                    </p>

                    
                        <h3 className="text-white text-3xl font-bold mt-5 mb-5">Fall 2023 Race Schedule</h3> 
                        <table className="mb-10">
                            <thead>
                                <tr>
                                    <th>Date</th>
                                    <th>Race</th>
                                    <th>Location</th>                                    
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>9/9/2023</td>
                                    <td>Terrapin Time Trial</td>
                                    <td>Greenbelt, MD</td>                              
                                </tr>
                                <tr>
                                    <td>9/16/2023</td>
                                    <td>Cavalier Invite</td>
                                    <td>Charlottesville, VA</td>
                                </tr>
                                <tr>
                                    <td>9/30/2023</td>
                                    <td>Paul Short Run</td>
                                    <td>Lehigh, VA</td>                             
                                </tr>
                                <tr>
                                    <td>10/7/2023</td>
                                    <td>Dashing Dukes Invite</td>
                                    <td>Elkton, VA</td>                              
                                </tr>
                                <tr>
                                    <td>10/21/2023</td>
                                    <td>NIRCA Regionals</td>
                                    <td>Lehigh, PA</td>                             
                                </tr>
                                <tr>
                                    <td>11/11/2023</td>
                                    <td>NIRCA Nationals</td>
                                    <td>Shellbysville, IN</td>                                 
                                </tr>                           
                            </tbody>
                    </table>              
                </div>
                </div>
        </div>
    );
}

export default Races;
