import React from 'react';
import { IMovieDetailsViewProps } from './MovieDetailsViewProps';
import MovieMain from './components/movieMain/MovieMain';
import MovieOverview from './components/movieOverview/MovieOverview';
import MovieCast from './components/movieCast/MovieCast';
import './movie-detail.scss'

export default function MovieDetailsView(props: IMovieDetailsViewProps) {
  const { details, cast, trailerKey } = props;
  
  return (
    <div className='movie-detail'>
      <MovieMain details={details} trailerKey={trailerKey || ''} />
      <MovieOverview overview={details?.overview || ''}/>
      <hr/>
      <MovieCast cast={cast || []} />
    </div>
  )
}
