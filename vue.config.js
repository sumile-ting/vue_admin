module.exports = {
    //关闭scokjs-node报错
    devServer: {
        sockHost: 'http://127.0.0.1:8085/',
        port: 8085,     // 端口
        disableHostCheck: true,
        // proxy: {
        //     '/dgscgl': {
        //         //target: 'http://192.168.0.52:7071',
        //         target: 'http://127.0.0.1:7071',
        //         ws: true,
        //         changeOrigin: true,
        //         // pathRewrite: {
        //         //   '^/api': '/dgscgl'  //通过pathRewrite重写地址，将前缀/api转为/
        //         // }
        //     }
        // }
    },
    //lintOnSave: false   // 取消 eslint 验证
}
