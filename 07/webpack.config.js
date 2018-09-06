const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: './src/js/index.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'js/bundle-[hash].js'
  },
  devServer:{
  	contentBase:'./public',
  	//本地服务路径
  	inline:true,
  	//实时刷新
    port:8082
  },
  module:{
      rules:[
        {
          test: /\.css$/,
          loader: 'style-loader!css-loader'
        },
        {
          test:/\.(jpg|png|jpeg)$/,
          use:['file-loader?limit=1024&name=./img/[name].[ext]']
        },
        {
          test:/\.html$/,
          use: 'html-withimg-loader'
        },
        {
          test:/\.(woff|ttf|svg|eot|xttf|woff2)$/,
          use:'file-loader?limit=1024&name=./fonts/[name].[ext]'
        }
      ]
  },
  plugins:[
    new HtmlWebpackPlugin({
      template:'./src/index.html',  
      minify:{
        removeAttributeQuotes:true,//去除引号
        removeComments:true,//去除注释
        removeEmptyAttributes:true,//去除空属性
        collapseWhitespace:true//去除空格
      }
    }) 
  ]
};

    