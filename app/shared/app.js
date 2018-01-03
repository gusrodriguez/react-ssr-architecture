import './app.scss';

const React = require('react');

function App(props) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <title>React.js app using NPM, Babel6 and Webpack</title>
      </head>
      <body>
        <script>{`window._PRELOADED_STATE = ${JSON.stringify(props)};`}</script>
        <div>
          <span>{props.text}</span>
        </div>
        <link rel="stylesheet" type="text/css" href="build/bundle.css" />
        <script src="build/bundle.js" type="text/javascript" />
      </body>
    </html>
  );
}

module.exports = App;
