const React = require('react');
const ReactDOM = require('react-dom');

function startApp() {
  const preloadedState = window.PRELOADED_STATE;
  // eslint-disable-next-line
  ReactDOM.render(<App {...preloadedState} />, document.getElementById('root'));
}

startApp();

