const CracoAntDesignPlugin = require("craco-antd")

module.exports = {
  devServer: {
    port: 3001,
    proxy: {
      "/api": {
        target: "https://kashiwasato.com",
        changeOrigin: true,
        pathRewrite: {
          "^/api": "",
        },
      },
    },
  },
  plugins: [
    {
      plugin: CracoAntDesignPlugin,
    },
  ],
  resolve: {
    fallback: {},
  },
}
