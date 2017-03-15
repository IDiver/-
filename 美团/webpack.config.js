/**
 * Created by chenyang on 17/2/28.
 */
const path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');
module.exports = {
    entry: {
        app: "./src/js/app.js"
    },
    output: {
        path: __dirname+"/out/",
        filename: "[name].js"
    },
    module: {
        loaders: [
            {
                test: /\.scss$/,
                include: path.resolve(__dirname, 'src/css'),
                loader: 'style!css!postcss?parser=postcss-scss'
            },
            { test: /\.css$/, loader: ExtractTextPlugin.extract(
                "style-loader",
                "css-loader?sourceMap"
            ) },
            // { test: /\.js$/, loader: 'jsx-loader?harmony' },
            {test: /\.js$/, loader: "babel-loader", query: {presets: ['react','es2015'] , cacheDirectory: true}},   /*es6 to es5*/
            {test: /\.jsx$/,loader: 'babel-loader', query: {presets: ['react','es2015'], cacheDirectory: true}} /*jsx to js,es5 to es6*/
        ]
    },
    plugins : [
        new ExtractTextPlugin("[name].css", {
            disable: false,
            allChunks: true
        })
    ],
    resolve: {
        alias: {
            jquery        : 'src/js/jquery-vendor.js' //    将其指向jquery-vendor.js所在位置
        },
        modulesDirectories: ['node_modules', path.join(__dirname, '../node_modules')],
        extensions: ['', '.web.js', '.js', '.json'],
    },
    postcss: ()=> [precss,autoprefixer,rucksackCss]
};

