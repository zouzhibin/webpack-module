const path = require("path")
const webpack = require('webpack')
const TerserPlugin = require("terser-webpack-plugin")
module.exports = {
    mode:"none",
    entry:{
        'zzbmath':'./src/index.js',
        'zzbmath.min':'./src/index.js'
    },
    output:{
        path:path.join(__dirname,'dist'),
        filename:'[name].js',
        library:"zzbmath", // 导出库的名字
        libraryTarget:"umd", // 以何种方法导出
        libraryExport:"default" // 导出哪个属性
    },
    optimization:{
        minimize:true,
        minimizer:[
            new TerserPlugin({
                include:/\.min\.js$/
            })
        ]
    }
}