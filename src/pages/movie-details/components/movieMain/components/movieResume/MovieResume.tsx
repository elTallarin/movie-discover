import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { IMovieResumeProps } from './MovieResumeProps';
import './movie-resume.scss'

export default function MovieResume(props: IMovieResumeProps) {
  const { original_title, genres,release_date, vote_average, vote_count }
    = props;

  return (
    <Row className='movie-resume'>
      <Col xs='9'>
        <h1 className='title'>{original_title}</h1>
        <div>{ `${genres} | ${release_date}` }</div>
      </Col>
      <Col xs='3'>
        <div className="rating-container">
          <div className="rating-info">
            <span
              className={'rating fa fa-star checked'}>
            </span>
            <span className='rating'>
              { vote_average }
              <span className='max-rating'>/10</span>
            </span>
          </div>
          <div className="vote-count">
            {vote_count}
          </div>
        </div>
      </Col>
    </Row>
  )
}