const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const webpack = require('webpack');
 
module.exports = {
    entry: {
        app: './src/app/app.module.js',
        appComponent: './src/app/app.component.js',
        appController: './src/app/app.controller.js'
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].module.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                loader: 'babel-loader',
                    options: {
                        presets: ['env']
                    }
                }
            },
            { enforce: 'pre', test: /\.js$/, loader: "source-map-loader" },
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            },
            {
                test: /\.scss$/,
                use: [ 'style-loader', 'css-loader', 'sass-loader' ]
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192
                        }
                    }
                ]
            }   
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html'
        })
    ]
};