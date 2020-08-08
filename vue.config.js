module.exports = {
    // 生产模式修改资源路径
    publicPath: process.env.NODE_ENV === 'production' ? '/vuetest' : '/',

    // 生产模式不启用sourceMap
    productionSourceMap: false,

    // 生产模式禁用eslint-loader
    lintOnSave:  process.env.NODE_ENV !== 'production',

    // 请用手机调试
    // devServer: {
    //     host:'192.168.23.1',
    //     port: 8080,
    //     hot: true
    // },
}