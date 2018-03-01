const React = require('react');
const App = require('../../shared/components/app');
const ReactDOMServer = require('react-dom/server');

function homeController(req, res) {
  function normalizeAssets(assets) {
    return Array.isArray(assets) ? assets : [assets];
  }

  const { assetsByChunkName } = res.locals.webpackStats.toJson();
  // const css = normalizeAssets(assetsByChunkName.main)
  //   .filter(path => path.endsWith('.css'))
  //   .map(path => `<link rel="stylesheet" href="../../build/${path}" />`)
  //   .join('\n');

  const js = normalizeAssets(assetsByChunkName.main)
    .filter(path => path.endsWith('.js'))
    .map(path => `<script src="/${path}"></script>`)
    .join('\n');

  const data = { text: 'This is a Universal React App!' };
  const app = ReactDOMServer.renderToString(<App {...data} />);

  res.send(`
    <html>
        <head>
        <script>window.__PRELOADED_STATE__ = ${JSON.stringify(data)}</script>
        </head>
        <body>
            <main id="root">${app}</main>
        ${js}
        </body>
    </html>`);
}

module.exports = homeController;
