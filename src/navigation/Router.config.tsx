import { isEmpty } from 'lodash';
import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AppHeader from './appHeader/AppHeader';
import ApiConfigurationContext from '../state/api-config.context'
import './router-config.scss';
import { DiscoverContainer } from '../pages/discover';
import MovieDetailsContainer from '../pages/movie-details/MovieDetails.container';
import NotFound from './NotFound';
import AppFooter from './appFooter/appFooter';

export default function RouterConfig() {
  const apiConfiguration = useContext(ApiConfigurationContext);
  return (
    <BrowserRouter>
      <AppHeader />
      <Container className='main-container'>
        { (isEmpty(apiConfiguration))
            ? <div>...</div>
            : (
              // Moving this routes to a separate component adds a 'custom-switch' class
              // to containing div that adds unexpected padding
                <Switch>
                  <Route exact path={'/'} component={DiscoverContainer} />
                  <Route path={'/movie/:movieId'} component={MovieDetailsContainer} />
                  <Route path='*'>
                    <NotFound />
                  </Route>
                </Switch>
            )
        }
      </Container>
      <AppFooter />
    </BrowserRouter>
  )
}
