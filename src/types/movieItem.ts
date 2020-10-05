import { IRatingable } from './ratingable';

export interface IMovieItem extends IRatingable {
  id: number;
  original_title: string;
  poster_path: string;
}