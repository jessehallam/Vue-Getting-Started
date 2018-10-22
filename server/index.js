const express = require('express');
const app = express();

const config = require('./config');

require('./hot')(app);
require('./middlewares')(app);

app.listen(config.HTTP_PORT, () => console.log(`Now listening on port ${config.HTTP_PORT}.`));