import React, { useState } from 'react';
import app from '../firebaseConfig';
import { getDatabase, ref, get } from 'firebase/database';
import "../CSS/Photos.css";
import "../CSS/table.css"
import JimmyRun from "../Pictures/JimmyRun.JPG";


function Photos() {
  let [photoArchive, setPhotoArchive] = useState([]);

  const fetchData = async () => {
    const db = getDatabase(app);
    const dbRef = ref(db, "archives/photos");
    const snapshot = await get(dbRef);
    if (snapshot.exists()) {
      setPhotoArchive(Object.values(snapshot.val()));
    }
  }
  fetchData();

  const tableRows = [];
  for (let i = 0; i < photoArchive.length; i++) {
    const links = [];
    for (let j = 0; j < photoArchive[i].links.length; j++) {
      links.push(<a href={photoArchive[i].links[j]}>Photos {j + 1}{" "}</a>)
    }
    tableRows.push(
      <tr>
        <td>{photoArchive[i].date}</td>
        <td>{photoArchive[i].raceName}</td>
        <td>
          {links}
        </td>
      </tr>
    );
  }

  return (
    <>
      <div class="teamPic-container">
        <img src={JimmyRun} alt="" className="fredHalfPic" />
      </div>

      {/* Container for the photo archive */}
      <div className="flex flex-col items-center justify-center">
        <h3 className="text-white text-3xl font-bold mt-5 mb-5">
          Photo Archive
        </h3>

        <div className="tableContainer">
          <table className="mb-10">
            <thead>
              <tr>
                <th>Date</th>
                <th>Race</th>
                <th>Album</th>
              </tr>
            </thead>
            <tbody>
              {tableRows}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Photos;
