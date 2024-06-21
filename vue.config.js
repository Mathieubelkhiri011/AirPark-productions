module.exports = {
    devServer: {
        headers: { "Cache-Control": "no-cache, no-store, must-revalidate" },
        port: 8080,
    },
    publicPath: process.env.NODE_ENV === 'production'
        ? '/AirPark-productions/'
        : '/',
    pwa: {
        name: 'AirPark-productions',
        themeColor: '#4e73df',
    },

};
