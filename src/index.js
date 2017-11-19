import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MainMenu from './components/MainMenu';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<MainMenu />, document.getElementById('root'));
registerServiceWorker();
