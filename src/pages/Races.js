import React from "react";
import "../CSS/Races.css";
import natsPic from "../Pictures/natsTeamPic.JPG";

export default function Races() {
  return (
    <>
      {/* Container for displaying team picture */}
      <div class="teamPic-container">
        <img src={natsPic} alt="" className="teamPic" />
      </div>

      {/* Main content section */}
      <div>
        <div className="flex flex-col items-center justify-center">
          {/* Introduction paragraph about the club's participation in races */}
          <p className="text-white w-3/4 mt-8 mb-8">
            Maryland Club Running is a member of the{" "}
            <a
              href="clubrunning.org"
              style={{ textDecorationLine: "underline" }}
            >
              National Intercollegiate Running Club Association
            </a>{" "}
            (NIRCA). NIRCA hosts races throughout the Fall Cross Country, Winter
            Indoor, and Spring Outdoor Track seasons. Our club participates in
            both NIRCA hosted meets and open college meets. During the fall, we
            primarily compete in NIRCA or club meets, while in the spring, our
            focus shifts to open college meets.
          </p>

          {/* Heading for the spring 2024 race schedule */}
          <h3 className="text-white text-3xl font-bold mt-5 mb-5">
            Fall 2024 Race Schedule
          </h3>

          {/* Container for displaying the race schedule in a table */}
          <div className="tableContainer">
            <table className="mb-10">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Race</th>
                  <th>Location</th>
                </tr>
              </thead>
              <tbody>
                {/* Individual rows for each race with date, race name, location, and meet type */}
                <tr>
                  <td>9/7/2024</td>
                  <td>Terrapin Time Trial</td>
                  <td>Greenbelt, MD</td>
                  <td>Home</td>
                </tr>
                <tr>
                  <td>9/14/2024</td>
                  <td>DC Invite</td>
                  <td>Wheaton, MD</td>
                  <td>NIRCA</td>
                </tr>
                <tr>
                  <td>9/21/2024</td>
                  <td>Cavalier Invite</td>
                  <td>Earlysville, VA</td>
                  <td>NIRCA</td>
                </tr>
                <tr>
                  <td>10/5/2024</td>
                  <td>Paul Short Run</td>
                  <td>Bethlehem, PA</td>
                  <td>NCAA</td>
                </tr>
                <tr>
                  <td>10/19/2024</td>
                  <td>NIRCA Mid-Atlantic Regionals</td>
                  <td>Bethlehem, PA</td>
                  <td>NIRCA</td>
                </tr>
                <tr>
                  <td>11/9/2024</td>
                  <td>NIRCA Nationals</td>
                  <td>Hershey, PA</td>
                  <td>NIRCA</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}