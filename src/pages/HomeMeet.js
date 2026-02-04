import React from "react";
import terpInvitePoster from "../Pictures/terpInvite.png";

const trackEvents = [
  "Alumni Mile (combined)",
  "Swedish Medley Relay",
  "5000m Run",
  "4x800 Relay",
  "100m Dash",
  "100m Hurdles / 110m Hurdles",
  "400m Dash",
  "1500m Run",
  "4x100m Relay",
  "800m Run",
  "200m Dash",
  "4x400m Relay",
];

const specialRelay = {
  title: "Some special/funky event",
  description:
    "TBA",
};

const fieldEvents = [
  "9:30 AM — High Jump",
  "10:00 AM — Shot Put (combined)",
  "11:15 AM — Women's Long Jump",
  "12:00 PM — Women's Discus & Men's Long Jump",
  "1:15 PM — Men's Discus & Women's Triple Jump",
  "2:00 PM — Men's Triple Jump",
];

const archivedResults = [
  {
    label: "2024 Results",
    href: "https://results.firstlanetiming.com/meets/35171",
  },
  {
    label: "2025 Results",
    href: "https://results.mdtimingllc.com/meets/47857"
  }
];

export default function HomeMeet() {
  return (
    <div className="page-shell">
      <div className="page-hero">
        <img
          src={terpInvitePoster}
          alt="Terrapin Invitational poster"
          className="page-hero-image contain"
        />
      </div>

      <div className="content-container">
        <header className="page-header">
          <span className="page-eyebrow">Home Meet</span>
          <h1 className="page-title">Terrapin Invitational</h1>
          <p className="page-subtitle">
            Saturday, April 18 (Tentative) • Kehoe Track &amp; Field Complex • College Park,
            MD. All event details and registration info for our fifth annual
            home invitational live here. See you on the track!
          </p>
        </header>

        <section className="page-section">
          <div className="page-card">
            <h2 className="text-2xl font-bold text-neutral-800">When &amp; Where</h2>
            <ul className="mt-4 space-y-2 text-neutral-600">
              <li>
                <a
                  href="https://maps.app.goo.gl/Yzw4hC2NY6ynLfP68"
                  target="_blank"
                  rel="noreferrer"
                >
                  Kehoe Track &amp; Field Complex, 7898 Championship Ln, College
                  Park, MD 20742
                </a>
              </li>
              <li>Saturday, April 18, 2026 (Tentative)</li>
            </ul>
          </div>
        </section>

        <section className="page-section">
          <div className="page-card">
            <div className="page-callout mb-4 text-sm font-semibold">
              🕓 Event details for 2026 are pending. (Below is last year's schedule)
            </div>
            <h2 className="text-2xl font-bold text-neutral-800">Order of Events</h2>
            <p className="mt-2 text-neutral-600">
              Women's heats will precede men's heats for each event.
            </p>

            <div className="mt-6 grid gap-6 md:grid-cols-2">
              <div>
                <h3 className="text-xl font-semibold text-neutral-800">
                  Track Events (10:00 AM Start)
                </h3>
                <ol className="mt-3 list-decimal space-y-2 pl-5 text-neutral-600">
                  {trackEvents.map((event) => (
                    <li key={event}>{event}</li>
                  ))}
                  <li className="space-y-2">
                    <span className="font-semibold text-neutral-800">
                      {specialRelay.title}
                    </span>
                    <p className="text-sm text-neutral-500">
                      {specialRelay.description}
                    </p>
                  </li>
                </ol>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-neutral-800">Field Events</h3>
                <ul className="mt-3 space-y-2 text-neutral-600">
                  {fieldEvents.map((event) => (
                    <li key={event}>{event}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="page-section">
          <div className="page-card">
            <div className="page-callout mb-4 text-sm font-semibold">
              🕓 Registration for 2026 Terrapin Invitational will open on <b>March 23, 2026</b> and close on <b>April 11, 2026 at 11:59 PM</b>.
            </div>
            <h2 className="text-2xl font-bold text-neutral-800">Registration</h2>
            <ul className="mt-4 space-y-3 text-neutral-600">
              <li>$25 per athlete or $500 per team</li>
              {/* <li>
                Register on{" "}
                <a
                  href="https://www.athletic.net/TrackAndField/meet/593578/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Athletic.net
                </a>
              </li> */}
            </ul>
          </div>
        </section>

        <section className="page-section page-grid two">
          <div className="page-card">
            <h2 className="text-2xl font-bold text-neutral-800">Awards</h2>
            <p className="mt-3 text-neutral-600">
              {/* Event winners earn a Terrapin Invite pint glass. Team trophies go
              to the top three clubs overall. */}
              TBA
            </p>
          </div>

          <div className="page-card">
            <h2 className="text-2xl font-bold text-neutral-800">Archived Results</h2>
            <p className="mt-3 text-neutral-600">
              Explore past results and{" "}
              <a href="/home-meet-records">meet records</a>.
            </p>
            <ul className="mt-4 space-y-2">
              {archivedResults.map((result) => (
                <li key={result.href}>
                  <a
                    href={result.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[#d62828] hover:text-[#8b3dff]"
                  >
                    {result.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}
