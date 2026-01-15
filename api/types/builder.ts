import { Image } from "./project";

export interface Builder {
  _id?: string;
  slug?: string;
  name?: string;
  established?: number;
  meta_title?: string;
  meta_description?: string;
  image?: Image;
  about?: string;
  created_at?: Date;
}
