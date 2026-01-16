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

    map.setView([18.487223, 73.791085], 12, { animate: true });
  }, [searchResult, map]);

  return null;
}
