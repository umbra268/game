import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter, Route } from 'react-router';
import { HashRouter, Redirect } from 'react-router-dom';
import ROUTES from './routes'
import './index.css';

import registerServiceWorker from './registerServiceWorker';
import 'modernizr-loader!json-loader!./.modernizrrc.json';  //eslint-disable-line

if ( process.env.NODE_ENV === 'development' ) {
  const Routes = ({ children }) => Object.entries(ROUTES).map(([key, component]) => <Route {...{ key, path: `/${key}`, component }} />).concat(children);
  ReactDOM.render(
    <HashRouter>
      <Routes>
        <Route exact path="/" render={() => (<Redirect to='main_menu' />)} />
      </Routes>
    </HashRouter>,
    document.getElementById('root')
  );
} else {
  const Routes = () => Object.entries(ROUTES).map(([key, component]) => <Route {...{ key, path: `${key}`, component }} />);
  ReactDOM.render(
    <MemoryRouter initialEntries={['main_menu']}>
      <Routes />
    </MemoryRouter>,
    document.getElementById('root')
  );
}

registerServiceWorker();
