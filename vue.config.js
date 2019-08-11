module.exports = {
  devServer: {
    disableHostCheck: true,
    port: 9000,
    hotOnly: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
      'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization',
      'Accept-Youtube-API-Version': 'v3'
    },
  },
};
