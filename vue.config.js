module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/' : '/',
  devServer: {
    headers: { "Cache-Control": "no-cache, no-store, must-revalidate" },
    port: 8080,
    historyApiFallback: true,
  },
  pwa: {
    name: 'AirPark-productions',
    themeColor: '#4e73df',
  },
};
