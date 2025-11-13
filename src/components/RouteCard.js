import { useMemo } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  ExternalLink,
  MapPin,
  Mountain,
  Star,
  SunMedium,
  MoonStar,
  Route as RouteIcon,
} from "lucide-react";
import {
  PLACEHOLDER_GPX_FILES,
  ROUTE_PREVIEW_VIEWBOX,
  useRoutePreview,
} from "../hooks/useRoutePreview";

const VIEWBOX = ROUTE_PREVIEW_VIEWBOX;
const RATING_MAX = 4;

function buildRatingArray(rating = 0) {
  return Array.from({ length: RATING_MAX }, (_, index) => index < rating);
}

function formatDistance(distance) {
  if (!Number.isFinite(distance)) return "";
  if (distance >= 10) return `${distance.toFixed(1)} mi`;
  return `${distance.toFixed(2)} mi`;
}

function formatElevation(elevationGain) {
  if (!Number.isFinite(elevationGain)) return null;
  return `${Math.round(elevationGain)} ft gain`;
}

export default function RouteCard({ route }) {
  const isPlaceholderGpx =
    Boolean(route?.gpx) && PLACEHOLDER_GPX_FILES.has(route.gpx);
  const preview = useRoutePreview(
    isPlaceholderGpx ? null : route?.gpx,
    VIEWBOX
  );
  const prefersReducedMotion = useReducedMotion();

  const ratingStars = useMemo(
    () => buildRatingArray(route?.rating ?? 0),
    [route?.rating]
  );

  const distanceLabel = formatDistance(route?.distance);
  const elevationLabel = formatElevation(route?.elevationGain);
  const surfaceLabel = route?.surface ? `${route.surface} surface` : null;
  const hasCustomGpx = Boolean(route?.gpx) && !isPlaceholderGpx;
  const showPreview = hasCustomGpx && preview.status === "ready";

  return (
    <article className="route-card">
      <header className="route-card-header">
        <div className="route-card-heading">
          <span className="route-card-eyebrow">
            <RouteIcon className="icon" aria-hidden />
            Route
          </span>
          <h3 className="route-card-title">{route.name}</h3>
          <p className="route-card-meta">
            {distanceLabel}
            {route.surface ? ` • ${route.surface}` : ""}
          </p>
        </div>
        <div className="route-card-rating" aria-label={`Rating ${route.rating} out of ${RATING_MAX}`}>
          {ratingStars.map((isActive, index) => (
            <Star
              key={index}
              className={`rating-star ${isActive ? "active" : ""}`}
              aria-hidden
            />
          ))}
        </div>
      </header>

      <div className="route-card-preview" aria-hidden={!showPreview}>
        {showPreview ? (
          <motion.svg
            viewBox={`0 0 ${VIEWBOX.width} ${VIEWBOX.height}`}
            role="img"
            className="route-card-svg"
          >
            <rect
              x="0"
              y="0"
              width={VIEWBOX.width}
              height={VIEWBOX.height}
              rx="28"
              className="route-card-canvas"
            />
            <motion.path
              d={preview.path}
              fill="none"
              className="route-card-path"
              initial={prefersReducedMotion ? false : { pathLength: 0 }}
              animate={prefersReducedMotion ? false : { pathLength: 1 }}
              transition={{ duration: 2.4, ease: "easeInOut" }}
            />
            {preview.start ? (
              <motion.circle
                cx={preview.start.x}
                cy={preview.start.y}
                r="7"
                className="route-card-node start"
                initial={prefersReducedMotion ? false : { scale: 0 }}
                animate={prefersReducedMotion ? false : { scale: 1 }}
                transition={{ delay: 0.35, type: "spring", stiffness: 240, damping: 18 }}
              />
            ) : null}
            {preview.end ? (
              <motion.circle
                cx={preview.end.x}
                cy={preview.end.y}
                r="7"
                className="route-card-node end"
                initial={prefersReducedMotion ? false : { scale: 0 }}
                animate={prefersReducedMotion ? false : { scale: 1 }}
                transition={{ delay: 0.45, type: "spring", stiffness: 240, damping: 18 }}
              />
            ) : null}
          </motion.svg>
        ) : (
          <div className="route-card-placeholder" aria-hidden="true" />
        )}
      </div>

      <div className="route-card-body">
        <div className="route-card-badges">
          {surfaceLabel ? (
            <span className="route-pill">
              <MapPin className="icon" aria-hidden />
              {surfaceLabel}
            </span>
          ) : null}
          {elevationLabel ? (
            <span className="route-pill">
              <Mountain className="icon" aria-hidden />
              {elevationLabel}
            </span>
          ) : null}
          <span className="route-pill">
            {route.lit ? (
              <>
                <SunMedium className="icon" aria-hidden />
                Lit at night
              </>
            ) : (
              <>
                <MoonStar className="icon" aria-hidden />
                Daylight preferred
              </>
            )}
          </span>
        </div>

        {route.description ? (
          <p className="route-card-description">{route.description}</p>
        ) : null}
      </div>

      <footer className="route-card-footer">
        <a
          href={route.link}
          target="_blank"
          rel="noreferrer"
          className="route-card-action primary"
        >
          View Full Map
          <ExternalLink className="icon" aria-hidden />
        </a>
        {hasCustomGpx ? (
          <a
            href={`/routes/${route.gpx}`}
            download
            className="route-card-action secondary"
          >
            Download GPX
          </a>
        ) : null}
      </footer>
    </article>
  );
}
