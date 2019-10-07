const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  context: path.resolve(__dirname, ''),

  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js', '.png']
  },

  entry: {
    main: './index.tsx'
  },

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },

  module: {
    rules: [{
      test: /\.tsx?$/,
      use: 'ts-loader',
      exclude: [path.resolve(__dirname, '../node_modules')]
    },{
      test: /\.(js|jsx)$/,
      use: {
        loader: "babel-loader"
      },
      exclude: [path.resolve(__dirname, '../node_modules')]
    }, {
      test: [/\.css$/],
      use: ["style-loader", "css-loader"]
    }, {
      test: /\.png$/,
      exclude: /node_modules/,
      use: 'file-loader'
    },
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'Clueless'
    })
  ]
};
