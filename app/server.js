const config = require('./config');
const express = require('express');
const homeController = require('./server/controllers/home.js');

const webpack = require('webpack');
const webpackConfig = require('../webpack.config');
const middleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

const server = express();
const router = express.Router();

const compiler = webpack(webpackConfig);

// serve static assets from here
// esto es solo en produ, en dev el middleware
// de webpack los sirve desde la memoria
if (!config.isDevelopment) server.use('/build', express.static(__dirname + '/build'));

// webpack server side
// este es lo contrario lo usas solo en dev
if (config.isDevelopment) server.use(middleware(compiler, { serverSideRender: true }));
// este de aca sirve para avisarle al cliente cuando hay cambios en el codigo
if (config.isDevelopment) server.use(webpackHotMiddleware(compiler));
// routers
router.get('/', homeController);

// mount the router
server.use('/', router);

// start the server
server.listen(config.port);

module.exports = router;
