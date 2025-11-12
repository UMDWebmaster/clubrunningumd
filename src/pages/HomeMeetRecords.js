import React, { useMemo, useState } from "react";
import "../CSS/Races.css";
import "../CSS/Routes.css";
import terpInvitePic from "../Pictures/terpInvite.png";

export default function HomeMeetRecords() {
  const RecordsList = require("../data/terp-invite-records.json");

  const [selectedSorting, setSelectedSorting] = useState("default");
  const [searchVal, setSearchVal] = useState("");
  const [genderVal, setGenderVal] = useState("all");

  const sortedRecords = useMemo(() => {
    const clone = [...RecordsList];
    clone.sort((a, b) => b.true_distance - a.true_distance);

    switch (selectedSorting) {
      case "time_slowest":
        return clone.sort((a, b) => a.seconds - b.seconds);
      case "time_fastest":
        return clone.sort((a, b) => b.seconds - a.seconds);
      case "shortest":
        return clone.sort((a, b) => a.true_distance - b.true_distance);
      case "longest":
        return clone.sort((a, b) => b.true_distance - a.true_distance);
      case "oldest":
        return clone.sort((a, b) => a.year - b.year);
      case "newest":
        return clone.sort((a, b) => b.year - a.year);
      default:
        return clone;
    }
  }, [RecordsList, selectedSorting]);

  const filteredRecords = sortedRecords.filter(
    (item) =>
      (genderVal === "all" || genderVal === item.gender) &&
      (searchVal === "" ||
        item.athlete.toLowerCase().includes(searchVal.toLowerCase()) ||
        item.event.toLowerCase().includes(searchVal.toLowerCase()) ||
        item.team.toLowerCase().includes(searchVal.toLowerCase()))
  );

  return (
    <div className="page-shell">
      <div className="page-hero">
        <img
          src={terpInvitePic}
          alt="Terrapin Invitational at Kehoe Track"
          className="page-hero-image contain"
        />
      </div>

      <div className="content-container">
        <header className="page-header">
          <span className="page-eyebrow">Terrapin Invitational</span>
          <h1 className="page-title">Meet Records</h1>
     
        </header>

        <section className="page-section">
          <div className="page-card">
            <div className="page-grid two">
              <label className="flex flex-col gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-neutral-500">
                Gender
                <select
                  value={genderVal}
                  onChange={(e) => setGenderVal(e.target.value)}
                  className="rounded-lg border border-[rgba(29,27,41,0.12)] bg-white px-3 py-2 text-base font-medium text-neutral-800 shadow-sm focus:border-[#d62828] focus:outline-none focus:ring-2 focus:ring-[#f6a622]/40"
                >
                  <option value="all">All</option>
                  <option value="M">Men</option>
                  <option value="F">Women</option>
                </select>
              </label>

              <label className="flex flex-col gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-neutral-500">
                Search
                <input
                  type="text"
                  placeholder="Name, event, or team"
                  value={searchVal}
                  onChange={(e) => setSearchVal(e.target.value)}
                  className="rounded-lg border border-[rgba(29,27,41,0.12)] bg-white px-3 py-2 text-base text-neutral-800 shadow-sm focus:border-[#d62828] focus:outline-none focus:ring-2 focus:ring-[#f6a622]/40"
                />
              </label>

              <label className="flex flex-col gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-neutral-500">
                Sort By
                <select
                  value={selectedSorting}
                  onChange={(e) => setSelectedSorting(e.target.value)}
                  className="rounded-lg border border-[rgba(29,27,41,0.12)] bg-white px-3 py-2 text-base font-medium text-neutral-800 shadow-sm focus:border-[#d62828] focus:outline-none focus:ring-2 focus:ring-[#f6a622]/40"
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
          </div>
        </section>

        <section className="page-section">
          <div className="table-wrapper">
            <table className="modern-table">
              <thead>
                <tr>
                  <th>Event</th>
                  <th>Performance</th>
                  <th>Athlete</th>
                  <th>Team</th>
                  <th>Year</th>
                </tr>
              </thead>
              <tbody>
                {filteredRecords.map((item) => (
                  <tr
                    key={`${item.event}-${item.athlete}-${item.team}-${item.year}`}
                  >
                    <td>
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
        </section>
      </div>
    </div>
  );
}
