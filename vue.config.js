// Vue.config.js 配置选项

module.exports = {

    //  调整内部的 webpack 配置

    configureWebpack: () => { }, //(Object | Function)

    chainWebpack: (config) => {
        config.module
            .rule('html')
            .test(/\.(html)$/)
            .use('html-loader')
            .loader('html-loader')
    },

    // 配置 webpack-dev-server 行为。

    devServer: {

        host: 'localhost',

        port: 8080,

        https: false,

        hotOnly: false,

        // 查阅 https://github.com/vuejs/vue-docs-zh-cn/blob/master/vue-cli/cli-service.md#配置代理

        proxy: {

            '/api': {

                target: "http://localhost:8080",

                changeOrigin: true,

                secure: false,

                pathRewrite: {

                    "^/api": ""

                }

            }

        },

    }

}
