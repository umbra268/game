import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter, Route } from 'react-router';
import './index.css';
import MainMenu from './components/MainMenu';
import registerServiceWorker from './registerServiceWorker';

const Routes = () =>
  Object.entries({
    main_menu: MainMenu
  }).map(([key, component]) => <Route {...{ key, path: key, component }} />);

ReactDOM.render(
  <MemoryRouter initialEntries={['main_menu']}>
    <Routes />
  </MemoryRouter>,
  document.getElementById('root')
);
registerServiceWorker();
