const path = require('path');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

if (process.env.NODE_ENV !== 'development') {
    module.exports = function () {};
} else {
    const webpackConfigFile = path.resolve(__dirname, '../webpack/webpack.config.js');
    const config = require(webpackConfigFile);
    const compiler = webpack(config);

    module.exports = function (app) {
        app.use(webpackDevMiddleware(compiler, {
            noInfo: true,
            publicPath: config.output.publicPath
        }));

        app.use(webpackHotMiddleware(compiler, {
        }));
    };
}