'use strict';

const controller = {
    /**
     * Handler for GET /api/users
     */
    findUsers: (request, response, next) => {
        controller._dataAccessObject.findUsers()
        .then((result) => {
            response.status(200).json(result);
        })
        .catch(next);
    },

    /**
     * Handler for GET /api/users/{userId}
     */
    findUserById: (request, response, next) => {
        const userId = request.swagger.params.userId.value;

        controller._dataAccessObject.findUserById(userId)
        .then((result) => {
            response.status(200).json(result);
        })
        .catch(next);
    }
};

controller._dataAccessObject = require('../data/DataAccessObject');

module.exports = controller;