const React = require('react');
const Hello = require('./hello');

function App(props) {
  return (
    <Hello text={props.text} />
  );
}

module.exports = App;
