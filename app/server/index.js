const express = require('express');
const React = require('react');
const App = require('../shared/app');

const server = express();

// serve static assets from here
server.use('../shared/assets', express.static('assets'));

server.get('/', (req, res) => {
  const View = props => (<App {...props} />);
  res.render(View, { text: 'React project' });
});

server.listen(8080);
