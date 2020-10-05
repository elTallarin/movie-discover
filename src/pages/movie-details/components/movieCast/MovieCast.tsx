import React, { useState } from 'react';
import { Row, Col, Table, Image, Button } from 'react-bootstrap';
import { IMovieCast } from './MoviCastProps';
import './movie-cast.scss'

export default function MovieCast(props: IMovieCast) {
  const REDUCED_CAST_SIZE = 8;
  const { cast } = props;
  const [ showAllCast, setShowAllCast ] = useState<boolean>(false);

  function toggleShowAllCast() {
    setShowAllCast(!showAllCast);
  }
  return (
    <Row className='movie-cast'>
      <Col xs='12'>
        <h4>Cast</h4>
        <Table striped bordered={false} hover>
          <tbody>
          { (showAllCast
              ? cast
              : cast.slice(0, REDUCED_CAST_SIZE + 1)
            )
            .map((character) => (
            <tr key={character.id}>
              <td><Image height='44' width='32'  src={ character.profile_url } /></td>
              <td>{character.name }</td>
              <td>{character.character}</td>
            </tr>
          )) }
          </tbody>  
        </Table>
      </Col>
      <Col className='actions' xs='12'>
        <Button onClick={toggleShowAllCast} variant="link">
          { showAllCast
              ? 'show less'
              : 'show more'
          }
        </Button>
      </Col>
    </Row>
  );
}
