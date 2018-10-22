const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const express = require('express');
const history = require('connect-history-api-fallback');
const passport = require('passport');
const path = require('path');

const config = require('../config');

const wwwroot = path.resolve(__dirname, '../../wwwroot');

module.exports = function (app) {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(cookieParser(config.SECRET));
    app.use(require('./session'));
    app.use(passport.initialize());
    app.use(passport.session());
    require('./passport');

    app.use(history({ index: '/dist/index.html' }))
    app.use(express.static(wwwroot));
}