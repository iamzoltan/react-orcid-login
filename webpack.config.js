module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules\/(?!react-orcid-login)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: [
              '@babel/plugin-proposal-class-properties',
              '@babel/plugin-syntax-class-properties'
            ]
          }
        }
      }
    ]
  }
};
