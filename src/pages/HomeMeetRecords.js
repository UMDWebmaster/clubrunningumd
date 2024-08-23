import React from "react";
import "../CSS/Races.css";
import "../CSS/Routes.css";
import terpInvitePic from "../Pictures/terpInvite.png";
import { useState } from "react";

export default function Records() {
  // Importing the records data
  const RecordsList = require("../data/terp-invite-records.json");

  // State variables for sorting, search, and gender filter
  const [selectedSorting, setSelectedSorting] = useState("default");
  const [searchVal, setSearchVal] = useState("");
  const [genderVal, setGenderVal] = useState("all");

  // Sorting the records list based on selected criteria
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
    <>
      <div className="teamPic-container">
        {/* Displaying the team picture */}
        <img src={terpInvitePic} alt="" className="teamPic" />
      </div>
      <div>
        <div className="flex flex-col items-center justify-center">
          <h3 className="text-white text-3xl font-bold mt-5 mb-5">
            Terrapin Invitational Meet Records
          </h3>
          <h4>
            {/* Gender filter dropdown */}
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
            {/* Search input field */}
            <span className="line" style={{ paddingLeft: 5 + "px" }}>
              Search:{" "}
              <input
                type="text"
                class="w-auto px-2 py-0 m-0 bg-white"
                placeholder="Name, event, or team"
                onChange={(e) => setSearchVal(e.target.value)}
              ></input>{" "}
            </span>
            {/* Sorting dropdown */}
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
          <div className="overflow-x-auto max-w-full">
            {/* Table displaying the records */}
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
                {/* Mapping over filtered records to display in the table */}
                {RecordsList.filter(
                  (item) =>
                    (genderVal === "all" || genderVal === item.gender) &&
                    (searchVal === "" ||
                      item.athlete
                        .toLowerCase()
                        .includes(searchVal.toLowerCase()) ||
                      item.event
                        .toLowerCase()
                        .includes(searchVal.toLowerCase()) ||
                      item.team.toLowerCase().includes(searchVal.toLowerCase()))
                ).map((item) => (
                  <tr>
                    <td>
                      {/* Displaying event with gender */}
                      {item.gender === "M" ? "Men's" : "Women's"} {item.event}
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
    </>
  );
}
