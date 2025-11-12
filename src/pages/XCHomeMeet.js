import React from "react";

const heroImage =
  "https://cdn.wallpapersafari.com/17/20/zOCIhp.jpg";

const overviewCards = [
  {
    title: "Race Info",
    body: [
      "Location: Terrapin Nature Park, Stevensville, MD",
      "Terrain: Flat, sandy soft gravel with views of the Bay",
      "Spikes: Optional",
      "Awards: Top 3 per race + top men's and women's teams",
    ],
  },
  {
    title: "Schedule",
    body: [
      "10:00 AM — Men's 8k",
      "11:00 AM — Women's 6k",
      "Schedule subject to change",
    ],
  },
  {
    title: "Travel",
    body: [
      "Hotel: Holiday Inn Annapolis-Kent Narrows",
      'Directions: Google Maps (38.989874, -76.321294)',
    ],
    link: {
      label: "Open Google Maps",
      href: "https://maps.google.com/?q=38.989874,-76.321294",
    },
  },
  {
    title: "Registration",
    body: [
      "Opens: Sept 1, 2025",
      "Closes: Sept 22, 2025 @ 11:59 PM",
      "Fee: $25 per runner or $500 per team",
      "Checks payable to University of Maryland Club Running",
    ],
    link: {
      label: "Email umdclubrunning@gmail.com",
      href: "mailto:umdclubrunning@gmail.com",
    },
  },
  {
    title: "Eligibility & Nationals",
    body: [
      "This is a qualifying event for NIRCA Nationals.",
      "All competitors must be student members of a NIRCA club.",
      "Participation here satisfies one qualifying criterion for Nationals.",
    ],
    link: {
      label: "View NIRCA eligibility info",
      href: "https://clubrunning.org/races/eligibility.php",
    },
  },
  {
    title: "Extras",
    body: ["Meet T-shirt: Yes", "Social event: No"],
  },
  {
    title: "Cancellation Policy",
    body: [
      "Entries are final as of Sept 22.",
      "Payment is due at the meet. No refunds after that date.",
    ],
  },
];

export default function XCHomeMeet() {
  return (
    <div className="page-shell">
      <div className="page-hero">
        <img
          src={heroImage}
          alt="Old Bay Invitational course preview"
          className="page-hero-image contain"
        />
      </div>

      <div className="content-container">
        <header className="page-header">
          <span className="page-eyebrow">Cross Country</span>
          <h1 className="page-title">Old Bay Invitational</h1>
          <p className="page-subtitle">
            Saturday, September 27, 2025 · Terrapin Nature Park, Stevensville,
            MD. Hosted by Maryland Club Running.
          </p>
        </header>

        <section className="page-section page-grid two">
          {overviewCards.map((card) => (
            <div key={card.title} className="page-card">
              <h2 className="text-2xl font-bold text-neutral-800">{card.title}</h2>
              <ul className="mt-3 space-y-2 text-neutral-600">
                {card.body.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
              {card.link && (
                <a
                  href={card.link.href}
                  className="mt-4 inline-flex items-center gap-2 text-[#d62828] hover:text-[#8b3dff]"
                  target="_blank"
                  rel="noreferrer"
                >
                  {card.link.label}
                </a>
              )}
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}
