module.exports = {
  devServer: {
    disableHostCheck: true,
    port: 9000,
    hotOnly: true,
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
  },
};
