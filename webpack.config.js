const path = require('path');
const fs = require('fs');

const config = require('pitch-config');

module.exports = {

  entry: {
    app: './src/index.jsx',
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
  },

  devtool: 'inline-source-map',

  resolve: {
    modules: ['node_modules', path.resolve(__dirname, 'src')],
    extensions: ['.js', '.json', '.jsx', '.scss'],
  },

  module: {
    rules: [
      {
        test: [/\.js$/, /\.jsx$/],
        use: ['babel-loader'],
        include: path.resolve(__dirname, 'src'),
      },
      {
        test: /\.html$/,
        use: 'raw-loader',
        include: path.resolve(__dirname, 'src'),
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
        include: path.resolve(__dirname, 'src'),
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: 'url-loader?limit=10000&minetype=application/font-woff',
      },
      {
        test: /\.(ttf|eot|svg|jpg|png|gif)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: 'file-loader',
      },
    ],
  },

  plugins: [],

  devServer: {
    contentBase: './src',
    host: 'pitch.im',
    port: 443,
    historyApiFallback: {
      index: 'index.html',
    },
    https: {
      key: fs.readFileSync(config.ssl.key),
      cert: fs.readFileSync(config.ssl.cert),
      ca: fs.readFileSync(config.ssl.ca),
    },
    proxy: [
      {
        context: '/api',
        target: 'http://localhost:8081',
        secure: false,
      },
    ],
  },
};
