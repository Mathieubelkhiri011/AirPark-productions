module.exports = {
    devServer: {
        headers: { "Cache-Control": "no-cache, no-store, must-revalidate" },
        port: 8080,
    },
    publicPath: import.meta.env.MODE === 'production'
        ? '/AirPark-productions/'
        : '/',
    pwa: {
        name: 'AirPark-productions',
        themeColor: '#4e73df',
    },

};
