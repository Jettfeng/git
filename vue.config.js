const path = require("path");
module.exports = {
  runtimeCompiler: true, 
  pluginOptions: {
    "style-resources-loader": {
      preProcessor: "less"
    }
  }
  // 修改的配置
  // 将baseUrl: '/api',改为baseUrl: '/',
  // baseUrl: '/',
 
}
