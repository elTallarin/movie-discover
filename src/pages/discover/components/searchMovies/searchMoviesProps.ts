import { Dispatch, SetStateAction } from "react";
import { IMovieQuery } from "../../Discover.container";

export interface ISearchMoviesProps {
  setQuery: Dispatch<SetStateAction<IMovieQuery>>;
}