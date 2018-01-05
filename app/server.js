const express = require('express');
const homeController = require('./server/controllers/home.js');

const server = express();
const router = express.Router();

// serve static assets from here
server.use('/build', express.static(__dirname + '/build'));

// routers
router.get('/', homeController);

// mount the router
server.use('/', router);

// start the server
server.listen(8081);

module.exports = router;
