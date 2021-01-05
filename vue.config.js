module.exports = {
  lintOnSave: false,
  css: {
    loaderOptions: {
      sass: {
        prependData: '@import "@/styles/main.scss"'
      },
      scss: {
        prependData: '@import "@/styles/main.scss";'
      }
    }
  },
  publicPath: process.env.NODE_ENV === 'production'
  ? '/police-system/'
  : '/'
}
