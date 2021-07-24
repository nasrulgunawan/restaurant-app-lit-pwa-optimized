const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const ServiceWorkerWebpackPlugin = require('serviceworker-webpack-plugin');
const ImageminWebpackPlugin = require('imagemin-webpack-plugin').default;
const ImageminMozjpeg = require('imagemin-mozjpeg');

const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src/assets/javascripts/app.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/views/index.html'),
      filename: 'index.html',
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/public/'),
          to: path.resolve(__dirname, 'dist/'),
          globOptions: {
            ignore: ['**/images/**'],
          },
        },
      ],
    }),
    new ImageminWebpackPlugin({
      plugins: [
        // eslint-disable-next-line new-cap
        ImageminMozjpeg({
          quality: 80,
          progressive: true,
        }),
      ],
    }),
    new WebpackPwaManifest({
      name: 'Mamamyu',
      short_name: 'Mamamyu',
      description: 'Find your favorite restaurant on Mamamyu',
      background_color: '#ffffff',
      display: 'standalone',
      theme_color: '#fa942a',
      icons: [
        {
          src: path.resolve('src/public/icon.png'),
          sizes: [72, 96, 128, 144, 152, 192, 256, 384, 512],
          purpose: 'any maskable',
        },
      ],
    }),
    new ServiceWorkerWebpackPlugin({
      entry: path.resolve(__dirname, 'src/assets/javascripts/sw.js'),
    }),
  ],
};
