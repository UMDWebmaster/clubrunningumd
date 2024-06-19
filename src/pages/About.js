import React from "react";
import "../CSS/About.css";
import { officers } from '../data/officers';
import BioCard from "../components/BioCard";

//DO NOT EDIT - Caleb Holland
function About() {
  const bios = [];
  for (let i = 0; i < officers.length; i++){
    bios.push(BioCard(officers[i].position, officers[i].name, officers[i].image, officers[i].description, (i % 2 === 0 ? 0 : 2)));
  }
  
  return (
    <div className="about-us-container">
      {bios}
    </div>
  );
}

export default About; 