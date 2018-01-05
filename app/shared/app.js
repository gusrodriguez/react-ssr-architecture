const React = require('react');
const Hello = require('./hello');

function App(props) {
  return (
    <div>
      <link rel="stylesheet" type="text/css" href="../build/bundle.css" />
      <script src="../build/bundle.js" type="text/javascript" />
      <Hello text={props.text} />
    </div>
  );
}

module.exports = App;
