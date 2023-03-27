const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
devServer: {
  proxy: {
    // '/users': {
    //   target: 'http://localhost:8082',
    //   changeOrigin: true,
    //   logLevel: 'debug',
    //   },

      '/resumes': {
        target: 'http://localhost:8082',
        changeOrigin: true,
        logLevel: 'debug',
        }
    
    }
  }
})

// module.exports = {
//   devServer: {
//     proxy: "http://localhost:8082"
//   }
// }

// devServer: {
//   proxy: {
//     '/users': {
//       target: 'http://localhost:8082'
//     }
//   }
// }