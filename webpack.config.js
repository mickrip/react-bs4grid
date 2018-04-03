const webpack = require('webpack');
const path = require('path');
const autoprefixer = require('autoprefixer');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'lib'),
    filename: 'index.js',
    libraryTarget: 'commonjs2',
    library: 'react-bs4grid',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  externals: {
    react: 'commonjs2 react',
    'react-dom': 'commonjs2 ReactDOM',
    classnames: 'commonjs2 classnames',
    'prop-types': 'commonjs2 prop-types',
    'react-style-proptype': 'commonjs2 react-style-proptype',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: path.resolve(__dirname, 'src'),
        exclude: /(node_modules|bower_components|build)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env'],
          },
        },
      },
      {
        test: /\.scss$/,
        use: [{
          loader: 'css-loader',
          options: {
            modules: true,
          },
        },
        {
          loader: require.resolve('postcss-loader'),
          options: {
            ident: 'postcss',
            plugins: () => [
              require('postcss-flexbugs-fixes'),
              autoprefixer({
                browsers: [
                  '>1%',
                  'last 4 versions',
                  'Firefox ESR',
                  'not ie < 9',
                ],
                flexbox: 'no-2009',
              }),
            ],
          },
        },
        { loader: 'sass-loader' },
        ],
      },
    ],
  },


  plugins: [

  ],
};
