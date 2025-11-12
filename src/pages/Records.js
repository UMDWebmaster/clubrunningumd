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

  const filteredRecords = RecordsList.filter(
    (item) =>
      (searchVal === "" ||
        item.athlete.toLowerCase().includes(searchVal.toLowerCase()) ||
        item.event.toLowerCase().includes(searchVal.toLowerCase()) ||
        item.meet.toLowerCase().includes(searchVal.toLowerCase())) &&
      (seasonVal === "all" || seasonVal === item.season) &&
      (genderVal === "all" || genderVal === item.gender)
  );

  return (
    <div className="page-shell records-page">
      <div className="page-hero">
        <img
          src={fredHalfPic}
          alt="Relay celebrations at Fredrick Half"
          className="page-hero-image contain"
        />
      </div>

      <div className="content-container">
        <header className="page-header">
          <span className="page-eyebrow">All-Time Marks</span>
          <h1 className="page-title">UMD Club Running Records</h1>
          <p className="page-subtitle">
            From the cross country trails to the oval, these are the fastest
            times and furthest marks in club history. Use the filters to zero in
            on a specific season, gender, or event.
          </p>
        </header>

        <section className="page-section">
          <div className="page-card">
            <div className="page-grid two">
              <label className="flex flex-col gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-neutral-600">
                Season
                <select
                  value={seasonVal}
                  onChange={(e) => setSeasonVal(e.target.value)}
                  className="rounded-xl border-2 border-black bg-white px-3 py-2 text-base font-medium text-neutral-800 shadow-[4px_4px_0_rgba(17,20,24,0.12)] focus:border-[#d62828] focus:outline-none focus:ring-2 focus:ring-[#f6a622]/40"
                >
                  <option value="all">All Seasons</option>
                  <option value="Indoor">Indoor</option>
                  <option value="Outdoor">Outdoor</option>
                  <option value="Cross Country">Cross Country</option>
                  <option value="Special">Special Events</option>
                </select>
              </label>

              <label className="flex flex-col gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-neutral-600">
                Gender
                <select
                  value={genderVal}
                  onChange={(e) => setGenderVal(e.target.value)}
                  className="rounded-xl border-2 border-black bg-white px-3 py-2 text-base font-medium text-neutral-800 shadow-[4px_4px_0_rgba(17,20,24,0.12)] focus:border-[#d62828] focus:outline-none focus:ring-2 focus:ring-[#f6a622]/40"
                >
                  <option value="all">All Athletes</option>
                  <option value="M">Men</option>
                  <option value="F">Women</option>
                </select>
              </label>

              <label className="flex flex-col gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-neutral-200">
                Search
                <input
                  type="text"
                  placeholder="Name, event, or meet"
                  value={searchVal}
                  onChange={(e) => setSearchVal(e.target.value)}
                  className="records-input"
                />
              </label>

              <label className="flex flex-col gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-neutral-600">
                Sort By
                <select
                  value={selectedSorting}
                  onChange={(e) => setSelectedSorting(e.target.value)}
                  className="rounded-xl border-2 border-black bg-white px-3 py-2 text-base font-medium text-neutral-800 shadow-[4px_4px_0_rgba(17,20,24,0.12)] focus:border-[#d62828] focus:outline-none focus:ring-2 focus:ring-[#f6a622]/40"
                >
                  <option value="default">Featured</option>
                  <option value="time_slowest">Time (increasing)</option>
                  <option value="time_fastest">Time (decreasing)</option>
                  <option value="shortest">Distance (shortest)</option>
                  <option value="longest">Distance (longest)</option>
                  <option value="newest">Newest</option>
                  <option value="oldest">Oldest</option>
                </select>
              </label>
            </div>

            {seasonVal === "all" || genderVal === "all" ? (
              <p className="mt-6 text-sm text-neutral-500">
                Select both a season and gender to view the full records table.
              </p>
            ) : null}
          </div>
        </section>

        <section className="page-section">
          {seasonVal !== "all" && genderVal !== "all" ? (
            <div className="table-wrapper">
              <table className="modern-table">
                <thead>
                  <tr>
                    <th>Event</th>
                    <th>Performance</th>
                    <th>Athlete</th>
                    <th>Date</th>
                    <th>Meet</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredRecords.map((item) => (
                    <tr key={`${item.event}-${item.athlete}-${item.date}`}>
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
            <div className="page-card">
              <p>
                Set both the season and gender filters above to explore the club
                record board. Looking for historic context or corrections?
                Email{" "}
                <a href="mailto:umdclubrunning@gmail.com">
                  umdclubrunning@gmail.com
                </a>
                .
              </p>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
