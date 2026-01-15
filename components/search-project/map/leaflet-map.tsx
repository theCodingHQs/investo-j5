"use client";

import { MapContainer, TileLayer, Marker, Popup, Polygon } from "react-leaflet";
import "leaflet/dist/leaflet.css";

import { Location, SearchResult } from "./types";
import { pinIcon } from "./icons";
import { MapUpdater } from "./map-updater";
import { BoundaryOverlay } from "./boundary-overlay";
import { CurrentLocation } from "./current-location";

interface Props {
  pinnedLocations: Location[];
  searchResult: SearchResult | null;
}

export default function LeafletMap({ pinnedLocations, searchResult }: Props) {
  const point =
    searchResult?.geojson?.type === "Point"
      ? [
          searchResult.geojson.coordinates[1],
          searchResult.geojson.coordinates[0],
        ]
      : null;

  return (
    <MapContainer
      center={[18.487223, 73.791085]}
      zoom={14}
      style={{ height: "100%", width: "100%" }}
    >
      <TileLayer
        attribution="&copy; OpenStreetMap contributors"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <MapUpdater searchResult={searchResult} />
      <BoundaryOverlay searchResult={searchResult} />

      {point && (
        <Marker position={point}>
          <Popup>{searchResult?.display_name}</Popup>
        </Marker>
      )}

      {pinnedLocations.map((loc) => (
        <Marker key={loc.id} position={[loc.lat, loc.lng]} icon={pinIcon}>
          <Popup>{loc.name}</Popup>
        </Marker>
      ))}

      <CurrentLocation />
    </MapContainer>
  );
}
