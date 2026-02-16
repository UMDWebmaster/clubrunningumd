import React, { useMemo } from "react";
import DOMPurify from "dompurify";
import "../CSS/Home.css";
import HeroMosaic from "../components/HeroMosaic";
import GoogleCalendarEvents from "../components/GoogleCalendarEvents";
import natsPic from "../Pictures/2025-team.jpeg";
import stillTrain from "../Pictures/IMG_3948.JPG";
import sprinting from "../Pictures/sprintPic.JPG";
import runnertt25 from "../Pictures/runnertt25.JPG";
import womens_oldbay_huddle from "../Pictures/womens_oldbay_25.JPG";
import { MdOutlinePeopleOutline } from "react-icons/md";
import { IoTimeSharp } from "react-icons/io5";
import { MdEmojiEvents } from "react-icons/md";
import { MdOutlineMoving } from "react-icons/md";
import { Star } from "lucide-react";
import { PLACEHOLDER_GPX_FILES, useRoutePreview } from "../hooks/useRoutePreview";
import { defaultHomeContent } from "../cms/contentDefaults";
import { useContentDoc } from "../cms/useContent";
import natsxc2025pic from "../Pictures/xcnats2025.jpg";
import chuckcav25 from "../Pictures/chuckcav25.JPG";
import xccav25rh from "../Pictures/xccav25rh.JPG"
import regionalsxc25 from "../Pictures/regionalsxc25.jpeg";
import kehoe25 from "../Pictures/kehoe25.JPG";
import natsxc24 from "../Pictures/natsxc24.JPG";
import womenscav25xc from "../Pictures/womenscav25xc.JPG";
function formatDistance(distance) {
  if (!Number.isFinite(distance)) return "";
  if (distance >= 10) return `${distance.toFixed(1)} mi`;
  return `${distance.toFixed(2)} mi`;
}

function formatElevation(elevationGain) {
  if (!Number.isFinite(elevationGain)) return null;
  return `${Math.round(elevationGain)} ft gain`;
}

const TOP_ROUTE_VIEWBOX = {
  width: 320,
  height: 200,
  padding: 20,
};

function TopRouteCard({ route, rank }) {
  const distanceLabel = formatDistance(route?.distance);
  const surfaceLabel = route?.surface ? `${route.surface} surface` : null;
  const elevationLabel = formatElevation(route?.elevationGain);
  const detail = [distanceLabel, surfaceLabel, elevationLabel]
    .filter(Boolean)
    .join(" • ");

  const rating = route?.rating ?? 0;
  const starArray = Array.from({ length: 4 }, (_, i) => i < rating);

  const hasExternalLink = Boolean(route?.link);
  const mapHref = hasExternalLink ? route.link : "/routes";
  const linkLabel = hasExternalLink ? "Open Full Route ↗" : "View Route Details";

  const isPlaceholderGpx =
    Boolean(route?.gpx) && PLACEHOLDER_GPX_FILES.has(route.gpx);
  const hasDownload = Boolean(route?.gpx) && !isPlaceholderGpx;

  const preview = useRoutePreview(
    hasDownload ? route.gpx : null,
    TOP_ROUTE_VIEWBOX
  );
  const showPreview = hasDownload && preview.status === "ready";

  return (
    <li className="top-route-card">
      <div className="top-route-canvas-wrapper" aria-hidden={!showPreview}>
        {showPreview ? (
          <svg
            viewBox={`0 0 ${TOP_ROUTE_VIEWBOX.width} ${TOP_ROUTE_VIEWBOX.height}`}
            role="img"
            className="top-route-svg"
          >
            <rect
              x="0"
              y="0"
              width={TOP_ROUTE_VIEWBOX.width}
              height={TOP_ROUTE_VIEWBOX.height}
              rx="18"
              className="top-route-background"
            />
            <path d={preview.path} className="top-route-path" fill="none" />
            {preview.start ? (
              <circle
                cx={preview.start.x}
                cy={preview.start.y}
                r="6"
                className="top-route-node start"
              />
            ) : null}
            {preview.end ? (
              <circle
                cx={preview.end.x}
                cy={preview.end.y}
                r="6"
                className="top-route-node end"
              />
            ) : null}
          </svg>
        ) : (
          <div className="top-route-placeholder" aria-hidden="true" />
        )}
      </div>

      <div className="top-route-rank">#{rank}</div>
      <h3 className="top-route-name">{route.name}</h3>
      {detail ? <p className="top-route-meta">{detail}</p> : null}
      <div
        className="top-route-rating"
        aria-label={`Rating ${rating} out of 4`}
      >
        {starArray.map((isActive, starIndex) => (
          <Star
            key={starIndex}
            aria-hidden
            className={`top-route-star ${isActive ? "active" : ""}`}
          />
        ))}
      </div>

      <div className="top-route-actions">
        <a
          href={mapHref}
          target={hasExternalLink ? "_blank" : undefined}
          rel={hasExternalLink ? "noreferrer" : undefined}
          className="top-route-link"
        >
          {linkLabel}
        </a>
      </div>
    </li>
  );
}

export default function Home() {
  const { data: homeContent } = useContentDoc("home", defaultHomeContent);
  const home = homeContent || defaultHomeContent;
  const heroImages = [
    {
      src: womens_oldbay_huddle,
      alt: "",
    },
    {
      src: natsPic,
      alt: "",
    },
    {
      src: sprinting,
      alt: "",
    },
     {
      src: natsxc24,
      alt: "",
    },
  
   
    {
      src: runnertt25,
      alt: "",
    },
      {
      src: chuckcav25,
      alt: "",
    },
    {
      src: kehoe25,
      alt: "",
    },
    {
      src: natsxc2025pic,
      alt: "",
    },
    {
      src: regionalsxc25,
      alt: "",
    },
    {
      src: xccav25rh,
      alt: "City skyline run at dusk",
    },
    {
      src:womenscav25xc,
      alt: ""
    },
    {
      src:stillTrain,
      alt:""
    }

  ];

  // check if the date is april first
  const aprilFoolsDate = { month: 3, date: 1 };
  const now = new Date();
  const isItAprilFools =
    now.getMonth() === aprilFoolsDate.month &&
    now.getDate() === aprilFoolsDate.date;

  // import records
  const recordsList = require("../data/records.json");
  const isCrossCountrySeason = now.getMonth() + 1 >= 9;
  const displayRecords = recordsList.filter((record) =>
    isCrossCountrySeason
      ? record.season === "Cross Country"
      : ["Indoor", "Outdoor", "Track"].includes(record.season)
  );

  const routesData = require("../data/routes.json");

  const sortedRoutes = [...routesData].sort((a, b) => {
    const ratingA = a.rating ?? 0;
    const ratingB = b.rating ?? 0;
    if (ratingB === ratingA) {
      return (a.distance ?? 0) - (b.distance ?? 0);
    }
    return ratingB - ratingA;
  });

  const topRoutes = sortedRoutes.slice(0, 4);

  const sectionTitles = {
    ...defaultHomeContent.sectionTitles,
    ...(home.sectionTitles || {}),
  };

  const recordHeadline = isCrossCountrySeason
    ? sectionTitles.recordsFall
    : sectionTitles.recordsSpring;

  const heroMosaicTiles = Math.min(heroImages.length, 48);
  const heroSubtitle = useMemo(
    () => ({ __html: DOMPurify.sanitize(home.heroSubtitleHtml || "") }),
    [home.heroSubtitleHtml]
  );
  const ctas = Array.isArray(home.ctas) ? home.ctas : defaultHomeContent.ctas;
  const pills = Array.isArray(home.pills) ? home.pills : defaultHomeContent.pills;
  const iconMap = {
    people: MdOutlinePeopleOutline,
    events: MdEmojiEvents,
    time: IoTimeSharp,
    motion: MdOutlineMoving,
  };

  return (
    <div className="home-page page-shell">
        {isItAprilFools ? (
          <section className="home-rick">
            <div className="content-container">
            <iframe
                className="home-rick-iframe"
                height="400"
                style={{ width: "100%", margin: "auto" }}
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=Y-eYRSVjhBzI4piz&autoplay=1&mute=1"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          </section>
        ) : (
          <span></span>
        )}

        <section className="home-hero">
          <div className="hero-mosaic-backdrop" aria-hidden="true">
            <HeroMosaic
              images={heroImages}
              tileCount={heroMosaicTiles}
              maxTiles={60}
              loading="eager"
              className="hero-mosaic-background-grid"
            />
            <div className="hero-mosaic-overlay" />
          </div>
          <div className="content-container">
            <div className="home-hero-layout">
              <div className="home-hero-copy">
    
                <h1 className="hero-title">{home.heroTitle}</h1>
                <p className="hero-sub" dangerouslySetInnerHTML={heroSubtitle} />
                <div className="home-cta-row">
                  {ctas.map((cta, index) => (
                    <a
                      key={`${cta.label}-${index}`}
                      href={cta.href}
                      className={
                        cta.variant === "secondary" ? "cta cta-secondary" : "cta"
                      }
                    >
                      {cta.label}
                    </a>
                  ))}
                </div>
                <ul className="home-pill-list">
                  {pills.map((pill, index) => {
                    const Icon = iconMap[pill.icon];
                    return (
                      <li key={`${pill.label}-${index}`}>
                        {Icon ? <Icon /> : null} {pill.label}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="home-top-routes home-section">
          <div className="content-container">
            <header className="home-section-header">
              <h2 className="section-title">{sectionTitles.topRoutes}</h2>
              <a href="/routes" className="section-link">
                View All Routes →
              </a>
            </header>
            <ol className="top-routes-grid">
              {topRoutes.map((route, index) => (
                <TopRouteCard key={route.slug} route={route} rank={index + 1} />
              ))}
            </ol>
          </div>
        </section>

        <section className="home-events home-section">
          <div className="content-container">
            <header className="home-section-header">
              <h2 className="section-title">{sectionTitles.events}</h2>
              <a href="/calendar" className="section-link">
                View Full Calendar →
              </a>
            </header>
            <div className="calendar-container">
              <GoogleCalendarEvents
                calendarId="umdclubrunning@gmail.com"
                apiKey="AIzaSyDwCHjBYal-URvqtp-BzYKpZPpPmUZC9RE"
                maxResults={6}
              />
            </div>
          </div>
        </section>

        <section className="home-records home-section">
          <div className="content-container">
            <header className="home-section-header">
              <h2 className="section-title">{recordHeadline}</h2>
              
              <a href="/records" className="section-link">
                View All Records →
              </a>
              <p>(This is a preview of some of the records for the season)</p>
            </header>
            {displayRecords.length ? (
              <div className="table-wrapper">
                <table className="modern-table">
                  <thead>
                    <tr>
                      <th>Event</th>
                      <th>Athlete</th>
                      <th>Performance</th>
                      <th>Meet</th>
                      <th>Date</th>
                      <th>Season</th>
                    </tr>
                  </thead>
                  <tbody>
                    {displayRecords.slice(0, 10).map((entry) => (
                      <tr
                        key={`${entry.event}-${entry.athlete}-${entry.time}-${entry.date}-${entry.season}`}
                      >
                        <td>
                          {entry.gender === "M" ? "Men's" : "Women's"}{" "}
                          {entry.event}
                        </td>
                        <td>{entry.athlete}</td>
                        <td>{entry.time}</td>
                        <td>{entry.meet}</td>
                        <td>{entry.date}</td>
                        <td>{entry.season}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <p className="home-muted-note">
                We&apos;re still logging results from the latest meet—check back
                soon.
              </p>
            )}
          </div>
        </section>
    </div>
  );
}
