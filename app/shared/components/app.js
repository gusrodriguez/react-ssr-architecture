const React = require('react');
const Hello = require('./hello');

function App(props) {
  return (
    <div>
      <Hello text={props.text} />
    </div>
  );
}

module.exports = App;
