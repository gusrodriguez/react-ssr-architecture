const express = require('express');
const React = require('react');
const App = require('./shared/app');
const ReactDOMServer = require('react-dom/server');

const server = express();

console.log(__dirname);
// serve static assets from here
server.use('/build', express.static(__dirname + '/build'));

server.get('/', (req, res) => {
  const data = { text: 'React project' };
  const app = ReactDOMServer.renderToString(<App {...data} />);

  res.send(`
    <html>
        <script>window.__PRELOADED_STATE__ = ${JSON.stringify(data)}</script> 
        <body>
            <main id="root">
                ${app}
            </main>
        </body>
    </html>
  `);
});

server.listen(8081);
