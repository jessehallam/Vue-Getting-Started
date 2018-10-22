const path = require('path');
const session = require('express-session');
const FileStore = require('session-file-store')(session);

const config = require('../config');

const noop = () => {};

module.exports = session({
    resave: true,
    saveUninitialized: true,
    secret: config.SECRET,
    store: new FileStore({
        logFn: process.env.NODE_ENV === 'development' ? console.log : noop,
        path: path.resolve(__dirname, '../../.session'),
        ttl: 60 * 60 * 24 /* one day */
    })
});