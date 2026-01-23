export interface Moment {
  id?: number;
  title: string;
  description: string;
  image?: File | string;
  created_At?: string;
  updated_At?: string;
  comments?: [{ text: string; username: string }];
}
