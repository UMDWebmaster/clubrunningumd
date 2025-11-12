import dab from "../Pictures/calPhoto.JPG";

export default function Calendar() {
  return (
    <div className="page-shell">
      <div className="page-hero">
        <img
          src={dab}
          alt="Maryland Club Running calendar team moment"
          className="page-hero-image contain"
        />
      </div>

      <div className="content-container">
        <header className="page-header">
          <span className="page-eyebrow">Schedule</span>
          <h1 className="page-title">Club Calendar</h1>
        </header>

        <section className="page-section">
          <div className="page-card">
            <iframe
              className="rounded-2xl w-full"
              title="UMD Club Running Google Calendar"
              src="https://calendar.google.com/calendar/embed?src=umdclubrunning%40gmail.com&ctz=America%2FNew_York"
              width="100%"
              height="680"
              frameBorder="0"
              scrolling="no"
              style={{ border: "none", minHeight: "520px" }}
            ></iframe>
          </div>
        </section>
      </div>
    </div>
  );
}
