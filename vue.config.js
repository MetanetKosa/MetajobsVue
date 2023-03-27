const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true,
    lintOnSave: false
})

module.exports = {
    devServer: {
        proxy: 'http://localhost:8082' // Spring boot의 주소 및 포트
    }
}