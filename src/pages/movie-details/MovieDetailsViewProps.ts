import { IMovieCastItem } from "../../types/movieCastItem";
import { IMovieDetails } from "../../types/movieDetails";

export interface IMovieDetailsViewProps {
  details: IMovieDetails | null;
  cast: IMovieCastItem[]| null;
  trailerKey: string | undefined;
}