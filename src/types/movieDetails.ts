export interface Genre {
  id: number;
  name: string;
}

export interface IMovieDetails {
  genres: Genre[]; 
  id: number;
  original_title: string;
  overview: string | undefined;
  poster_path: string | undefined;
  poster_url?: string | undefined;
  release_date: string | undefined;
  vote_average: number | undefined;
  vote_count: number | undefined;
}