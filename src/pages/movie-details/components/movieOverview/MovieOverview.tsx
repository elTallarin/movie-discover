import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './movie-overview.scss'

export interface IMovieOverview {
  overview: string;
}

export default function MovieOverview(props: IMovieOverview) {
  const { overview } = props;

  return (
    <Row className='movie-overview'>
      <Col xs='12'>
        <h4>Overview</h4>
        <p>{ overview }</p>
      </Col>
    </Row>
  )
}