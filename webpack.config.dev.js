const base = require('./webpack.config')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = Object.assign({}, base, {
    mode:'development',
    plugins:[
        new HtmlWebpackPlugin(
            {
                // title:'轮子',
                template:'index.html'
            }
        )
    ],
})