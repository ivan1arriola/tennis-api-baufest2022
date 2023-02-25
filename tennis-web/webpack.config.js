const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
 entry: './src/index.js',
 output: {
   path: path.resolve(__dirname, 'dist'),
   filename: 'bundle.js',
 },
devServer:{
  historyApiFallback: true,
  compress: true,
  port: 3000,
  open: true,
},
 resolve: {
   extensions: ['.js', '.jsx'],
 },
 module: {
   rules: [
     {
       test: /\.(js|jsx)$/,
       exclude: /node_modules/,
       use: {
         loader: 'babel-loader',
       },
     },
     {
       test: /\.html$/,
       use: [
         {
           loader: 'html-loader',
         },
       ],
     },
     {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
       },
   ],
 },
 plugins: [
   new HtmlWebPackPlugin({
     template: './public/index.html',
     filename: './index.html',
   }), ],
};
