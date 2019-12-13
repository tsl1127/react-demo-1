const path = require('path')

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
    }
}