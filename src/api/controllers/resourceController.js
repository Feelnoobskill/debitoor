'use strict';

const Request = require('../helpers/request');
const _ = require('lodash');

const controller = {
    /**
     * Handler for GET /api/resources
     */
    findResources: (request, response, next) => {
        const resources = request.query;

        const resourcePromises = [];
        const responseObject = {};

        _.forEach(resources, (uri, resource) => {
            const url = `${request.headers.host}/${uri}`;
            resourcePromises.push(Request.sendGetRequest(url, resource));
        });

        return Promise.all(resourcePromises)
        .then((result) => {
            result.map((item) => {
                responseObject[item.key] = item.error || item.data;
            });

            return response.status(200).json(responseObject);
        })
        .catch(next);
    }
};

module.exports = controller;