const webpack = require('webpack');
const path = require('path');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');
// const autoprefixer = require('autoprefixer');

const BUILD_DIR = path.resolve(__dirname, './app/build');
const APP_DIR = path.resolve(__dirname, './app');

const config = {
  entry: [
    'webpack-hot-middleware/client?path=http://localhost:8081/__webpack_hmr&overlay=false',
    `${APP_DIR}/client/index.js`,
  ],

  // Where to output the js bundle
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js',
    publicPath: '/', // esto es reeeee importante porque desde el server es donde te lo sirve el estatico
  },

  module: {
    rules: [
      // ES6 Loader
      {
        test: /\.js?/,
        include: APP_DIR,
        loader: 'babel-loader',
      },
      // Sass loader
      {
        test: /\.scss$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader?modules&localIdentName=[path][name]-[local]' },
          { loader: 'sass-loader' },
        ],
      },
    ],
  },
  // Be able to concat all the css files in one.
  plugins: [
    // Con esto le pasas un entorno al bundle
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
        BROWSER: true,
      },
    }),
    new webpack.HotModuleReplacementPlugin(),
    // estos plugins no los usas en dev porque no queres separar el css
    // para que te banque el hot reload de los estilos
    // new ExtractTextPlugin('bundle.css'),
    // new webpack.LoaderOptionsPlugin({
    //   // Minimize the css
    //   minimize: true,
    // }),
  ],
};

module.exports = config;
