import React from "react";

const BASE_LAYOUT = [
  "hero-mosaic-tile hero-mosaic-tile--tall",
  "hero-mosaic-tile hero-mosaic-tile--small",
  "hero-mosaic-tile hero-mosaic-tile--wide",
  "hero-mosaic-tile hero-mosaic-tile--small",
  "hero-mosaic-tile hero-mosaic-tile--tall hero-mosaic-tile--offset",
  "hero-mosaic-tile hero-mosaic-tile--small",
  "hero-mosaic-tile hero-mosaic-tile--wide",
  "hero-mosaic-tile hero-mosaic-tile--small",
  "hero-mosaic-tile hero-mosaic-tile--tall",
  "hero-mosaic-tile hero-mosaic-tile--small",
  "hero-mosaic-tile hero-mosaic-tile--wide hero-mosaic-tile--offset",
  "hero-mosaic-tile hero-mosaic-tile--small",
];

export default function HeroMosaic({
  images = [],
  className = "",
  loading = "lazy",
  tileCount,
  startIndex = 0,
  maxTiles = 48,
}) {
  if (!images.length) return null;

  const normalizedStart = ((startIndex % images.length) + images.length) % images.length;
  const availableImages = [
    ...images.slice(normalizedStart),
    ...images.slice(0, normalizedStart),
  ];

  const requestedCount = tileCount ?? images.length;
  const finalCount = Math.min(
    Math.max(1, requestedCount),
    images.length,
    maxTiles
  );

  const tiles = Array.from({ length: finalCount }, (_, index) => {
    const layoutClass = BASE_LAYOUT[index % BASE_LAYOUT.length];
    const source = availableImages[index] ?? availableImages[index % availableImages.length];

    return {
      className: `${layoutClass} hero-mosaic-tile-${index}`,
      src: source?.src ?? source,
      alt: source?.alt ?? "",
    };
  });

  const mosaicClassName = ["hero-mosaic", className]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={mosaicClassName} aria-hidden={false}>
      {tiles.map((tile, index) => (
        <div key={`${tile.src}-${index}`} className={tile.className}>
          <img src={tile.src} alt={tile.alt} loading={loading} />
        </div>
      ))}
    </div>
  );
}
