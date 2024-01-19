import React from "react";
import "../CSS/Races.css";
import "../CSS/Routes.css";
import sohanPic from "../Pictures/sohanRUnnn.JPG";
import { AiFillStar } from "react-icons/ai";
import { useState } from "react";

function Routes() {
  const routesList = [
    {
      name: "Hamster Cage V2",
      distance: 4.45,
      link: "https://www.mapmyrun.com/routes/view/5868853243",
      popularity: 2,
    },
    {
      name: "Hills 4 Redacted",
      distance: 7.09,
      link: "https://www.mapmyrun.com/routes/view/5868922576",
      popularity: 2,
    },
    {
      name: "Lake Loop",
      distance: 4.61,
      link: "http://www.mapmyrun.com/routes/view/1391591584",
      popularity: 4,
    },
    {
      name: "Brigg's Beltway Bash",
      distance: 7.47,
      link: "https://www.mapmyrun.com/routes/view/1821774887",
      popularity: 1,
    },
    {
      name: "Historic Berwyn",
      distance: 4.76,
      link: "https://www.mapmyrun.com/routes/view/2289721822",
      popularity: 1,
    },
    {
      name: "Riverdale Loop",
      distance: 7.65,
      link: "https://www.mapmyrun.com/routes/view/1391609449",
      popularity: 1,
    },
    {
      name: "Cherry Chill Loop",
      distance: 4.88,
      link: "https://www.mapmyrun.com/routes/view/2289717640",
      popularity: 1,
    },
    {
      name: "Greenbelt Metro",
      distance: 7.85,
      link: "https://www.mapmyrun.com/routes/view/2289720103",
      popularity: 2,
    },
    {
      name: "Hamster Cage V1",
      distance: 4.92,
      link: "https://www.mapmyrun.com/routes/view/5868848695",
      popularity: 2,
    },
    {
      name: "Hyattschill",
      distance: 8.09,
      link: "https://www.mapmyrun.com/routes/view/1403696812",
      popularity: 1,
    },
    {
      name: "Cherry Chill",
      distance: 5.1,
      link: "http://www.mapmyrun.com/routes/view/1391575675",
      popularity: 4,
    },
    {
      name: "Mikey T's",
      distance: 8.5,
      link: "https://www.mapmyrun.com/routes/view/1821760106",
      popularity: 2,
    },
    {
      name: "Neighborhoods",
      distance: 5.36,
      link: "https://www.mapmyrun.com/routes/view/1403709331",
      popularity: 3,
    },
    {
      name: "Lost",
      distance: 8.53,
      link: "https://www.mapmyrun.com/routes/view/1875414515",
      popularity: 1,
    },
    {
      name: "Hammock Park",
      distance: 5.39,
      link: "https://www.mapmyrun.com/routes/view/1875419546",
      popularity: 1,
    },
    {
      name: "North Northwest",
      distance: 9.05,
      link: "https://www.mapmyrun.com/routes/view/1391628139",
      popularity: 2,
    },
    {
      name: "Communism",
      distance: 5.72,
      link: "https://www.mapmyrun.com/routes/view/1875411272",
      popularity: 1,
    },
    {
      name: "Greenbelt Lake",
      distance: 9.5,
      link: "https://www.mapmyrun.com/routes/view/2289731311",
      popularity: 1,
    },
    {
      name: "Shorter Metro",
      distance: 5.72,
      link: "https://www.mapmyrun.com/routes/view/5869893229/",
      popularity: 3,
    },
    {
      name: "Berwyn",
      distance: 9.84,
      link: "https://www.mapmyrun.com/routes/view/1391636146",
      popularity: 2,
    },
    {
      name: "Trolley Trail / Farmers Market",
      distance: 6.04,
      link: "https://www.mapmyrun.com/routes/view/5869010728",
      popularity: 2,
    },
    {
      name: "Cemetery",
      distance: 9.89,
      link: "https://www.mapmyrun.com/routes/view/2289727930",
      popularity: 1,
    },
    {
      name: "Metro",
      distance: 6.06,
      link: "https://www.mapmyrun.com/routes/view/1391623825",
      popularity: 3,
    },
    {
      name: "Sligo",
      distance: 11.1,
      link: "https://www.mapmyrun.com/routes/view/2289733390",
      popularity: 1,
    },
    {
      name: "Old Hills 4 Days",
      distance: 6.07,
      link: "https://www.mapmyrun.com/routes/view/2648473711",
      popularity: 2,
    },
    {
      name: "Cherry Kill",
      distance: 11.23,
      link: "https://www.mapmyrun.com/routes/view/1821782096",
      popularity: 1,
    },
    {
      name: "Hills 4 Days V2",
      distance: 6.07,
      link: "https://www.mapmyrun.com/routes/view/5868878107",
      popularity: 3,
    },
    {
      name: "South Northwest",
      distance: 11.45,
      link: "https://www.mapmyrun.com/routes/view/1403705587",
      popularity: 1,
    },
    {
      name: "Neighborhoods V2",
      distance: 6.35,
      link: "https://www.mapmyrun.com/routes/view/2289735244",
      popularity: 3,
    },
    {
      name: "CP Woods",
      distance: 6.39,
      link: "https://www.mapmyrun.com/routes/view/5868859933",
      popularity: 2,
    },
    {
      name: "Duck Pond",
      distance: 6.55,
      link: "https://www.mapmyrun.com/routes/view/1875416639",
      popularity: 1,
    },
    {
      name: "PG Plaza to Riverdale",
      distance: 6.86,
      link: "https://www.mapmyrun.com/routes/view/2648461723",
      popularity: 2,
    },
    {
      name: "PG Plaza",
      distance: 6.98,
      link: "https://www.mapmyrun.com/routes/view/1875418334",
      popularity: 2,
    },
  ];

  const [selectedSorting, setSelectedSorting] = useState("popularity");
  const [searchVal, setSearchVal] = useState("");

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
      routesList.sort((a, b) => b.popularity - a.popularity);
  }

  return (
    <div>
      <div class="teamPic-container">
        <img src={sohanPic} alt="" className="teamPic" />
      </div>
      <div>
        <div className="flex flex-col items-center justify-center">
          <h3 className="text-white text-3xl font-bold mt-5 mb-5">
            UMD Club Running Routes
          </h3>
          <h4>
            <span class="line">
              Search:{" "}
              <input
                type="text"
                placeholder="Name or distance"
                onChange={(e) => setSearchVal(e.target.value)}
              ></input>{" "}
            </span>
            <span class="line" style={{ paddingLeft: 5 + "px" }}>
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
          <table className="mb-10">
            <thead>
              <tr>
                <th>Route</th>
                <th>Distance</th>
                <th>Popularity</th>
              </tr>
            </thead>
            <tbody>
              {routesList
                .filter(
                  (item) =>
                    searchVal === "" ||
                    (!isNaN(parseInt(searchVal)) &&
                      (Math.round(item.distance) === parseInt(searchVal) ||
                        Math.floor(item.distance) === parseInt(searchVal))) ||
                    (isNaN(parseInt(searchVal)) &&
                      item.name.toLowerCase().includes(searchVal.toLowerCase()))
                )
                .map((item) => (
                  <tr>
                    <td>
                      {item.name} (
                      <a href={item.link} target="_blank">
                        link
                      </a>
                      )
                    </td>
                    <td>{item.distance} Miles</td>
                    <td>
                      {Array(item.popularity)
                        .fill()
                        .map((_, i) => {
                          return (
                            <AiFillStar
                              className="star"
                              color={"#e4e5e9"}
                              size={25}
                              display="inline-block"
                            />
                          );
                        })}{" "}
                      ({item.popularity})
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
          <h1>
            If a route is missing please use
            <strong>
              <a
                class="link"
                href="https://forms.gle/FvunMkBVNLjz65XL8"
                target="_blank"
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
    </div>
  );
}

export default Routes;
