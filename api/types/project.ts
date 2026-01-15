export interface Project {
  _id?: string;
  title?: string;
  slug?: string;
  description?: string;
  highlight?: string;

  publish?: boolean;
  created_at?: string;

  residency_type?: string;
  property_type?: string;

  address?: string;
  locality?: Locality;

  bhk?: number[];

  decision_drivers?: DecisionDrivers;
  location?: LocationInfo;

  amenities?: AmenityItem[];
  tags?: Tag[];
  gallery?: GalleryImage[];
  faq?: FAQ[];
  configuration?: Configuration[];

  banks?: any[];
  plots?: any[];

  creator_id?: string;
  builder?: string;

  meta_title?: string;
  meta_description?: string;

  minimum_price?: number;
  maximum_price?: number;
  price_per_sq_ft?: number | null;

  possession_date?: string;
  possession_status?: string;
  possession_value?: number;

  rating?: number;
  rear_id?: string;
  __v?: number;
}

export interface LocationInfo {
  coordinates: [number, number]; // [lng, lat]
  iframe: string;
}

export interface DecisionDrivers {
  connectivity: number;
  life_style: number;
  livability: number;
  value_for_money: number;
}

export interface Locality {
  _id: string;
  city: string;
  locality: string;
  slug: string;
  famous_places: any[];
}

export interface Tag {
  _id: string;
  tag: string;
  status: boolean;
}

export interface GalleryImage {
  _id: string;
  image_key: string;
  location: string;
}

export interface FAQ {
  _id: string;
  question: string;
  answer: string;
}

export interface Configuration {
  _id: string;
  bhk: number;
  floor_plan: FloorPlan[];
}

export interface FloorPlan {
  _id: string;
  built_area: number;
  carpet_area: number;
  price: number;
  location: string;
  image_key: string;
}

export interface AmenityItem {
  _id: string;
  category: AmenityCategory;
  amenity: Amenity;
}

export interface Amenity {
  name: string;
}

export type AmenityCategory =
  | "Furnishing"
  | "Sports"
  | "Convenience"
  | "Safety"
  | "Leisure"
  | "Environment";
