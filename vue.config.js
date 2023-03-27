const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  devServer: {
    proxy: {
      '/users': {
        target: 'http://localhost:8082'
      }
    }
  }
})

// spring boot 연결
// module.exports = {
//   devServer: {
//     proxy: 'http://localhost:8082'
//   }
// }