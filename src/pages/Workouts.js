import React from 'react';
import '../CSS/Workouts.css';
import lillianCapital from '../Pictures/lillianCapital.JPG';


function About() {

    return (
        <div className="page-container workouts-page">


            <div class="teamPic-container">
                <img src={lillianCapital} alt="" className="teamPic" />
            </div>

            <section id="main" className="race-table-container records">


                <div className="container">
                  

                    <h3 className="title">Maryland Club Running Workout Schedules</h3>
                    <div id="post">
                        <table className="workoutPlans">
                            <thead>
                                <tr>
                                    <th>Year</th>
                                    <th>Cross Country</th>
                                    <th>Sprinters(Fall)</th>
                                    <th>Sprinters(Spring)</th>
                                    <th>Mid/Distance(Spring)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>2022 - 2023</td>
                                    <td><a href="https://docs.google.com/spreadsheets/d/1tyVDuNco1_uNeAxGm8S-TDOFfrDOMVXXgjIMUIh6iAo/edit#gid=1947588523">Link</a></td>
                                    <td><a href="https://docs.google.com/spreadsheets/d/16mOeLFBVXSx66-vEUVbKhB5KAtuuslhP-OtsvI4RMEk/edit?usp=sharing">Link</a></td>
                                    <td><a href="https://docs.google.com/spreadsheets/d/1ajHYG0mzKPQbyyQDYot0N-gNRgaPx1-ZuRdhFg3yTpY/edit#gid=1697315443">Link</a></td>
                                    <td><a href="https://docs.google.com/spreadsheets/d/1bC35kwcLnFu8syE_lrqzKxF596qPSbR4BRmCCT3zp0E/edit?usp=sharing">Link</a></td>
                                </tr>
                                <tr>
                                    <td>2021 - 2022</td>
                                    <td><a href="https://docs.google.com/spreadsheets/d/1yzkaEMiWbV9KZQSdDHmeeGWRnUuv-BxM-b6DbGRDi3A/edit#gid=0">Link</a></td>
                                    <td><a href="https://docs.google.com/spreadsheets/d/1k8cADbO-9Wqp0AFX4TesCarQ14RM84gD_fNwlOIZvz0/edit">Link</a></td>
                                    <td><a href="https://docs.google.com/spreadsheets/d/16mOeLFBVXSx66-vEUVbKhB5KAtuuslhP-OtsvI4RMEk/edit?usp=sharing">Link</a></td>
                                    <td><a href="https://docs.google.com/spreadsheets/d/1g4ia63Csk5lLxMgkHvKqg-OSjqCq01MQvxNBBDiFyiM/edit#gid=1947588523">Link</a></td>
                                </tr>
                                <tr>
                                    <td>2020 - 2021</td>
                                    <td>N/A</td>
                                    <td><a href="https://docs.google.com/spreadsheets/d/1FEYMyOlJ_UQWwaYP3FzKwXjuLecY3Oj5tG-bLQUbdEg/edit#gid=0">Link</a></td>
                                    <td>N/A</td>
                                    <td>N/A</td>
                                </tr>
                                <tr>
                                    <td>2019 - 2020</td>
                                    <td><a href="https://docs.google.com/spreadsheets/d/1ZdN3uR30UGutQcyFCuZwqKRKl-NrhONK/edit#gid=1834905903">Link</a></td>
                                    <td><a href="https://drive.google.com/drive/u/2/search?q=2019%20sprinter">Link</a></td>
                                    <td><a href="https://docs.google.com/spreadsheets/d/1g7_vnk74bftFb1FOS7RTNWMGu40a6V1FxH7MuPtA7ns/edit#gid=0">Link</a></td>
                                    <td><a href="https://drive.google.com/file/d/16aFC5O8md4IGRGSXrhfVWUoKPi5ngsZf/view">Link</a></td>
                                </tr>
                                <tr>
                                    <td>2018 - 2019</td>
                                    <td><a href="https://docs.google.com/spreadsheets/d/13cqmWzmzgmHy1GJqpbKrqha62Z2aaELFJm1TTSIKS9k/edit#gid=1228637930">Link</a></td>
                                    <td><a href="https://docs.google.com/spreadsheets/d/16lO-kUACaBNbr0D9IK8Ia0e_9lizxOb5fH_0j68JSPI/edit">Link</a></td>
                                    <td><a href="https://docs.google.com/spreadsheets/d/108xmRCeziTuD1bMvZyq7on58MdUrJ5G8tDOrUNyYHco/edit#gid=0">Link</a></td>
                                    <td><a href="https://docs.google.com/spreadsheets/d/1D-VRiRAXiX7DuSYaegl9Wl4Rw88VZk5f/edit#gid=553484958">Link</a></td>
                                </tr>
                                <tr>
                                    <td>2017 - 2018</td>
                                    <td><a href="https://docs.google.com/spreadsheets/d/1ktrnTyDu-PScnk4sPF8FqcyYnhJ0pJq1jmvrHBO1mOA/edit">Link</a></td>
                                    <td>N/A</td>
                                    <td><a href="https://docs.google.com/spreadsheets/u/2/d/1ax04jUMzZM_fo6AHllz8IagqZycBAGC7DbXURYO1Icc/edit?usp=drive_web&ouid=117665228541259445340">Link</a></td>
                                    <td><a href="https://docs.google.com/spreadsheets/d/1TDz6YpVvdZruY6EP0PFxOVgG-HHAXwVSsReRwxdc5OA/edit">Link</a></td>
                                </tr>
                                <tr>
                                    <td>2016 - 2017</td>
                                    <td><a href="https://docs.google.com/spreadsheets/d/1ecdG2KaLMhGPwUd8fnySiajLn-2GJvEj7QYy9pz8cjI/edit#gid=0">Link</a></td>
                                    <td><a href="https://docs.google.com/spreadsheets/d/1ecdG2KaLMhGPwUd8fnySiajLn-2GJvEj7QYy9pz8cjI/edit#gid=0">Link</a></td>
                                    <td><a href="https://docs.google.com/spreadsheets/d/1zZHMF232lNNs2ODzykU2sAVhA0FPLuuFl3BzZN2U2Ko/edit#gid=0">Link</a></td>
                                    <td><a href="https://docs.google.com/spreadsheets/d/1zZHMF232lNNs2ODzykU2sAVhA0FPLuuFl3BzZN2U2Ko/edit#gid=0">Link</a></td>
                                </tr>
                                
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default About;
