"use client";

import { useEffect } from "react";
import { useMap } from "react-leaflet";
import { SearchResult } from "./types";

export function MapUpdater({
  searchResult,
}: {
  searchResult: SearchResult | null;
}) {
  const map = useMap();

  useEffect(() => {
    if (!searchResult) return;

    map.setView(
      [parseFloat(searchResult.lat), parseFloat(searchResult.lon)],
      12,
      { animate: true }
    );
  }, [searchResult, map]);

  return null;
}
