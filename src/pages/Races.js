import React from "react";
import "../CSS/Races.css";
import natsPic from "../Pictures/natsTeamPic.JPG";

function Races() {
  return (
    <div>
      <div class="teamPic-container">
        <img src={natsPic} alt="" className="teamPic" />
      </div>
      <div>
        <div className="flex flex-col items-center justify-center">
          <p className="text-white w-3/4 mt-8 mb-8">
            Maryland Club Running is a member of the{" "}
            <a href="clubrunning.org">
              National Intercollegiate Running Club Association
            </a>{" "}
            (NIRCA). NIRCA hosts races throughout the Fall Cross Country, Winter
            Indoor, and Spring Outdoor Track seasons. Our club participates in
            both NIRCA hosted meets and open college meets. During the fall, we
            primarily compete in NIRCA or club meets, while in the spring, our
            focus shifts to open college meets
          </p>

          <h3 className="text-white text-3xl font-bold mt-5 mb-5">
            Spring 2024 Race Schedule
          </h3>
          <div className="tableContainer">
            <table className="mb-10">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Race</th>
                  <th>Location</th>
                  <th>Meet Type</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>2/10/2024</td>
                  <td>Happy Valley Invitational</td>
                  <td>State College, PA</td>
                  <td>NIRCA Indoor Meet</td>
                </tr>
                <tr>
                  <td>2/24/2024</td>
                  <td>Capital Relays</td>
                  <td>American University, DC</td>
                  <td>NIRCA</td>
                </tr>
                <tr>
                  <td>3/16/2024</td>
                  <td>Towson Spring Opener</td>
                  <td>Towson, MD</td>
                  <td>DI</td>
                </tr>
                <tr>
                  <td>3/30/2024</td>
                  <td>Cavalier Invitational</td>
                  <td>Charlottesville, VA</td>
                  <td>NIRCA</td>
                </tr>
                <tr>
                  <td>4/6 - 4/7/2024</td>
                  <td>NIRCA Track Nationals</td>
                  <td>Richmond, VA</td>
                  <td>NIRCA</td>
                </tr>
                <tr>
                  <td>4/6/2024</td>
                  <td>NIRCA Half Marathon Nationals</td>
                  <td>Petersburg, VA</td>
                  <td>Road</td>
                </tr>
                <tr>
                  <td>4/20/2024</td>
                  <td>Terrapin Invitational</td>
                  <td>College Park, MD</td>
                  <td>NIRCA</td>
                </tr>
                <tr>
                  <td>4/27/2024</td>
                  <td>Paul Kaiser</td>
                  <td>Shippensburg, PA</td>
                  <td>DII</td>
                </tr>
                <tr>
                  <td>5/3/2024</td>
                  <td>Kehoe Twilight Meet</td>
                  <td>College Park, MD</td>
                  <td>DI</td>
                </tr>
                <tr>
                  <td>5/5/2024</td>
                  <td>Fredrick Half Marathon</td>
                  <td>Fredrick, MD</td>
                  <td>Road</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Races;
