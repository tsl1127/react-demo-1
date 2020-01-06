const base = require('./webpack.config')
const htmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
module.exports = Object.assign({}, base, {
    mode: 'production',
    entry: {
        example: './example.tsx'
    },
    output:{
        path: path.resolve(__dirname,'doc'),
    },
    // externals: {  //不打包他们
    //     react: {
    //         commonjs: 'react',
    //         commonjs2: 'react',
    //         amd: 'react',
    //         root: 'React'
    //     },
    //     "react-dom": {
    //         commonjs: 'react-dom',
    //         commonjs2: 'react-dom',
    //         amd: 'react-dom',
    //         root: "ReactDOM"
    //     }
    // },
    plugins: [
        new htmlWebpackPlugin(
            {
                title: 'lunzi',
                template: 'example.html',
                filename: 'index.html'
            }
        )
    ],
})