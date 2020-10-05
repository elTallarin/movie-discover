import React, { useContext, useEffect, useState } from 'react';
import { getMovieCredits, getMovieDetails, getMovieTrailerKey } from '../../services/api.service';
import ApiConfigurationContext from '../../state/api-config.context'
import { IMovieCastItem } from '../../types/movieCastItem';
import { IMovieDetails } from '../../types/movieDetails';
import { getImageUrl } from '../../utilities/api.utility';
import MovieDetailsView from './MovieDetails.view';

export interface IMovieDetailsContainerProps {
  match: {
    params: { movieId: string; }
  };
}

export default function MovieDetailsContainer(props: IMovieDetailsContainerProps) {
  const { movieId } = props.match.params;
  const apiConfiguration = useContext(ApiConfigurationContext);
  const [ movieDetails, setMovieDetails ] = useState<IMovieDetails | null>(null)
  const [ cast, setCast ] = useState<IMovieCastItem[] | null>(null);
  const [ trailerKey, setTrailerKey ] = useState<string | undefined>(undefined);
  
  useEffect(() => {
    async function fetchMovieDetails() {
      const [movie, credits, trailerKey] = await Promise.all([
        getMovieDetails(+movieId),
        getMovieCredits(+movieId),
        getMovieTrailerKey(+movieId)
      ]);
      
      const poster_url = getImageUrl(movie.poster_path, apiConfiguration)
      const castWithProfileImage = credits.cast
        .map(castItem => {
          const profile_url = getImageUrl(castItem.profile_path, apiConfiguration);
          return { ...castItem, profile_url };
        })

      setMovieDetails({ ...movie, poster_url});
      setCast(castWithProfileImage);
      setTrailerKey(trailerKey);
    }

    fetchMovieDetails()
  }, [movieId, setMovieDetails, apiConfiguration, setCast])

  return (
    <MovieDetailsView
      details={movieDetails}
      cast={cast}
      trailerKey={trailerKey}/>
  )
}