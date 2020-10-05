import { IMovieDetails } from "../../../../types/movieDetails";

export interface IMovieMainProps {
  details: IMovieDetails | null;
  trailerKey: string | undefined;
}