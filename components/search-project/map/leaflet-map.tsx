"use client";

import { MapContainer, TileLayer, Marker, Popup, Polygon } from "react-leaflet";
import "leaflet/dist/leaflet.css";

import { Location, SearchResult } from "./types";
import { pinIcon } from "./icons";
import { MapUpdater } from "./map-updater";
import { BoundaryOverlay } from "./boundary-overlay";
import { CurrentLocation } from "./current-location";
import { ProjectLocation } from "@/api/types/project";

interface Props {
  pinnedLocations: (ProjectLocation | undefined)[];
  searchResult: SearchResult | null;
}

export default function LeafletMap({ pinnedLocations, searchResult }: Props) {
  // const point =
  //   searchResult?.geojson?.type === "Point"
  //     ? [
  //         searchResult.geojson.coordinates[1],
  //         searchResult.geojson.coordinates[0],
  //       ]
  //     : null;
  // pinnedLocations.map((loc) => console.log(loc));
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
      {/* <BoundaryOverlay searchResult={searchResult} /> */}

      {/* {point && (
        <Marker position={point}>
          <Popup>{searchResult?.display_name}</Popup>
        </Marker>
      )} */}

      {pinnedLocations.map(
        (loc) =>
          loc?.coordinates &&
          loc?.coordinates?.length == 2 && (
            <Marker
              position={[loc.coordinates[1], loc.coordinates[0]]}
              icon={pinIcon}
            >
              <Popup>
                {
                  <div
                    className="flex justify-center"
                    dangerouslySetInnerHTML={{
                      __html: loc.iframe || "",
                    }}
                  />
                }
              </Popup>
            </Marker>
          )
      )}

      <CurrentLocation />
    </MapContainer>
  );
}
