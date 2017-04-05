'use strict';

const cors = require('cors');
const SwaggerExpressMiddleware = require('swagger-express-mw');
const SwaggerUIMiddleware = require('swagger-ui-middleware');
const configuration = require('config');
const CustomMiddleware = require('./api/modules').Middleware.init(configuration.middleware);
const port = process.env.PORT || configuration.app.port;

const config = {
    appRoot: './src' // required config
};

const app = require('express')();

app.use(cors());

SwaggerUIMiddleware.hostUI(app, {
    path: configuration.app.swaggerUiPath,
    overrides: require('path').join(__dirname, configuration.app.swaggerJsonPath)
});

// all routes are handled by src/api/swagger/swagger.yaml
SwaggerExpressMiddleware.create(config, (err, swaggerExpress) => {
    if (err) {
        throw err;
    }
    swaggerExpress.register(app);
app.use(CustomMiddleware.ErrorLoggingMiddleware);
});

app.listen(port, () => {});

// for testing
module.exports = app;