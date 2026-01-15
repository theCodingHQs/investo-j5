"use client";

import { useEffect, useState } from "react";
import { Marker, Popup, useMap } from "react-leaflet";
import { currentLocationIcon } from "./icons";

export function CurrentLocation() {
  const map = useMap();
  const [pos, setPos] = useState<[number, number] | null>(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((p) => {
      const coords: [number, number] = [p.coords.latitude, p.coords.longitude];
      setPos(coords);
      map.setView(coords, 15);
    });
  }, [map]);

  if (!pos) return null;

  return (
    <Marker icon={currentLocationIcon} position={pos}>
      <Popup>You are here</Popup>
    </Marker>
  );
}
