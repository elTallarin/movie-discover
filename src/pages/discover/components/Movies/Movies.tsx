import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { isEmpty } from 'lodash';
import Movie from './components/Movie/Movie';
import { IMoviesProps } from './MoviesProps';
import './Movies.scss'

export default function Movies(props: IMoviesProps) {
  return (
    <div>
      <Row>
        {isEmpty(props.movieList)
          ? (<Col xs={12} >
            <h2>No movies to discover :(</h2>
          </Col>)
          : props.movieList
              .map(movie => (
                <Col key={movie.id} xs={'3'} className='movie-card-container'>
                  <Movie movie={movie} />
                </Col>
              ))}
      </Row>
    </div>
  )
}
