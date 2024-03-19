import React from "react";
import "../CSS/Races.css";
import "../CSS/Routes.css";
import terpInvitePic from "../Pictures/terpInvite.png";
import { useState } from "react";

function Records() {
  const RecordsList = require("../data/terp-invite-records.json");

  const [selectedSorting, setSelectedSorting] = useState("default");
  const [searchVal, setSearchVal] = useState("");
  const [genderVal, setGenderVal] = useState("all");

  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);

  // if (urlParams.has("season")) {
  //   setSeasonVal(urlParams.get("season"));
  // }

  // if (urlParams.has("gender")) {
  //   setSeasonVal(urlParams.get("gender"));
  // }

  RecordsList.sort((a, b) => b.true_distance - a.true_distance);

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
      RecordsList.sort((a, b) => a.year - b.year);
      break;
    case "newest":
      RecordsList.sort((a, b) => b.year - a.year);
      break;
    default:
      RecordsList.sort((a, b) => b.true_distance - a.true_distance);
  }

  return (
    <div>
      <div className="teamPic-container">
        <img src={terpInvitePic} alt="" className="teamPic" />
      </div>
      <div>
        <div className="flex flex-col items-center justify-center">
          <h3 className="text-white text-3xl font-bold mt-5 mb-5">
            Terrapin Invitational Meet Records
          </h3>
          <h4>
            <span className="line" style={{ paddingLeft: 5 + "px" }}>
              Gender:{" "}
              <select
                value={genderVal}
                onChange={(e) => {
                  setGenderVal(e.target.value);
                }}
              >
                <option value="all">All</option>
                <option value="M">M</option>
                <option value="F">F</option>
              </select>
            </span>
            <span className="line" style={{ paddingLeft: 5 + "px" }}>
              Search:{" "}
              <input
                type="text"
                placeholder="Name or event"
                onChange={(e) => setSearchVal(e.target.value)}
              ></input>{" "}
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
                  <th>Event</th>
                  <th>Time/Mark</th>
                  <th>Athlete</th>
                  <th>Team</th>
                  <th>Year</th>
                </tr>
              </thead>
              <tbody>
                {RecordsList.filter(
                  (item) =>
                    searchVal === "" ||
                    item.athlete
                      .toLowerCase()
                      .includes(searchVal.toLowerCase()) ||
                    (item.event
                      .toLowerCase()
                      .includes(searchVal.toLowerCase()) &&
                      (genderVal === "all" || genderVal === item.gender))
                ).map((item) => (
                  <tr>
                    <td>
                      {item.gender == "M" ? "Men's" : "Women's"} {item.event}
                    </td>
                    <td>{item.time}</td>
                    <td>{item.athlete}</td>
                    <td>{item.team}</td>
                    <td>{item.year}</td>
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
