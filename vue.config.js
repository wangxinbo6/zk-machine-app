const path = require('path');//引入path模块
process.env.VUE_APP_Version = require('./package.json').version
const Timestamp = new Date().getTime();
function resolve(dir){
    return path.join(__dirname,dir)//path.join(__dirname)设置绝对路径
}
// 在此中，procution在生产环境和开发环境表示不同的值
//const BASE_URL = process.env.NODE_ENV === 'procution' ? '/' : '/'
const BASE_URL = process.env.NODE_ENV === 'procution' ? '/' : './'
module.exports = {

    publicPath: './',
    //baseUrl: BASE_URL,
    devServer: {
        overlay: {
            warnings: false,
            errors: false
        },
        proxy: {
            '/api': {
                // target: 'http://localhost:8081',
                target: 'http://172.16.1.195:9000/api',
                ws: true,
                changeOrigin: true,
                pathRewrite: {
                '^/api': '' //通过pathRewrite重写地址，将前缀/api转为/
                }
            }
        },
        // 开启https 访问时使用https://172.31.120.61:8081
        // https://localhost:8081 也可以访问，不过自带info请求会报错 不清楚具体原因
        https: false

    },
    lintOnSave: false,
    configureWebpack: {
        resolve : {
           extensions: ['.js', '.vue', '.json'],
            alias: {
              'vue$': 'vue/dist/vue.esm.js',
              '@': resolve('src'),
            },

        },
        // output: { // 输出重构  打包编译后的 文件名称  【模块名称.版本号.时间戳】
        //   filename: `[name].${process.env.VUE_APP_Version}.${Timestamp}.js`,
        //   chunkFilename: `[name].${process.env.VUE_APP_Version}.${Timestamp}.js`
        // }
    },
    productionSourceMap: false,
    outputDir: "../dist"
}
