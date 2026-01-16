import { Amenity } from "./amenity";
import { Builder } from "./builder";
import { User } from "./user";

export interface Project {
  _id?: string;
  slug?: string;
  residency_type?: string;
  title?: string;
  meta_title?: string;
  meta_description?: string;
  property_type?: string;
  videoLink?: string;
  highlight?: string;
  address?: string;

  possession_status?: string;
  possession_value?: number;
  possession_date?: Date;

  rating?: number;
  minimum_price?: number;
  maximum_price?: number;
  price_per_sq_ft?: number;
  avg_price?: number;
  emi_price?: number;

  featured_image?: Image;
  gallery?: Image[];

  bhk?: number[];
  size?: number;
  area?: number;

  builder?: string | Builder;
  amenities?: Array<string | Amenity>;

  faq?: FAQ[];
  configuration?: Configuration[];
  plots?: Plot[];

  decision_drivers?: DecisionDrivers;

  location?: ProjectLocation;
  landmark?: string;

  creator_id?: string | User;
  locality?: Locality;

  rear_id?: string;
  description?: string;

  publish?: boolean;
  created_at?: Date;

  tags?: Tag[];
  banks?: string[];
}

export interface Image {
  location?: string;
  image_key?: string;
}

export interface FAQ {
  question?: string;
  answer?: string;
}

export interface Tag {
  tag?: string;
  status?: boolean;
}

export interface Locality {
  _id?: string;
  city?: string;
  locality?: string;
  slug?: string;
  famous_places?: string[];
}

export interface FloorPlan {
  price?: number;
  built_area?: number;
  carpet_area?: number;
  image_key?: string;
  location?: string;
}

export interface Configuration {
  bhk?: number;
  floor_plan?: FloorPlan[];
}

export interface Plot {
  price?: number;
  built_area?: number;
  carpet_area?: number;
  image_key?: string;
  location?: string;
}

export interface DecisionDrivers {
  connectivity?: number;
  life_style?: number;
  livability?: number;
  value_for_money?: number;
}

export interface ProjectLocation {
  iframe?: string;
  coordinates?: [number, number];
}
