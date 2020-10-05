import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import MovieResume from './components/movieResume/MovieResume';
import MovieTrailer from './components/movieTrailer/MovieTrailer';
import { IMovieMainProps } from './MovieMainProps';
import './movie-main.scss'

export default function MovieMain(props: IMovieMainProps) {
  const { details, trailerKey } = props;
  const genres = details && Array.isArray(details.genres)
    ? details.genres
      .map(genre => genre.name)
      .reduce((gList, genre, index) => {
        const toConcat = index === 0
          ? genre
          : `, ${genre}`;
        return gList.concat(toConcat);
      }, '' )
    : '';

  return (
    <Row className='movie-main'>
        <Col xs='4'>
          <Image src={ details?.poster_url } thumbnail />
        </Col>
        <Col xs='8' >
          <MovieResume
            original_title={details?.original_title || ''}
            genres={genres}
            release_date={details?.release_date || ''}
            vote_average={details?.vote_average || -1}
            vote_count={details?.vote_count || -1} />
          <MovieTrailer trailerKey={trailerKey || ''} />
        </Col>
      </Row>
  )
}
