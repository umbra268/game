import React, { Component } from 'react';
import MainMenu from './components/MainMenu';

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

const routes = {
  main_menu: MainMenu,
  character_select: asyncComponent(() => import(/* webpackChunkName: 'character_select' */ './components/CharacterSelect'))
};
export default routes;
