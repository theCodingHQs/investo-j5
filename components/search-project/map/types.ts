export interface Location {
  id: number;
  name: string;
  lat: number;
  lng: number;
  description: string;
}

export interface SearchResult {
  id: string;
  city: string;
  locality: string;
  label: string;
  name: string;
  title: string;
  slug: string;
}

// interface SearchResult {
//   display_name: string;
//   lat: string;
//   lon: string;
//   boundingbox: string[];
//   geojson?: {
//     type: string;
//     coordinates: number[] | number[][] | number[][][] | number[][][][];
//   };
// }
