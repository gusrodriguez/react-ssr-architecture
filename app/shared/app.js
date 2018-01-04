/* import './app.scss'; */

const React = require('react');
const Hello = require('./hello');
const serialize = require('serialize-javascript');

function App(props) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <title>React.js app using NPM, Babel6 and Webpack</title>
        <link rel="stylesheet" type="text/css" href="../build/bundle.css" />
        <script src="../build/bundle.js" type="text/javascript" />
      </head>
      <body>
        <div id="root">
          <Hello text={props.text} />
        </div>
      </body>
    </html>
  );
}

module.exports = App;
