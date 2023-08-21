import React from 'react';
import '../CSS/Photos.css';
import fredHalfPic from '../Pictures/fredHalfTeam.JPG';


function Races() {
    return (
        <div>
            <div class="teamPic-container">
                <img src={fredHalfPic} alt="" className="fredHalfPic" />
            </div>

            <div className="flex flex-col items-center justify-center">  
                <h3 className="text-white text-3xl font-bold mt-5 mb-5">Photo Archive</h3>
                <table className="mb-10">
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Race</th>
                            <th>Album</th>
                         </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>2/11/2023</td>
                            <td>Happy Valley Invite</td>
                            <td>
                                <a href="https://photos.google.com/share/AF1QipND2Vr74SP0TrqTWHh84gDJRJLBhufGdj9oAdieto567plVaUNCFvO2fesjYHpKeQ?key=T1MyTWVFVF9LT3N3MkhZcTZKWk8xOXhjb2x5czln">
                                    Photos
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td>2/25/2023</td>
                            <td>Capital Relays - American University</td>
                            <td>
                                <a href="https://photos.google.com/share/AF1QipPwoP_0etxRH1tOypq4cp-Eb49kYv8uxFnFBYBnHfN57EzcYouozpu2d4mD4a6Aow?key=cXh6VXUzWWlLZWVqUWd4Xzlva1VKaVB4QVVfaE53">
                                    Photos
                                </a>
                            </td>
                        </tr>
                         <tr>
                            <td>3/25/2023</td>
                            <td>Dashing Dukes Invitational - JMU</td>
                            <td>
                                <a href="https://photos.google.com/share/AF1QipPHRZFVLZoRHT2kEHx-qrbmEOVSJqTUhuqhaZYajVAwdZXStoncKmKbYqdc6Bt51A?key=RWx2dS1aWXU4blR3R3RmSm0zd2Z3Q3ZlVnl0M0Z3">
                                    Photos
                                </a>
                            </td>
                         </tr>
                         <tr>
                            <td>4/16/2023</td>
                            <td>NIRCA Track and Field Nationals</td>
                            <td>
                                <a href="https://photos.google.com/share/AF1QipOmLALdb3mnGYm7VjAJoxB1x1cAUgjNTt_mJv7XDvH7vBITsK81vkzojXRFnkxGHQ?key=a2p4Ul95VjR1VzQ3TU9OSDExdGJHZjNYZlkzVDln">
                                    Photos
                                </a>
                                {' '}
                                <a href="https://photos.google.com/share/AF1QipMkB4Zcj4EDueGFr38bCL-yuT5q5HKOIYB8vH_Lg2-EmKvJU4S_zcbF61eBxZnKMQ?key=NERvYzhJdEJDTFFZaVNaT1IzdlRuT3dIcUtuaGp3">
                                    Photos
                                </a>
                            </td>
                         </tr>
                         <tr>
                             <td>4/29/2023</td>
                             <td>Paul Kaiser Invite</td>
                             <td>
                                 <a href="https://photos.google.com/share/AF1QipN_1rmZ-CYJrwZsji8-zMe7MkOjVjNsOfp5SnWRaOldTT9LN3PzhW-4j24GF7dHPQ?key=U0xveWZlenMzRXAwVkFaei1LQU0zbDNRY1B4UHV3">
                                    Photos
                                 </a>   
                             </td>
                         </tr>
                         <tr>
                            <td>5/5/2023</td>
                            <td>Kehoe Twilight</td>
                            <td>
                                <a href="https://photos.google.com/share/AF1QipM5tq_W3N6as_5Op58mI7BFCBCgLL30YU3ipPL-BhIlE8LBisogbzQfYOe9ZSM51Q?key=bTBXODZJVlg0RGRPRlRaUUw4aWxWUTFkc0J4NTNn">
                                    Photos
                                </a>
                            </td>
                         </tr>
                         <tr>
                            <td>5/7/2023</td>
                            <td>Frederick Half Marathon</td>
                            <td>
                                <a href="https://photos.google.com/invite/share/AF1QipMPEgpBT07QC9C7RQaf307qyHypri_98nLTJArvuJ6GO3zHHQvdLcBTgD3xjHOBTA?inviteKey=VjZVajZScFpPN1Q3R19LWWVPa1J5Q1A0YmhGbGdR">
                                    Photos
                                </a>
                             </td>
                         </tr>
                    </tbody>
                </table>
            </div>                
        </div>
    );
}

export default Races;
