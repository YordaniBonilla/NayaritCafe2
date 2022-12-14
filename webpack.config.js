const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
  entry: './front/src/index.js',
  mode:"development",
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, './front/dist'),
    clean: true
    
  },
  module:{
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
          test: /\.css$/i,
          include: path.resolve(__dirname, './front/src'),
          exclude: /node_modules/,
          use: [
          {
            loader: MiniCssExtractPlugin.loader          
          },
          {
            loader: 'css-loader', options: { importLoaders: 1}
          },
          'postcss-loader',],
      },
      {
        test: /\.(png|jp(e*)g|svg|gif)$/,
        use: ['file-loader'],
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      }
    ]
  },
  devServer: {
    static: './front/dist',
    hot: true,
    port: 5000,
    open:true
  },
  plugins: [
    // Re-generate index.html with injected script tag.
    // The injected script tag contains a src value of the
    // filename output defined above.
    new HtmlWebpackPlugin({
      inject: 'body',
      template: path.resolve(__dirname,'./front/dist/index.html')
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css'
    })
  ]
  
};