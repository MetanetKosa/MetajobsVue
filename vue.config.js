const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false
})

// spring boot 연결
// module.exports = {
//   devServer: {
//     proxy: 'http://localhost:8082'
//   }
// }