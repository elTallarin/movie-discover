import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { IMovieTrailerProps } from './MovieTrailerProps';
import './movie-trailer.scss'

export default function MovieTrailer(props: IMovieTrailerProps) {
  const { trailerKey } = props;

  return(
    <Row className='movie-trailer'>
      <Col className='videoWrapper' xs='12'>
        <iframe
        title='video'
        src={`https://www.youtube.com/embed/${trailerKey}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>  
      </Col> 
    </Row>
  )
}
