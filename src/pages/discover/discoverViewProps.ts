import { Dispatch, SetStateAction } from "react";
import { IUiMovieItem } from "../../types/uiMovieItem";
import { IMovieQuery } from "./Discover.container";

export interface IDiscoverViewProps {
  setMovieQuery: Dispatch<SetStateAction<IMovieQuery>>;
  movieList: IUiMovieItem[]
}