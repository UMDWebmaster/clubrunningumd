import React from "react";
import "../CSS/Races.css";
import "../CSS/Routes.css";
import fredHalfPic from "../Pictures/fredHalfTeam.JPG";
import { useState } from "react";

function Records() {
  const RecordsList = require("../data/records.json");

  const [selectedSorting, setSelectedSorting] = useState("default");
  const [searchVal, setSearchVal] = useState("");
  const [seasonVal, setSeasonVal] = useState("all");
  const [genderVal, setGenderVal] = useState("all");

  RecordsList.sort((a, b) => a.season - b.season);

  switch (selectedSorting) {
    case "time_slowest":
      RecordsList.sort((a, b) => a.seconds - b.seconds);
      break;
    case "time_fastest":
      RecordsList.sort((a, b) => b.seconds - a.seconds);
      break;
    case "shortest":
      RecordsList.sort((a, b) => a.true_distance - b.true_distance);
      break;
    case "longest":
      RecordsList.sort((a, b) => b.true_distance - a.true_distance);
      break;
    case "oldest":
      RecordsList.sort(
        (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
      );
      break;
    case "newest":
      RecordsList.sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
      );
      break;
    default:
      RecordsList.sort((a, b) => b.true_distance - a.true_distance);
      RecordsList.sort((a, b) => a.season.localeCompare(b.season));
  }

  return (
    <div>
      <div className="teamPic-container">
        <img src={fredHalfPic} alt="" className="teamPic" />
      </div>
      <div>
        <div className="flex flex-col items-center justify-center">
          <h3 className="text-white text-3xl font-bold mt-5 mb-5">
            UMD Club Running Records
          </h3>
          <h4>
            <span className="line">
              Search:{" "}
              <input
                type="text"
                placeholder="Name, event, or meet"
                onChange={(e) => setSearchVal(e.target.value)}
              ></input>{" "}
            </span>
            <span className="line" style={{ paddingLeft: 5 + "px" }}>
              Season:{" "}
              <select
                value={seasonVal}
                onChange={(e) => setSeasonVal(e.target.value)}
              >
                <option value="all">All</option>
                <option value="Indoor">Indoor</option>
                <option value="Outdoor">Outdoor</option>
                <option value="Cross Country">Cross Country</option>
              </select>
            </span>
            <span className="line" style={{ paddingLeft: 5 + "px" }}>
              Gender:{" "}
              <select
                value={genderVal}
                onChange={(e) => setGenderVal(e.target.value)}
              >
                <option value="all">All</option>
                <option value="M">M</option>
                <option value="F">F</option>
              </select>
            </span>
            <span className="line" style={{ paddingLeft: 5 + "px" }}>
              Sort By:{" "}
              <select
                value={selectedSorting}
                onChange={(e) => setSelectedSorting(e.target.value)}
              >
                <option value="default">Default</option>
                <option value="time_slowest">Time (increasing)</option>
                <option value="time_fastest">Time (decreasing)</option>
                <option value="shortest">Distance (increasing)</option>
                <option value="longest">Distance (decreasing)</option>
                <option value="newest">Newest</option>
                <option value="oldest">Oldest</option>
              </select>
            </span>
          </h4>
          <br></br>
          <div className="tableContainer">
            <table className="mb-10 table-auto">
              <thead>
                <tr>
                  <th>Season</th>
                  <th>Event</th>
                  <th>Gender</th>
                  <th>Time/Mark</th>
                  <th>Athlete</th>
                  <th>Date</th>
                  <th>Meet</th>
                </tr>
              </thead>
              <tbody>
                {RecordsList.filter(
                  (item) =>
                    (searchVal === "" ||
                      item.athlete
                        .toLowerCase()
                        .includes(searchVal.toLowerCase()) ||
                      item.event
                        .toLowerCase()
                        .includes(searchVal.toLowerCase()) ||
                      item.meet
                        .toLowerCase()
                        .includes(searchVal.toLowerCase())) &&
                    (seasonVal === "all" || seasonVal === item.season) &&
                    (genderVal === "all" || genderVal === item.gender)
                ).map((item) => (
                  <tr>
                    <td>{item.season}</td>
                    <td>{item.event}</td>
                    <td>{item.gender}</td>
                    <td>{item.time}</td>
                    <td>{item.athlete}</td>
                    <td>{item.date}</td>
                    <td>{item.meet}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Records;
