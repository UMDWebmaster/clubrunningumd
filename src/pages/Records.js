import React from "react";
import "../CSS/Races.css"; // Importing CSS files for styling
import "../CSS/Routes.css";
import fredHalfPic from "../Pictures/fredHalfTeam.JPG"; // Importing image
import { useState } from "react";

export default function Records() {
  // Importing records data
  const RecordsList = require("../data/records.json");

  // States for filters and sorting
  const [selectedSorting, setSelectedSorting] = useState("default");
  const [searchVal, setSearchVal] = useState("");
  const [seasonVal, setSeasonVal] = useState("all");
  const [genderVal, setGenderVal] = useState("all");

  // Extracting query parameters from URL
  // const queryString = window.location.search;
  // const urlParams = new URLSearchParams(queryString);

  // Applying filters based on query parameters if present
  // These are currently commented out, might need to be revisited if needed
  // if (urlParams.has("season")) {
  //   setSeasonVal(urlParams.get("season"));
  // }
  // if (urlParams.has("gender")) {
  //   setSeasonVal(urlParams.get("gender"));
  // }

  // Sorting RecordsList based on selectedSorting value
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
    <>
      {/* Displaying image */}
      <div className="teamPic-container">
        <img src={fredHalfPic} alt="" className="teamPic" />
      </div>
      <div>
        <div className="flex flex-col items-center justify-center">
          {/* Displaying heading */}
          <h3 className="text-white text-3xl font-bold mt-5 mb-5">
            UMD Club Running Records
          </h3>
          {/* Filter options */}
          <h4>
            <span className="line" style={{ paddingLeft: 5 + "px" }}>
              Season:{" "}
              <select
                value={seasonVal}
                onChange={(e) => {
                  setSeasonVal(e.target.value);
                }}
              >
                <option value="all">All</option>
                <option value="Indoor">Indoor</option>
                <option value="Outdoor">Outdoor</option>
                <option value="Cross Country">Cross Country</option>
                <option value="Special">Special Events</option>
              </select>
            </span>
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
                class="w-auto px-2 py-0 m-0 bg-white"
                placeholder="Name, event, or meet"
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
          {/* Displaying records table based on filters */}
          {seasonVal !== "all" && genderVal !== "all" ? (
            <div className="overflow-x-auto max-w-full">
              <table className="mb-10 table-auto">
                <thead>
                  <tr>
                    <th>Event</th>
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
                      <td>{item.event}</td>
                      <td>{item.time}</td>
                      <td>{item.athlete}</td>
                      <td>{item.date}</td>
                      <td>{item.meet}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            // Displaying message if filters not selected
            <h1 className="text-black text-2xl font-bold mt-5 mb-5">
              Please select a season and gender to view records.
            </h1>
          )}
        </div>
      </div>
    </>
  );
}