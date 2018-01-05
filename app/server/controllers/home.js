const React = require('react');
const App = require('../../shared/app');
const ReactDOMServer = require('react-dom/server');

function homeController(req, res) {
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
    </html>`);
}

module.exports = homeController;
