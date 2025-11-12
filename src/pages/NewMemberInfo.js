import React from "react";
import "../CSS/Photos.css";
import "../CSS/table.css";
import "../CSS/Info.css";
import natsPic from "../Pictures/natsTeamPic.JPG";

const toc = [
  { id: "officers", label: "Who is in charge of the club?" },
  { id: "contact", label: "How do I contact the club?" },
  { id: "join", label: "How do I join? (Email list signup!)" },
  { id: "practices", label: "When and where are practices?" },
  {
    id: "sprinters",
    label: "Does the club take sprinters, hurdlers, jumpers, and throwers?",
  },
  { id: "training", label: "How does the club train?" },
  {
    id: "beginners",
    label: "What if I'm out of shape or not an experienced runner?",
  },
  { id: "competition", label: "How can I compete with the club?" },
  { id: "cost", label: "How much does the club cost?" },
];

export default function NewMemberInfo() {
  return (
    <div className="page-shell">
      <div className="page-hero">
        <img
          src={natsPic}
          alt="Maryland Club Running team gathered on the track"
          className="page-hero-image contain"
        />
      </div>

      <div className="content-container new-member-info">
        <header className="page-header">
          <span className="page-eyebrow">Start Here</span>
          <h1 className="page-title">Welcome to Maryland Club Running</h1>
          <p className="page-subtitle">
            We want you to run, meet people, and feel at home at Maryland. If
            you&apos;re just finding us, start here—we rounded up the answers we
            wish someone handed us on day one.
          </p>
        </header>

        <section className="page-section">
          <div className="page-card">
            <h2 className="text-2xl font-bold text-neutral-800">Table of Contents</h2>
            <ol className="mt-4 list-decimal space-y-2 pl-5 text-neutral-600">
              {toc.map((item) => (
                <li key={item.id}>
                  <a href={`#${item.id}`} className="text-[#d62828] hover:text-[#8b3dff]">
                    {item.label}
                  </a>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="officers" className="page-section">
          <div className="page-card">
            <h2 className="text-2xl font-bold text-neutral-800">
              Who is in charge of the club?
            </h2>
            <p className="mt-3">
              Every December we elect eight officers who keep practices on time,
              manage travel vans, handle budgets, and set up the social stuff.
              Meet the crew <a href="/about">here</a>.
            </p>
          </div>
        </section>

        <section id="contact" className="page-section">
          <div className="page-card">
            <h2 className="text-2xl font-bold text-neutral-800">
              How do I contact the club?
            </h2>
            <p className="mt-3">
              Shoot us an email at{" "}
              <a href="mailto:umdclubrunning@gmail.com">
                umdclubrunning@gmail.com
              </a>{" "}
              and we&apos;ll get back quickly. We also hang out on:
            </p>
            <ul className="mt-3 space-y-2 text-neutral-600">
              <li>
                <a href="https://umdclubrunning.com">Website</a>
              </li>
              <li>
                <a href="https://groupme.com/join_group/108665912/yF0Y8FZw">
                  GroupMe
                </a>
              </li>
              <li>
                <a href="https://www.strava.com/clubs/UMDCR">Strava</a>
              </li>
              <li>
                <a href="https://instagram.com/umdclubrunning">Instagram</a>
              </li>
            </ul>
          </div>
        </section>

        <section id="join" className="page-section">
          <div className="page-card space-y-4">
            <h2 className="text-2xl font-bold text-neutral-800">How do I join?</h2>
            <p>Before your first practice, knock out these quick steps:</p>
            <div className="page-callout text-sm font-semibold">
              Update as of 8/25/2025: the 2025–2026 IMLeagues roster is live.
              Please join it before you show up.
            </div>
            <ol className="list-decimal space-y-3 pl-5 text-neutral-600">
              <li>
                Join the email list{" "}
                <a href="https://forms.gle/Jk6LDeeY2D4FBq5q6">here</a>. If you
                miss a newsletter, the archive lives on the{" "}
                <a href="/Emails">Emails page</a>.
              </li>
              <li>
                Register on{" "}
                <a href="https://www.imleagues.com/spa/club/4395e0c781af4905a4088a9561509399/home">
                  IMLeagues
                </a>
                :
                <ol className="mt-2 list-decimal space-y-1 pl-5 text-neutral-500">
                  <li>Log in with your Directory ID.</li>
                  <li>Search for &quot;Maryland Club Running.&quot;</li>
                  <li>Click &quot;Join&quot; and finish the waivers.</li>
                </ol>
              </li>
              <li>
                Join the roster on{" "}
                <a href="https://terplink.umd.edu">TerpLink</a>:
                <ol className="mt-2 list-decimal space-y-1 pl-5 text-neutral-500">
                  <li>Log in with your Directory ID.</li>
                  <li>Search for &quot;Maryland Club Running.&quot;</li>
                  <li>Hit &quot;Join&quot; and fill out the short profile.</li>
                </ol>
              </li>
            </ol>
          </div>
        </section>

        <section id="practices" className="page-section">
          <div className="page-card">
            <h2 className="text-2xl font-bold text-neutral-800">
              When and where are practices?
            </h2>
            <p className="mt-3">
              <strong>First day back:</strong> September 2, 2025 for fall and
              January 27 for spring.
            </p>
            <p>
              <strong>Schedule:</strong> Monday through Friday at 5:00 PM (we
              bump to 4:00 PM after daylight savings).
            </p>
            <p>Meeting locations:</p>
            <ul className="mt-2 space-y-2 text-neutral-600">
              <li>
                <strong>Distance crew:</strong> School of Public Health overhang
              </li>
              <li>
                <strong>Sprinters / throwers:</strong> Kehoe Track
              </li>
            </ul>
          </div>
        </section>

        <section id="sprinters" className="page-section">
          <div className="page-card">
            <h2 className="text-2xl font-bold text-neutral-800">
              Does the club take sprinters, hurdlers, jumpers, and throwers?
            </h2>
            <p className="mt-3">
              Absolutely. If you sprint, hurdle, jump, or throw we have
              workouts lined up and 5–7 spring track meets that cover every
              event group.
            </p>
          </div>
        </section>

        <section id="training" className="page-section">
          <div className="page-card">
            <h2 className="text-2xl font-bold text-neutral-800">
              How does the club train?
            </h2>
            <p className="mt-3">
              Weekly plans land in the email newsletter and on the workouts
              page. Practices usually look like:
            </p>
            <ul className="mt-3 space-y-2 text-neutral-600">
              <li>
                <strong>Workouts:</strong> Structured sessions on the track or
                trails with pace groups and captains calling splits.
              </li>
              <li>
                <strong>Easy runs:</strong> Flexible distances and paces decided
                on the spot—no one runs alone.
              </li>
            </ul>
          </div>
        </section>

        <section id="beginners" className="page-section">
          <div className="page-card">
            <h2 className="text-2xl font-bold text-neutral-800">
              What if I'm out of shape or not an experienced runner?
            </h2>
            <p className="mt-3">
              Come anyway. We have people jogging their first mile next to
              former varsity kids chasing PRs. We set up pace groups so you can
              ease in.
            </p>
          </div>
        </section>

        <section id="competition" className="page-section">
          <div className="page-card">
            <h2 className="text-2xl font-bold text-neutral-800">
              How can I compete with the club?
            </h2>
            <p className="mt-3">
              Racing is optional but encouraged if you&apos;re curious. We line
              up for cross country, track, and road events. Most meets are day
              trips; a few bigger ones turn into van rides, hotel rooms, and
              great stories.
            </p>
          </div>
        </section>

        <section id="cost" className="page-section">
          <div className="page-card">
            <h2 className="text-2xl font-bold text-neutral-800">
              How much does the club cost?
            </h2>
            <p className="mt-3">
              Running with us is free if you&apos;re just here for practices and
              socials. If you want to race:
            </p>
            <ul className="mt-3 space-y-2 text-neutral-600">
              <li>$20 per semester or $30 per year</li>
              <li>$5 per meet (excluding Nationals)</li>
            </ul>
            <p className="mt-3">
              Budget tight? Let an officer know—we keep funds aside to help.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
