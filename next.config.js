const withPlugins = require('next-compose-plugins');
const withCSS = require("@zeit/next-css")
const isProd = process.env.NODE.ENV === 'production'

module.exports = withPlugins([
    [withCSS, {
        cssLoaderOptions: {
            url: true
        }
    }],
    [{assetPrefix: isProd ? '.' : ''}]
])