const React = require('react');
const ReactDOM = require('react-dom');
const App = require('../shared/app');

function startApp() {
  const preloadedState = window.__PRELOADED_STATE__;

  // eslint-disable-next-line
  ReactDOM.render(<App {...preloadedState} />, document.getElementById('root'));
}

module.exports = startApp;
