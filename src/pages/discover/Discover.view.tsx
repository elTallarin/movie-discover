import React from 'react';
import Movies from './components/Movies/Movies';
import SearchMovies from './components/searchMovies/SearchMovie';
import { IDiscoverViewProps } from './discoverViewProps';
import './discover-view.scss'

export default function DiscoverView(props: IDiscoverViewProps) {
  const { setMovieQuery, movieList } = props;
  return (
    <div className='discover-view'>
      <SearchMovies setQuery={setMovieQuery} />
      <Movies movieList={movieList} />
    </div>
  )
}
