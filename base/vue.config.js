module.exports = {
  chainWebpack: config => {
    config.module
      .rule('less')
      .oneOf('vue-modules')
        .use('less-loader')
          .loader('less-loader')
          .tap(options => {
            options.javascriptEnabled = true
            return options
          })
          .end()
        .end()
      .oneOf('vue')
        .use('less-loader')
          .loader('less-loader')
          .tap(options => {
            options.javascriptEnabled = true
            return options
          })
          .end()
        .end()
      .oneOf('normal-modules')
        .use('less-loader')
          .loader('less-loader')
          .tap(options => {
            options.javascriptEnabled = true
            return options
          })
          .end()
        .end()
      .oneOf('normal')
        .use('less-loader')
          .loader('less-loader')
          .tap(options => {
            options.javascriptEnabled = true
            return options
          })
          .end()
        .end()
  }
}
