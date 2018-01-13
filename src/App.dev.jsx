import React from 'react';
import { HashRouter, Redirect, Route } from 'react-router-dom';
import ROUTES from './routes';

const Routes = ({ children }) => Object.entries(ROUTES).map(([key, component]) => <Route {...{ key, path: `/${key}`, component }} />).concat(children);

const App = () => (<HashRouter>
  <Routes>
    <Route exact path="/" render={() => (<Redirect to='main_menu' />)} />
  </Routes>
</HashRouter>);

export default App;
