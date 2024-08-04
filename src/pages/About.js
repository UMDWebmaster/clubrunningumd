import React from "react";
import "../CSS/About.css";
import { officers } from '../data/officers';
import BioCard from "../components/BioCard";

//DO NOT EDIT - Sincerely, Caleb Holland
function About() {
  const bios = [];
  for (let i = 0; i < officers.length; i++) {
    bios.push(BioCard(officers[i].position, officers[i].name, officers[i].image, officers[i].description, (i % 2 === 0 ? 0 : 2)));
  }

  return (
    <div className="page">
      <div className="about-us-container md:w-[60%] sm:w-[100%]">
        {bios}
      </div>
    </div>

  );
}

export default About; 