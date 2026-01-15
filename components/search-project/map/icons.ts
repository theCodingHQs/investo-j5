"use client";

import L from "leaflet";

export const pinIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

export const currentLocationIcon = L.divIcon({
  html: `
    <div style="
      width:16px;
      height:16px;
      background:#2a93ff;
      border:3px solid white;
      border-radius:50%;
      box-shadow:0 0 8px rgba(0,136,255,.8);
    "></div>
  `,
  className: "",
  iconSize: [16, 16],
});
