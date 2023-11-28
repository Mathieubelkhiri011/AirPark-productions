module.exports = {
    devServer: {
        headers: { "Cache-Control": "no-cache, no-store, must-revalidate" },
        port: 8080,
    },
    publicPath: '/',
    pwa: {
        name: 'AirPark-productions',
        themeColor: '#4e73df',
    },
};
