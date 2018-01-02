const React = require('react');

function Template(props) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <title>React.js app using NPM, Babel6 and Webpack</title>
      </head>
      <body>
        <div id="root" >`${props.body}`</div>
        <link rel="stylesheet" type="text/css" href="build/bundle.css" />
        <script src="build/bundle.js" type="text/javascript" />
      </body>
    </html>);
}

module.exports = Template;
