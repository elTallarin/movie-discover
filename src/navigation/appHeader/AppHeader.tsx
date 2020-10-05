import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './app-header.scss';

export default function AppHeader() {
  return (
    <header className='app-header'>
      <Container className='header-container'>
        <Row>
          <Col xs={12} className='title'>
          <Link to={'/'}>
            <h1>MD <span className='fa fa-film'></span></h1>
          </Link>
          </Col>
        </Row>
      </Container>
    </header>
  )
}
