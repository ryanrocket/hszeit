module.exports = {
  devServer: {
    disableHostCheck: true,
    port: 9000,
    hotOnly: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'X-Frame-Options': 'SAMEORIGIN',
      'X-XSS-Protection': '1; mode=block',
      'Vary': 'Accept-Encoding'
    },
  },
};
