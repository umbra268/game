import React from 'react';
import { MemoryRouter, Route } from 'react-router';
import ROUTES from './routes';

const Routes = () => Object.entries(ROUTES).map(([key, component]) => <Route {...{ key, path: `${key}`, component }} />);
const App = () => (<MemoryRouter initialEntries={['main_menu']}>
  <Routes />
</MemoryRouter>);

export default App;
