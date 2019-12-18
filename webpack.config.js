const path = require('path')
// const HtmlWebpackPlugin = require('html-webpack-plugin')


module.exports = {
    entry: {
        index:'./lib/index.tsx'
    },
    resolve:{
        extensions:['.ts','.tsx','.js','.jsx'],    
    },
    output:{
        path: path.resolve(__dirname,'dist/lib'),
        // filename: ''
        library: 'ku',
        libraryTarget: 'umd'  //库格式
    },
    // mode:'production',
    module:{
        rules:[
            {
                test:/\.tsx?$/,
                loader:'awesome-typescript-loader'
            },
            {
                test:/\.svg$/,
                loader:'svg-sprite-loader'
            }
        ]
    },
    // plugins:[
    //     new HtmlWebpackPlugin(
    //         {
    //             title:'lunzi',
    //             template:path.join(__dirname,'index.html')
    //         }
    //     )
    // ],
    // externals:{  //不打包他们
    //     react:{
    //         commonjs:'react',
    //         commonjs2:'react',
    //         amd:'react',
    //         root:'React'
    //     },
    //     "react-dom":{
    //         commonjs:'react-dom',
    //         commonjs2:'react-dom',
    //         amd:'react-dom',
    //         root:"ReactDOM"
    //     }
    // }

}