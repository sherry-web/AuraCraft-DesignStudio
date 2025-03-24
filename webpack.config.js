const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  // ... existing config
  devServer: {
    historyApiFallback: {
      index: '/index.html', // Explicit fallback
      disableDotRule: true,
    },
    static: {
      directory: path.join(__dirname, 'public'),
      publicPath: '/', // Explicit public path
    },
    hot: true,
    port: 3000,
    client: {
      overlay: {
        errors: true,
        warnings: false,
      },
    },
  },
  // ... rest of your config
};