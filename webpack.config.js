module.exports = {
module: {
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue'
      }, 
      {
          test: /\.s[a|c]ss$/,
          loader: 'style!css!sass'
      }
    ]
},
vue: {
    loaders: {
      scss: 'style!css!sass'
    }
},
devServer: {
    host: '*', 
    port: 8080,
    contentBase: [path.join(__dirname, 'public'), path.join(__dirname, 'src'), path.join(__dirname, 'src/views')],
    historyApiFallback: true,
  }, 
}
