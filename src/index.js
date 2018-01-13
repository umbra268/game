import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import registerServiceWorker from './registerServiceWorker';
import 'modernizr-loader!json-loader!./.modernizrrc.json';  //eslint-disable-line

ReactDOM.render(<App />, document.getElementById('root'));

registerServiceWorker();
