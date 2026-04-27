export interface InstagramPost {
  id: string;
  imageUrl: string;
  caption?: string;
  postUrl: string;
  publishedAt: string;
}

export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  location?: string;
  imageUrl?: string;
  registrationUrl?: string;
  instagramPostUrl?: string;
  isUpcoming: boolean;
}
