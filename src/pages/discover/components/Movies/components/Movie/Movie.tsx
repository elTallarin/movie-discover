import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Movie.scss';
import { IMovieProps } from './movieProps';

export default function Movie(props: IMovieProps) {
  const { original_title, vote_average, poster_url, id } = props.movie;
  return (
    <Link to={`/movie/${id}`}>
      <Card className='movie-card border-0'>
        <Card.Img variant="top" src={poster_url} />
        <Card.Body>
          <Card.Title>
          <span className='rating fa fa-star checked'>
          </span>
            <span> {vote_average}</span>
          </Card.Title>
          <Card.Title>{ original_title }</Card.Title>
        </Card.Body>
      </Card>
    </Link>
  )
}
