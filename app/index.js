// In order express to understand jsx. We need babel-register.
// babel-register will compile modules on the fly.
// It will cache every single module that is required and will transpile it. In order to do that, it needs to be placed and executed into a separated file than the server.
const config = require('./config');

require('babel-register')();

// esto es lo mismo que babel register
// pero para css en dev queres una config
// que te diga el path completo pero en produ
// queres solo el hash lo mas corto posible
require('css-modules-require-hook')({
  generateScopedName: config.isDevelopment ? '[path][name]-[local]' : '[hash:base64:4]',
});

require('./server');
