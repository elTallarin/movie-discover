import { IUiMovieItem } from "../types/uiMovieItem";
import { Ratings } from "../types/ratings.enum";
import { matchesRatingRange } from "./raiting.utility";

export function filterMoviesByRating(movies: IUiMovieItem[], rating: Ratings): IUiMovieItem[] {
  if (rating === Ratings.ZERO) {
    return movies;
  }
  return movies
    .filter(movie => matchesRatingRange(movie, rating));
}