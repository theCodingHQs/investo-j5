import { Image } from "./project";

export interface User {
  _id?: string;
  slug?: string;
  display_name?: string;
  email?: string;
  phone?: number;
  password?: string;
  created_at?: Date;
  image?: Image;
  role?: {
    blog?: boolean;
    admin?: boolean;
    developer?: boolean;
    hr?: boolean;
    lead_management?: boolean;
    ads?: boolean;
  };
  status?: boolean;
}
