const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: {
        index:'./lib/index.tsx'
    },
    output:{
        path: path.resolve(__dirname,'dist/lib'),
        // filename: ''
        library: 'ku',
        libraryTarget: 'umd'  //库格式
    },
    mode:'production',
    module:{
        rules:[
            {
                test:/\.tsx?$/,
                loader:'awesome-typescript-loader'
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin(
            {
                title:'轮子',
                template:'index.html'
            }
        )
    ]

}