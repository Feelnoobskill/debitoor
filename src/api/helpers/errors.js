'use strict';
const errors = require('../modules').Errors.errors;

const ErrorDefinitions = [
    {
        name: 'UserNotFound',
        defaultMessage: 'User not found',
        defaultExplanation: 'User with such ID wasn\'t found',
        defaultResponse: 'Please verify user identifier.'
    },
    {
        name: 'CustomerNotFound',
        defaultMessage: 'Customer not found',
        defaultExplanation: 'Customer with such ID wasn\'t found',
        defaultResponse: 'Please verify customer identifier.'
    }
];

ErrorDefinitions.forEach((element) => {
    errors.create(element);
});

errors
    .mapper('UserNotFound', (err) => {
        return new errors.Http404Error(err.message, err.explanation, err.response);
    })
    .mapper('CustomerNotFound', (err) => {
        return new errors.Http404Error(err.message, err.explanation, err.response);
    });

exports = module.exports = errors;
