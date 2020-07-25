module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? '/vuetest' : '/',

    // 生产模式是否启用sourceMap
    productionSourceMap: false,

    //
    // devServer: {
    //     host:'192.168.23.1',
    //     port: 8080,
    //     hot: true
    // },
}