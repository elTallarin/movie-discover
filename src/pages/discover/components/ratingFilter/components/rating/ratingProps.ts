import { Ratings } from "../../../../../../types/ratings.enum";

export interface IRatingProps {
  selectedRating: Ratings;
  rating: Ratings;
  setRating: Function;
}