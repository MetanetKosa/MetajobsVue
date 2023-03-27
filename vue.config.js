const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  devServer: {
    proxy: {
      // '/posts' :{
      //   target: "http://localhost:8082",
      //   changeOrigin: true,
      //   logLevel: 'debug',
      // }
      '/postInsert' :{
        target: "http://localhost:8082",
        changeOrigin: true,
        logLevel: 'debug',
      }
    }
    
  }
})

// module.exports = {
  
// }