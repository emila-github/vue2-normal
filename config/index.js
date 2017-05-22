// see http://vuejs-templates.github.io/webpack for documentation.
var path = require('path')

module.exports = {
  build: {
    env: require('./prod.env'),
    index: path.resolve(__dirname, '../dist/index.html'),
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    productionSourceMap: true,
    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],
    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report
  },
  dev: {
    env: require('./dev.env'),
    port: 8080,
    autoOpenBrowser: true,
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {
        // '/mai': {
        //     target: 'http://q7gyvt.app.test.173ops.com/',
        //     changeOrigin: true,
        //     pathRewrite: {
        //       '^/mai/' : '/'
        //     }
        // },
        // '/**/*.do': {
        //     target: 'http://q7gyvt.app.test.173ops.com/',
        //     changeOrigin: true,
        //     pathRewrite: {
        //       // '.do': ''
        //       // '^/mai/' : '/'
        //     }
        // },
        // // 添加代理后可以访问线上的接口 ： http://localhost:8080/ty/city/list --> http://vr.17173.com/ty/city/list
        // '/ty': {
        //     target: 'http://vr.17173.com/',
        //     changeOrigin: true
        // },
        // '/**/*.do': {
        //     target: 'http://bptw9y.app.test.173ops.com/',
        //     changeOrigin: true,
        //     pathRewrite: {
        //       '.do': ''
        //       // '^/mai/' : '/'
        //     }
        // },
        // // 体验店图片上传
        // '/image/upload': {
        //     target: 'http://bptw9y.app.test.173ops.com/',
        //     changeOrigin: true
        // },
        // // 活动图片上传
        // '/api/v2/activity/': {
        //     target: 'http://p.act.17173.com/',
        //     changeOrigin: true
        // }
    },
    // CSS Sourcemaps off by default because relative paths are "buggy"
    // with this option, according to the CSS-Loader README
    // (https://github.com/webpack/css-loader#sourcemaps)
    // In our experience, they generally work as expected,
    // just be aware of this issue when enabling this option.
    cssSourceMap: false
  }
}
