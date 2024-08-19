import natsPic from "../Pictures/natsTeamPic.JPG";
import { races } from '../data/races';

export default function Races() {
  const rows = races.map((race) => (
    <tr>
      <td>{race.date}</td>
      <td>{race.name}</td>
      <td>{race.location}</td>
    </tr>
  ));

  return (
    <>
      <div class="teamPic-container">
        <img src={natsPic} alt="" className="teamPic" />
      </div>
      <>
        <div className="flex flex-col items-center justify-center">
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

          <h3 className="text-white text-3xl font-bold mt-5 mb-5">
            Fall 2024 Race Schedule
          </h3>

          <table className="mb-10">
            <thead>
              <tr>
                <th>Date</th>
                <th>Race</th>
                <th>Location</th>
              </tr>
            </thead>
            <tbody>
              {rows}
            </tbody>
          </table>
        </div>
      </>
    </>
  );
}