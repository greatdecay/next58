// src/types/api.ts
export type Song = {
  trackID: number;
  trackTitle: string;
  byWho: string;
};

export type Venue = {
  external_venue_id: string;
  venue_name_display: string;
};

export type Performance = {
  internal_id: number;
  showDate: string;
  external_venue_id: string;

  // Add this:
  venue?: {
    venue_name_display: string;
    city_name: string;
    locality_name: string;
    country_name: string;
  };
};

export type Artist = {
  external_artist_id: string;
  artist_name: string;
};

export type Album = {
  id: number;
  title: string;
};