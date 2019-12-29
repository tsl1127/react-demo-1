const base = require('./webpack.config')
const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')  //这里不能取名为大写的HtmlWebpackPlugin,原因未知

module.exports = Object.assign({}, base, {
    mode:'development',
    entry:{
        example: './example.tsx'
    },
    plugins:[
        new htmlWebpackPlugin(
            {
                title:'lunzi',
                template:path.join(__dirname,'example.html')
            }
        )
    ],
})