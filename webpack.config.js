const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');

const BUILD_DIR = path.resolve(__dirname, 'build');
const APP_DIR = path.resolve(__dirname, './');

const config = {
  entry: APP_DIR + '/index.js',

  // Where to output the js bundle
  output: {
    path: BUILD_DIR,
    filename: 'react-notes.bundle.js'
  },
  module: {
    rules: [
      // ES6 Loader
      {
        test: /\.js?/,
        include: APP_DIR,
        loader: 'babel-loader'
      },
      //Sass loader
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader!sass-loader",
        }),
      }
    ]
  },
  // Be able to concat all the css files in one.
  plugins: [
    new ExtractTextPlugin('react-notes.bundle.css'),
    new webpack.LoaderOptionsPlugin({
      minimize: true, //Minimize the css
    })
  ]
};

module.exports = config;