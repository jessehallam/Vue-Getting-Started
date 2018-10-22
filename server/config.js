module.exports = {
    HTTP_PORT: parseInt(process.env.HTTP_PORT) || 8099,
    SECRET: process.env.APP_SECRET || 'keyboard cat'
}