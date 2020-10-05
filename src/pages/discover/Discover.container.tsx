import React, { useState, useEffect, useContext } from 'react';

import ApiConfigurationContext from '../../state/api-config.context';
import { discoverMovies, searchMovies } from '../../services/api.service';
import { IUiMovieItem } from '../../types/uiMovieItem';
import { IMovieItem } from '../../types/movieItem';
import { getImageUrl } from '../../utilities/api.utility';
import RatingConext from '../../state/rating.context';
import { Ratings } from '../../types/ratings.enum';
import { filterMoviesByRating } from '../../utilities/movies.utility';
import DiscoverView from './Discover.view';


export interface IMovieQuery {
  query: string;
}

export default function DiscoverContainer() {
  const apiConfiguration = useContext(ApiConfigurationContext);
  const [ movieQuery, setMovieQuery ] = useState<IMovieQuery>({ query: '' });
  const [movieList, setMovieList] = useState<IUiMovieItem[]>([]);
  const selectedRatingStateHook = useState({ value: Ratings.ZERO });
  const selectedRating = selectedRatingStateHook[0].value

  useEffect(() => {
    async function fetchMovies() {
      let movies: IMovieItem[] = [];
      const { query } = movieQuery;

      if (query) {
        movies = await searchMovies(query);
      } else {
        movies = await discoverMovies();
      }

      const uiMovies: IUiMovieItem[] = movies
        .map(movie => {
          const poster_url = getImageUrl(movie.poster_path, apiConfiguration)
          return { ...movie, poster_url  }
        })

      setMovieList(uiMovies);
    }
    fetchMovies();
  }, [movieQuery, apiConfiguration])

  return (
    <RatingConext.Provider value={selectedRatingStateHook}>
      <DiscoverView
        setMovieQuery={setMovieQuery}
        movieList={filterMoviesByRating(movieList, selectedRating)} />
    </RatingConext.Provider>
  )
}
