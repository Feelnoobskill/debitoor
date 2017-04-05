'use strict';

const controller = {

    /**
     * Handler for GET /api/countries
     */
    findCountries: (request, response, next) => {
        controller._dataAccessObject.findCountries()
        .then((result) => {
            response.status(200).json(result);
        })
        .catch(next);
    }
};

controller._dataAccessObject = require('../data/DataAccessObject');

module.exports = controller;