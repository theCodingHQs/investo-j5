"use client";

import { useEffect } from "react";
import { useMap } from "react-leaflet";
import L from "leaflet";
import { SearchResult } from "./types";

export function BoundaryOverlay({
  searchResult,
}: {
  searchResult: SearchResult | null;
}) {
  const map = useMap();

  useEffect(() => {
    if (!searchResult?.geojson) return;

    const geo = searchResult.geojson;

    const boundary =
      geo.type === "Polygon"
        ? geo.coordinates[0]
        : geo.type === "MultiPolygon"
        ? geo.coordinates[0][0]
        : null;

    if (!boundary) return;

    const ring = boundary.map(([lng, lat]) => [lat, lng]) as [number, number][];

    const dim = L.polygon(
      [
        [
          [-90, -180],
          [90, -180],
          [90, 180],
          [-90, 180],
        ],
        ring,
      ],
      { fillOpacity: 0.4, color: "transparent" }
    ).addTo(map);

    return () => {
      map.removeLayer(dim);
    };
  }, [searchResult, map]);

  return null;
}
