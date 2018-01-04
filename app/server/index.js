require('babel-register')();
const express = require('express');
const React = require('react');
const App = require('../shared/app');

const server = express();
const router = server.router();


// serve static assets from here
server.use('../shared/assets', express.static('assets'));

router.get('/', (req, res) => {
  const data = { text: 'React project' };
  const View = <App {...data} />;
  res.render(View);
});

server.listen(8080);
