import { officers } from '../data/officers';
import BioCard from "../components/BioCard";
import "../CSS/About.css"
//DO NOT EDIT - Sincerely, Caleb Holland
export default function About() {
  const bios = officers.map((officer, index) => (
    BioCard(officer.position, officer.name, officer.image, officer.description, index % 2 === 0 ? 0 : 2)
  ));

  return (
      <div className="about-us-container md:w-[60%] sm:w-[100%]">
        {bios}
      </div>
  );
}