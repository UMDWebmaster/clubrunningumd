import { officers } from "../data/officers";
import "../CSS/About.css";

export default function About() {
  return (
    <div className="page-shell">
      <div className="content-container about-page">
        <header className="page-header">

          <h1 className="page-title">Meet Our Officers</h1>
    
        </header>

        <section className="page-section">
          <div className="officers-grid">
            {officers.map((officer) => (
              <div key={officer.name} className="officer-tile">
                <div className="officer-image">
                  <img src={officer.image} alt={officer.name} />
                </div>
                <div className="officer-info">
                  <h3 className="officer-position">{officer.position}</h3>
                  <h4 className="officer-name">{officer.name}</h4>
                  <p className="officer-description">{officer.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
