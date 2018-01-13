let loadedModule;

if (process.env.NODE_ENV === 'development') {
  loadedModule = require('./App.dev.jsx')
} else{
  loadedModule = require('./App.prod.jsx')
}

export default loadedModule;
