const React = require('react');
const ReactDOM = require('react-dom');
const App = require('../shared/components/app');

const preloadedState = window.__PRELOADED_STATE__;

function startApp() {
  // eslint-disable-next-line
  ReactDOM.render(<App {...preloadedState} />, document.getElementById('root'));
}

if (module.hot) {
  module.hot.accept('../shared/components/app', () => {
    const NextApp = require('../shared/components/app');
    ReactDOM.render(<NextApp {...preloadedState} />, document.getElementById('root'));
  });
}

module.exports = startApp;
