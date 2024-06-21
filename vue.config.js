module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/AirPark-productions/'
    : '/',
  devServer: {
      historyApiFallback: {
        rewrites: [
          { from: /^\/AirPark-productions\/home/, to: '/AirPark-productions/index.html' },
        ],
      },
    },
  pwa: {
    name: 'AirPark-productions',
    themeColor: '#4e73df',
  },
};
