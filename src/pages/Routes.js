import "../CSS/Routes.css";
import sohanPic from "../Pictures/sohanRUnnn.JPG";
import { useMemo, useState } from "react";
import RouteCard from "../components/RouteCard";

const routesData = require("../data/routes.json");

const SORT_OPTIONS = [
  { value: "rating", label: "Top Rated" },
  { value: "distance-asc", label: "Distance ↑" },
  { value: "distance-desc", label: "Distance ↓" },
  { value: "name", label: "Alphabetical" },
];

function sortRoutes(routes, sort) {
  const list = [...routes];
  switch (sort) {
    case "distance-asc":
      return list.sort((a, b) => a.distance - b.distance);
    case "distance-desc":
      return list.sort((a, b) => b.distance - a.distance);
    case "name":
      return list.sort((a, b) => a.name.localeCompare(b.name));
    case "rating":
    default:
      return list.sort((a, b) => {
        if (b.rating === a.rating) {
          return a.distance - b.distance;
        }
        return b.rating - a.rating;
      });
  }
}

export default function Routes() {
  const [selectedSorting, setSelectedSorting] = useState("rating");
  const [searchVal, setSearchVal] = useState("");

  const filteredRoutes = useMemo(() => {
    if (!searchVal.trim()) {
      return routesData;
    }
    const typed = searchVal.trim().toLowerCase();
    const numeric = Number.parseFloat(typed);

    if (!Number.isNaN(numeric)) {
      return routesData.filter(
        (route) =>
          Math.round(route.distance) === Math.round(numeric) ||
          Math.floor(route.distance) === Math.floor(numeric)
      );
    }

    return routesData.filter((route) =>
      route.name.toLowerCase().includes(typed)
    );
  }, [searchVal]);

  const preparedRoutes = useMemo(
    () => sortRoutes(filteredRoutes, selectedSorting),
    [filteredRoutes, selectedSorting]
  );

  return (
    <div className="page-shell">
      <div className="page-hero">
        <img
          src={sohanPic}
          alt="Sohan leading a Maryland Club Running route"
          className="page-hero-image contain"
        />
      </div>

      <div className="content-container">
        <header className="page-header">
          <span className="page-eyebrow">Explore College Park</span>
          <h1 className="page-title">Favorite Routes</h1>
          <p className="page-subtitle">
            Tap a card to preview the route shape, see surface details, and open
            the map. Upload your GPX files and we&apos;ll add them to the
            library.
          </p>
        </header>

        <section className="page-section">
          <div className="routes-toolbar">
            <label className="routes-field">
              Search
              <input
                type="text"
                placeholder="Try 'Lake' or 6"
                value={searchVal}
                onChange={(e) => setSearchVal(e.target.value)}
                className="routes-input"
              />
            </label>

            <label className="routes-field">
              Sort By
              <select
                value={selectedSorting}
                onChange={(e) => setSelectedSorting(e.target.value)}
                className="routes-input"
              >
                {SORT_OPTIONS.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </label>
          </div>
        </section>

        <section className="page-section">
          <div className="routes-grid">
            {preparedRoutes.map((route) => (
              <RouteCard key={route.slug} route={route} />
            ))}
          </div>

          {preparedRoutes.length === 0 && (
            <div className="page-card mt-6">
              <p>
                No routes match that search yet. Try expanding your search or{" "}
                <a
                  className="link"
                  href="https://forms.gle/FvunMkBVNLjz65XL8"
                  target="_blank"
                  rel="noreferrer"
                >
                  submit a new loop
                </a>
                .
              </p>
            </div>
          )}
        </section>

        <section className="page-section">
          <div className="page-card">
            <p>
              Have a GPX file we&apos;re missing?{" "}
              <a
                className="link"
                href="https://forms.gle/FvunMkBVNLjz65XL8"
                target="_blank"
                rel="noreferrer"
              >
                Submit it here
              </a>{" "}
              and we&apos;ll drop it into the showcase.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
