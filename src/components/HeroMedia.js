import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { motion, useReducedMotion } from "framer-motion";
import {
  PLACEHOLDER_GPX_FILES,
  useRoutePreview,
} from "../hooks/useRoutePreview";

const HERO_VIEWBOX = {
  width: 720,
  height: 420,
  padding: 28,
};
const FALLBACK_IMAGE =
  "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";

function formatDistance(distance) {
  if (!Number.isFinite(distance)) return "";
  if (distance >= 10) return `${distance.toFixed(1)} mi`;
  return `${distance.toFixed(2)} mi`;
}

function formatElevation(elevationGain) {
  if (!Number.isFinite(elevationGain)) return null;
  return `${Math.round(elevationGain)} ft gain`;
}

function HeroRouteSlide({ route }) {
  const isPlaceholderGpx =
    Boolean(route?.gpx) && PLACEHOLDER_GPX_FILES.has(route.gpx);
  const preview = useRoutePreview(
    isPlaceholderGpx ? null : route?.gpx,
    HERO_VIEWBOX
  );
  const prefersReducedMotion = useReducedMotion();

  const distanceLabel = formatDistance(route?.distance);
  const elevationLabel = formatElevation(route?.elevationGain);
  const surfaceLabel = route?.surface ? `${route.surface} surface` : null;
  const lightingLabel = route?.lit ? "Lit at night" : "Daytime loop";

  const meta = [distanceLabel, surfaceLabel, elevationLabel, lightingLabel]
    .filter(Boolean)
    .join(" • ");

  const statusLabel = isPlaceholderGpx
    ? "Route preview coming soon"
    : {
        loading: "Loading route sketch…",
        empty: "Preview coming soon",
        error: "Preview unavailable",
      }[preview.status] ?? "Preview ready soon";
  const showPreview = !isPlaceholderGpx && preview.status === "ready";

  return (
    <div className="hero-route-slide media-16x9">
      <div className="hero-route-canvas" aria-hidden={!showPreview}>
        {showPreview ? (
          <motion.svg
            viewBox={`0 0 ${HERO_VIEWBOX.width} ${HERO_VIEWBOX.height}`}
            role="img"
            className="hero-route-svg"
          >
            <rect
              x="0"
              y="0"
              width={HERO_VIEWBOX.width}
              height={HERO_VIEWBOX.height}
              rx="32"
              className="hero-route-background"
            />
            <motion.path
              d={preview.path}
              fill="none"
              className="hero-route-path"
              initial={prefersReducedMotion ? false : { pathLength: 0 }}
              animate={prefersReducedMotion ? false : { pathLength: 1 }}
              transition={{ duration: 2.4, ease: "easeInOut" }}
            />
            {preview.start ? (
              <motion.circle
                cx={preview.start.x}
                cy={preview.start.y}
                r="8"
                className="hero-route-node start"
                initial={prefersReducedMotion ? false : { scale: 0 }}
                animate={prefersReducedMotion ? false : { scale: 1 }}
                transition={{ delay: 0.35, type: "spring", stiffness: 220, damping: 18 }}
              />
            ) : null}
            {preview.end ? (
              <motion.circle
                cx={preview.end.x}
                cy={preview.end.y}
                r="8"
                className="hero-route-node end"
                initial={prefersReducedMotion ? false : { scale: 0 }}
                animate={prefersReducedMotion ? false : { scale: 1 }}
                transition={{ delay: 0.45, type: "spring", stiffness: 220, damping: 18 }}
              />
            ) : null}
          </motion.svg>
        ) : (
          <div className="hero-route-placeholder">
            <span>{statusLabel ?? "Preview ready soon"}</span>
          </div>
        )}
      </div>
      <div className="hero-route-overlay">
        <span className="hero-route-eyebrow">Route Spotlight</span>
        <h3 className="hero-route-title">{route?.name}</h3>
        {meta ? <p className="hero-route-meta">{meta}</p> : null}
        <a className="cta hero-route-button" href="/routes">
          View All Routes
        </a>
      </div>
    </div>
  );
}

export default function HeroMedia({ slides = [] }) {
  const galleryItems = slides.map((slide, index) => {
    const type = slide.type ?? "image";
    const original = slide.original ?? FALLBACK_IMAGE;
    const thumbnail =
      slide.thumbnail ?? (typeof original === "string" ? original : FALLBACK_IMAGE);
    const originalAlt =
      slide.originalAlt ?? `${type.charAt(0).toUpperCase() + type.slice(1)} slide ${index + 1}`;

    return {
      ...slide,
      type,
      original,
      thumbnail,
      originalAlt,
      originalHeight: slide.originalHeight ?? HERO_VIEWBOX.height,
      originalWidth: slide.originalWidth ?? HERO_VIEWBOX.width,
    };
  });

  const renderCustomItem = (item) => {
    if (item.type === "video") {
      return (
        <div className="image-gallery-image">
          <div className="media-16x9">
            <iframe
              src={item.videoUrl}
              title="UMD Club Running highlight video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      );
    }

    if (item.type === "route") {
      return (
        <div className="image-gallery-image">
          <HeroRouteSlide route={item.route} />
        </div>
      );
    }

    return (
      <div className="image-gallery-image">
        <div className="media-16x9">
          <img src={item.original} alt={item.originalAlt} />
        </div>
      </div>
    );
  };

  return (
    <div className="hero-frame">
      <div className="hero-frame-inner hero-gallery">
        <ImageGallery
          items={galleryItems}
          renderItem={renderCustomItem}
          showFullscreenButton={false}
          showPlayButton={false}
          showNav={false}
          showBullets={false}
          showThumbnails={false}
          autoPlay={true}
          slideInterval={6500}
        />
      </div>
    </div>
  );
}
