import { IRatingable } from "../types/ratingable";
import { Ratings } from "../types/ratings.enum";

const ratingRangeLenght = 2;

export function matchesRatingRange(item: IRatingable, rating: Ratings): boolean {
  const { vote_average } = item;
  const maxRating = rating * ratingRangeLenght;
  const minRating = maxRating - ratingRangeLenght

  return (vote_average >= minRating && vote_average < maxRating);
}