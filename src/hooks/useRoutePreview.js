import { useEffect, useState } from "react";

export const PLACEHOLDER_GPX_FILES = new Set([
  "berwyn.gpx",
  "brigg-s-beltway-bash.gpx",
  "cemetery.gpx",
  "cherry-chill-loop.gpx",
  "cherry-kill.gpx",
  "cll-something-lake-loop.gpx",
  "communism.gpx",
  "cp-woods.gpx",
  "drake-plaza.gpx",
  "duck-pond.gpx",
  "greenbelt-lake.gpx",
  "greenbelt-metro.gpx",
  "hammock-park.gpx",
  "hamster-cage-v1.gpx",
  "hamster-cage-v2.gpx",
  "hills-4-redacted.gpx",
  "historic-berwyn.gpx",
  "jeremy-spoke-in.gpx",
  "lost.gpx",
  "neighborhoods-v2.gpx",
  "neighborhoods.gpx",
  "north-northwest.gpx",
  "old-hills-4-days.gpx",
  "pbtx2.gpx",
  "pg-plaza-to-riverdale.gpx",
  "riverdale-loop.gpx",
  "sligo.gpx",
  "south-northwest.gpx",
  "trolley-trail-farmers-market.gpx",
]);

export const ROUTE_PREVIEW_VIEWBOX = {
  width: 560,
  height: 320,
  padding: 28,
};

export const ROUTE_PREVIEW_INITIAL_STATE = {
  status: "idle",
  path: "",
  start: null,
  end: null,
};

export function parseGPX(gpxText) {
  if (!gpxText || typeof window === "undefined" || !window.DOMParser) {
    return [];
  }

  try {
    const parser = new window.DOMParser();
    const doc = parser.parseFromString(gpxText, "application/xml");

    if (doc.querySelector("parsererror")) {
      return [];
    }

    const points = Array.from(doc.querySelectorAll("trkpt, rtept")).map(
      (node) => ({
        lat: Number.parseFloat(node.getAttribute("lat")),
        lon: Number.parseFloat(node.getAttribute("lon")),
      })
    );

    return points.filter(
      (point) => Number.isFinite(point.lat) && Number.isFinite(point.lon)
    );
  } catch (error) {
    console.warn("[routePreview] Failed to parse GPX", error);
    return [];
  }
}

export function projectPoints(points, viewBox = ROUTE_PREVIEW_VIEWBOX) {
  if (!points.length) {
    return { path: "", start: null, end: null };
  }

  const { width, height, padding } = viewBox;
  const usableWidth = width - padding * 2;
  const usableHeight = height - padding * 2;

  const lats = points.map((p) => p.lat);
  const lons = points.map((p) => p.lon);
  const minLat = Math.min(...lats);
  const maxLat = Math.max(...lats);
  const minLon = Math.min(...lons);
  const maxLon = Math.max(...lons);

  const lonSpan = Math.max(maxLon - minLon, 1e-6);
  const latSpan = Math.max(maxLat - minLat, 1e-6);

  const aspect = usableWidth / usableHeight;
  const dataAspect = lonSpan / latSpan;

  let drawWidth = usableWidth;
  let drawHeight = usableHeight;
  let offsetX = padding;
  let offsetY = padding;

  if (dataAspect > aspect) {
    drawHeight = usableWidth / dataAspect;
    offsetY = padding + (usableHeight - drawHeight) / 2;
  } else {
    drawWidth = usableHeight * dataAspect;
    offsetX = padding + (usableWidth - drawWidth) / 2;
  }

  const scaled = points.map(({ lat, lon }) => ({
    x: offsetX + ((lon - minLon) / lonSpan) * drawWidth,
    y: offsetY + ((maxLat - lat) / latSpan) * drawHeight,
  }));

  const path = scaled
    .map((point, index) =>
      `${index === 0 ? "M" : "L"}${point.x.toFixed(2)},${point.y.toFixed(2)}`
    )
    .join(" ");

  return {
    path,
    start: scaled[0],
    end: scaled[scaled.length - 1],
  };
}

export function useRoutePreview(gpxFile, viewBox = ROUTE_PREVIEW_VIEWBOX) {
  const [preview, setPreview] = useState(ROUTE_PREVIEW_INITIAL_STATE);

  useEffect(() => {
    let isMounted = true;

    async function loadPreview() {
      if (!gpxFile || PLACEHOLDER_GPX_FILES.has(gpxFile)) {
        setPreview(ROUTE_PREVIEW_INITIAL_STATE);
        return;
      }

      setPreview((prev) => ({ ...prev, status: "loading" }));

      try {
        const response = await fetch(`/routes/${gpxFile}`);
        if (!response.ok) {
          throw new Error(`Failed to fetch GPX ${gpxFile}`);
        }

        const text = await response.text();
        const points = parseGPX(text);
        const { path, start, end } = projectPoints(points, viewBox);

        if (isMounted) {
          setPreview({
            status: path ? "ready" : "empty",
            path,
            start,
            end,
          });
        }
      } catch (error) {
        console.error("[routePreview] GPX load error", error);
        if (isMounted) {
          setPreview({ ...ROUTE_PREVIEW_INITIAL_STATE, status: "error" });
        }
      }
    }

    loadPreview();

    return () => {
      isMounted = false;
    };
  }, [gpxFile, viewBox]);

  return preview;
}
