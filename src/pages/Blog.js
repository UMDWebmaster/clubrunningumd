import React from "react";
import "../CSS/Construc.css";
import construcPic from "../Pictures/trafficcone.png";

function Records() {
  window.location.replace("https://evanmasiello.com/clubrunning/");

  return (
    <div className="construc-container">
      <main>
        <h1>Under Construction</h1>
        <img
          src={construcPic}
          alt="Under Construction"
          className="construction-img"
        />
        <p color="blue">
          <strong>
            <a href="https://evanmasiello.com/clubrunning/">
              You can find the new blog:{" "}
              <span text-decoration="underline">here!</span>
            </a>
          </strong>
        </p>
      </main>
    </div>
  );
}

export default Records;
