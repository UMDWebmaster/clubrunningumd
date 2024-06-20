import React from "react";
import "../CSS/Photos.css";
import "../CSS/table.css"
import JimmyRun from "../Pictures/JimmyRun.JPG";
import { photoArchive } from '../data/photoArchive';


// Define a functional component named Races
function Races() {
  const tableRows = [];
  for (let i = 0; i < photoArchive.length; i++) {
    const links = [];
    for (let j = 0; j < photoArchive[i].links.length; j++){
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
        TOP SECRET
    </>
      
  ); 
}

export default Races;
