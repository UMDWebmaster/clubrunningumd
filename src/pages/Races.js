import natsPic from "../Pictures/natsTeamPic.JPG";
import { races as defaultRaces } from "../data/races";
import { useState, useEffect } from "react";

export default function Races() {
  const [raceList, setRaceList] = useState(defaultRaces);
  const [scheduleTitle, setScheduleTitle] = useState("Fall 2025 Meet Schedule");

  // Load data from JSON file on mount
  useEffect(() => {
    fetchRacesData();
  }, []);

  const fetchRacesData = async () => {
    try {
      const response = await fetch('/races-data.json');
      const data = await response.json();
      setRaceList(data.races);
      setScheduleTitle(data.scheduleTitle);
    } catch (error) {
      console.error('Error fetching races data:', error);
      // Fallback to default data if JSON file fails
      setRaceList(defaultRaces);
    }
  };

  const rows = raceList.map((race) => (
    <tr key={`${race.date}-${race.name}`}>
      <td>{race.date}</td>
      <td>{race.name}</td>
      <td>{race.location}</td>
      <td>{race.type}</td>
    </tr>
  ));

  return (
    <div className="page-shell">
      <div className="page-hero">
        <img
          src={natsPic}
          alt="Maryland Club Running team celebrating at Nationals"
          className="page-hero-image contain"
        />
      </div>

      <div className="content-container">
        <header className="page-header">
          <span className="page-eyebrow">Compete</span>
          <h1 className="page-title">Race Calendar</h1>
          <p className="page-subtitle">
            Maryland Club Running races year-round across cross country, indoor,
            and outdoor track. Here&apos;s what&apos;s on deck — from NIRCA
            championships to local road miles.
          </p>
        </header>

        <section className="page-section">
          <div className="page-card">
            <p>
              The club is a proud member of the{" "}
              <a
                href="https://clubrunning.org"
                target="_blank"
                rel="noreferrer"
              >
                National Intercollegiate Running Club Association (NIRCA)
              </a>
              . We travel to NIRCA regional and national meets, open collegiate
              races, and local events throughout the Mid-Atlantic.
            </p>
          </div>
        </section>

        <section className="page-section">
          <h2 className="text-2xl font-bold text-neutral-800 mb-4">
            {scheduleTitle}
          </h2>
          <div className="table-wrapper">
            <table className="modern-table">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Race</th>
                  <th>Location</th>
                  <th>Type</th>
                </tr>
              </thead>
              <tbody>{rows}</tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
}
