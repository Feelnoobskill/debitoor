'use strict';

const controller = {
    /**
     * Handler for GET /api/customers
     */
    findCustomers: (request, response, next) => {
        controller._dataAccessObject.findCustomers()
        .then((result) => {
            response.status(200).json(result);
        })
        .catch(next);
    },

    /**
     * Handler for GET /api/customers/{customerId}
     */
    findCustomerById: (request, response, next) => {
        const customerId = request.swagger.params.customerId.value;

        controller._dataAccessObject.findCustomerById(customerId)
        .then((result) => {
            response.status(200).json(result);
        })
        .catch(next);
    }
};

controller._dataAccessObject = require('../data/DataAccessObject');

module.exports = controller;