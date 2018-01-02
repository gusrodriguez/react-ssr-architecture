const express = require('express');
const React = require('react');
const App = require('./shared/app');
const ReactDOMServer = require('react-dom/server');
const template = require('./shared/template');

const server = express();

// serve static assets from here
server.use('..shared/assets', express.static('assets'));

server.get('/', (req, res) => {
  const appString = ReactDOMServer.renderToString(<App />);
  res.send(template({
    body: appString,
  }));
});

server.listen(8080);
