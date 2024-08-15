import "../CSS/Races.css";
import "../CSS/Routes.css";
import sohanPic from "../Pictures/sohanRUnnn.JPG";
import { AiFillStar } from "react-icons/ai";
import { useState } from "react";

export default function Routes() {
  // Importing routes data from JSON file and setting up state variables
  const routesList = require("../data/routes.json");
  const [selectedSorting, setSelectedSorting] = useState("popularity");
  const [searchVal, setSearchVal] = useState("");

  // Sorting routes based on selected criteria
  routesList.sort((a, b) => a.distance - b.distance); // Sorting by distance initially

  switch (selectedSorting) {
    case "popularity":
      routesList.sort((a, b) => b.popularity - a.popularity);
      break;
    case "shortest":
      routesList.sort((a, b) => a.distance - b.distance);
      break;
    case "longest":
      routesList.sort((a, b) => b.distance - a.distance);
      break;
    default:
      routesList.sort((a, b) => b.popularity - a.popularity); // Default sorting by popularity
  }

  return (
    <>
      <div className="teamPic-container">
        <img src={sohanPic} alt="" className="teamPic" />{" "}
        {/* Displaying team picture */}
      </div>
      <div>
        <div className="flex flex-col items-center justify-center">
          <h3 className="text-white text-3xl font-bold mt-5 mb-5">
            UMD Club Running Routes {/* Heading */}
          </h3>
          {/* Search and sort options */}
          <h4>
            <span className="line">
              Search:{" "}
              <input
                type="text"
                placeholder="Name or distance"
                onChange={(e) => setSearchVal(e.target.value)}
              ></input>{" "}
            </span>
            <span className="line" style={{ paddingLeft: 5 + "px" }}>
              Sort By:{" "}
              <select
                value={selectedSorting}
                onChange={(e) => setSelectedSorting(e.target.value)}
              >
                <option value="popularity">Popularity</option>
                <option value="shortest">Distance (increasing)</option>
                <option value="longest">Distance (decreasing)</option>
              </select>
            </span>
          </h4>
          <br></br>
          {/* Displaying routes in a table */}
          <div className="overflow-x-auto max-w-full">
            <table className="mb-10 table-auto">
              <thead>
                <tr>
                  <th>Route</th>
                  <th>Distance</th>
                  <th>Popularity</th>
                </tr>
              </thead>
              <tbody>
                {/* Filtering and mapping routes */}
                {routesList
                  .filter(
                    (item) =>
                      searchVal === "" ||
                      (!isNaN(parseInt(searchVal)) &&
                        (Math.round(item.distance) === parseInt(searchVal) ||
                          Math.floor(item.distance) === parseInt(searchVal))) ||
                      (isNaN(parseInt(searchVal)) &&
                        item.name
                          .toLowerCase()
                          .includes(searchVal.toLowerCase()))
                  )
                  .map((item) => (
                    <tr>
                      <td>
                        {item.name} (
                        <a href={item.link} target="_blank" rel="noreferrer">
                          link
                        </a>
                        )
                      </td>
                      <td>{item.distance} Miles</td>
                      <td>
                        {/* Displaying popularity with star icons */}
                        {Array(item.popularity)
                          .fill()
                          .map((_, i) => {
                            return (
                              <AiFillStar
                                className="star"
                                color={"#e4e5e9"}
                                size={25}
                                display="inline-block"
                                key={"star" + i}
                              />
                            );
                          })}{" "}
                        ({item.popularity})
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
          {/* Submission form link */}
          <h1>
            If a route is missing please use
            <strong>
              <a
                className="link"
                href="https://forms.gle/FvunMkBVNLjz65XL8"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                this form{" "}
              </a>
            </strong>
            to submit it!
          </h1>
          <br></br>
        </div>
      </div>
    </>
  );
}