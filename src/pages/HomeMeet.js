import React from "react";
import terpInvitePoster from "../Pictures/terpInvite.png";

const trackEvents = [
  { time: "10:00am", event: "Alumni Mile (combined)" },
  { time: "10:15am", event: "Swedish Medley Relay" },
  { time: "10:35am", event: "5000m Run" },
  { time: "12:05pm", event: "4x800m Relay" },
  { time: "12:35pm", event: "100m Hurdles / 110m Hurdles" },
  { time: "1:10pm", event: "Officials Break", break: true },
  { time: "1:20pm", event: "100m Dash" },
  { time: "1:50pm", event: "400m Dash" },
  { time: "2:10pm", event: "1500m Run" },
  { time: "3:00pm", event: "400m Hurdles" },
  { time: "3:25pm", event: "1500m Racewalk (combined)" },
  { time: "3:45pm", event: "4x100m Relay" },
  { time: "4:00pm", event: "800m Run" },
  { time: "4:30pm", event: "200m Dash" },
  { time: "4:45pm", event: "4x400m Relay" },
  { time: "5:00pm", event: "Fun Relay (combined, not scored)" },
];

const hexathlonEvents = ["200m", "1500m", "High Jump", "Long Jump", "Shot Put", "100/110m Hurdles"];

const diceRelay = {
  title: "Dice Relay (Fun Relay)",
  description:
    "6 sided dice rolled before the race, and then again at the bell lap. Prior to the race, the roll determines how many 100m must be run by each athlete (example, 3 would mean 300m per leg for the first 3 legs). Then after the anchor completes their leg, the dice is rolled again. That roll determines how many more hundreds the anchor leg must run. For example, if the second roll is a 4, the anchor would run that same 300, then 400 more, for 700m total.",
};

const fieldEvents = [
  "9:30 AM — High Jump",
  "10:00 AM — Shot Put (combined)",
  "11:15 AM — Women's Long Jump",
  "12:00 PM — Women's Discus, Men's Long Jump",
  "1:15 PM — Men's Discus, Women's Triple Jump",
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
            Saturday, April 18 • Kehoe Track &amp; Field Complex • College Park,
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
              <li>Saturday, April 18, 2026</li>
            </ul>
          </div>
        </section>

        <section className="page-section">
          <div className="page-card">
            <div className="page-callout mb-4 text-sm font-semibold">
              ✅ Event details for 2026 are published.
            </div>
            <h2 className="text-2xl font-bold text-neutral-800">Order of Events</h2>
            <p className="mt-2 text-neutral-600">
              Women's heats will precede men's heats for each event. We will follow a rolling schedule so the meet could be running ahead or behind, please listen to announcements about the schedule.
            </p>

            <div className="mt-6 grid gap-6 md:grid-cols-2">
              <div>
                <h3 className="text-xl font-semibold text-neutral-800">
                  Track Events — beginning at 10 AM
                </h3>
                <ul className="mt-3 space-y-2 text-neutral-600">
                  {trackEvents.map((e) => (
                    <li key={e.event} className={e.break ? "italic text-neutral-400" : ""}>
                      <span className="font-semibold">{e.time}</span> — {e.event}
                    </li>
                  ))}
                </ul>
                <div className="mt-4 p-3 rounded" style={{ backgroundColor: "rgba(0,0,0,0.05)" }}>
                  <span className="font-semibold">{diceRelay.title}</span>
                  <p className="text-sm mt-1">{diceRelay.description}</p>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-neutral-800">
                  Field Events — beginning at 9:30 AM
                </h3>
                <ul className="mt-3 space-y-2 text-neutral-600">
                  {fieldEvents.map((event) => (
                    <li key={event}>{event}</li>
                  ))}
                </ul>

                <h3 className="text-xl font-semibold text-neutral-800 mt-6">
                  Hexathlon
                </h3>
                <p className="mt-2 text-neutral-600">
                  {hexathlonEvents.join(", ")}
                </p>
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
              <li>$30 per athlete or $500 per team</li>
              <li>
                Register on{" "}
                <a
                  href="https://www.athletic.net/TrackAndField/meet/635868/info"
                  target="_blank"
                  rel="noreferrer"
                >
                  Athletic.net
                </a>
              </li> 
            </ul>
          </div>
        </section>

        <section className="page-section page-grid two">
          <div className="page-card">
            <h2 className="text-2xl font-bold text-neutral-800">Awards</h2>
            <p className="mt-3 text-neutral-600">
              {/* Event winners earn a Terrapin Invite pint glass. Team trophies go
              to the top three clubs overall. */}
              Event winners will win an awesome Terrapin Invitational pint glass.  Team winners will receive a flag.
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
