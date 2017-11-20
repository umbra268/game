import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter, Route } from 'react-router';
import './index.css';
import MainMenu from './components/MainMenu';
import registerServiceWorker from './registerServiceWorker';

const Routes = () =>
  Object.entries({
    main_menu: MainMenu,
    character_select: asyncComponent(() => import(/* webpackChunkName: 'character_select' */ './components/CharacterSelect')),
  }).map(([key, component]) => <Route {...{ key, path: key, component }} />);

ReactDOM.render(
  <MemoryRouter initialEntries={['main_menu']}>
    <Routes />
  </MemoryRouter>,
  document.getElementById('root')
);
registerServiceWorker();

function asyncComponent(importComponent) {
  class AsyncComponent extends Component {
    constructor(props) {
      super(props);

      this.state = {
        component: null,
      };
    }

    async componentDidMount() {
      const { default: component } = await importComponent();
      this.setState({
        component,
      });
    }

    render() {
      const C = this.state.component;

      return C ? <C {...this.props} /> : <span>Loading</span>; // TODO: replace with a loading spinner
    }
  }

  return AsyncComponent;
}
