var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  context: path.join(__dirname, "src"),
  devtool: debug ? "inline-sourcemap" : null,
  entry: [
    "./js/app.js",
    "./scss/app.scss",
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0'],
          plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy'],
        }
      },
      {
        test: /\.scss$/,
        exclude: /(node_modules|bower_components)/,
        use: ['css-hot-loader'].concat(ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader',
            {
              loader: 'sass-loader',
              query: {
                sourceMap: false,
              },
            },
          ],
          publicPath: __dirname + "/public/"
        })),
      }
    ]
  },
  output: {
    path: __dirname + "/public/",
    filename: "app.min.js"
  },
  devServer: {
    contentBase: path.join(__dirname, "public"),
    compress: true,
    port: 9090,
    open: true
  },
  plugins: debug ? [
      new ExtractTextPlugin({ 
        filename: './css/style.css', 
        disable: false, 
        allChunks: true 
      }),
    ] : [
    new ExtractTextPlugin({ 
      filename: './css/style.css', 
      disable: false, 
      allChunks: true 
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
  ],
};
