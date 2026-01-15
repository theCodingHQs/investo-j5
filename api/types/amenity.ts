import { Image } from "./project";

export interface Amenity {
  _id?: string;
  category?: string;
  amenity?: {
    name?: string;
    image?: Image;
  };
  creator?: string; // User ObjectId
}
