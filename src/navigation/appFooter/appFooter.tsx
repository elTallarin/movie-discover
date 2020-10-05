import React from 'react';
import { Col, Container, Row, Image } from 'react-bootstrap';
import { EXTERNALS } from '../../constants';
import './app-footer.scss';

export default function AppFooter() {

  function goToExternal(url: string) {
    window.open(url, '_blank');
  }

  return (<footer className='app-footer'>
    <Container className='footer-container'>
      <Row>
        <Col className='footer-links' xs={12}>
          {/* antipattern, better to have component and provide url
          as prop */}
          <Image
            onClick={goToExternal.bind({}, EXTERNALS.TMDB)}
            className='external tmdb-logo'
            style={{height:'20px'}}
            src={process.env.PUBLIC_URL + '/tmdb.svg'}></Image>
          <span
            onClick={goToExternal.bind({}, EXTERNALS.GIT)} 
            className='external fa fa-github'></span>
        </Col>
      </Row>
    </Container>
  </footer>)
}