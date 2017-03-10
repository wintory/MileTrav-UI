var path = require('path');
var webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
var IsomorphicLoaderPlugin = require("isomorphic-loader/lib/webpack-plugin");
module.exports = {

    // ให้ webpack เริ่มรวมโค้ดที่ไฟล์ client.js
    entry: path.resolve(__dirname, 'src/client.js'),

    // แล้วตั้งชื่อไฟล์ output ว่า bundle.js
    output: {
        path: path.resolve(__dirname, 'public/js'),
        filename: 'bundle.js'
    },

    // อ่านไฟล์นามสกุล .js, .jsx ด้วย Babel
    module: {
        loaders: [
            {
                test: /\.jsx?$/ ,
                exclude: /node_modules/,
                loader: 'babel-loader'
            } ,    {
              test: /\.(eot|svg|ttf|woff|woff2)$/,
              loader: 'file-loader',
            }, {
              test: /\.(jpg|png|gif)$/,
              loaders: 'file-loader'
            },  {
                   test: /\.(jpe?g|png|gif|svg|woff|woff2|eot|ttf|)$/i,
                   loader: "file!isomorphic"
               },
            { test: /\.css$/,
              loader: ExtractTextPlugin.extract( {fallbackLoader: 'style-loader',
            loader: ['css-loader']}),
          } ,


                {
             test: /\.(png|woff|woff2|eot|ttf|svg|jpg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
             loaders: ['url-loader?limit=100000'],
           },
        ]
    } ,

    plugins: [ new IsomorphicLoaderPlugin({ keepExistingConfig: true }) ,
      new ExtractTextPlugin({ filename: 'style.css',
        allChunks: true
      })

  ]
};
