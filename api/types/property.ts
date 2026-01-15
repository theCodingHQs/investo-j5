import { Image } from "./project";

export interface Property {
  _id?: string;

  title?: string;
  meta_title?: string;
  meta_description?: string;

  featured_image?: Image;

  slug?: string;

  property_type?: string;
  residency_type?: string;

  bhk_type?: number;
}
