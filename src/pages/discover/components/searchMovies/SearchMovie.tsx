import React, { useState, ChangeEvent, FormEvent } from 'react';
import { InputGroup, FormControl, Button } from 'react-bootstrap';
import RatingFilter from '../ratingFilter/RatingFilter';
import './searchMovie.scss'
import { ISearchMoviesProps } from './searchMoviesProps';

export default function SearchMovies(props: ISearchMoviesProps) {
  const [movieQuery, setMovieQuery] = useState<string>('');

  const handleQueryChange = (e: ChangeEvent<any>): void => {
    setMovieQuery(e.target.value)
  }

  const notifyMovieQueryChange = (e: FormEvent): void => {
    e.preventDefault();
    props.setQuery({ query: movieQuery });
  }

  return (
    <div className='search-and-filter-movies'>
      <form onSubmit={ notifyMovieQueryChange } className='search-movies'>
        <InputGroup className="mb-3">
          <FormControl
            value={movieQuery}
            onChange={handleQueryChange}
            placeholder="search"
          />
          <InputGroup.Append>
            <Button
              className='discover'
              variant="outline-secondary"
              type='submit'>
                Discover!
            </Button>
          </InputGroup.Append>
        </InputGroup>
      </form>
      <div className='filter-movies'>
        <RatingFilter />
      </div>
    </div>
    
  )
}