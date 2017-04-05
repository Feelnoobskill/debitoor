'use strict';

const Models = require('./Models');
const _ = require('lodash');

const Errors = require('../helpers/errors');

/**
 * Find all users
 */
function findUsers() {
    return Promise.resolve(Models.users);
}

/**
 * Find user by id
 */
function findUserById(id) {
    const user = _.find(Models.users, {id: id});

    // return 404 error if user not found
    if (! user) {
        return Promise.reject(new Errors.UserNotFound());
    }

    return Promise.resolve(user);
}

/**
 * Find all customers
 */
function findCustomers() {
    return Promise.resolve(Models.customers);
}

/**
 * Find customer by id
 */
function findCustomerById(id) {
    const customer = _.find(Models.customers, {id: id});

    // return 404 error if customer not found
    if (! customer) {
        return Promise.reject(new Errors.CustomerNotFound());
    }

    return Promise.resolve(customer);
}

/**
 * Find all countries
 */
function findCountries() {
    return Promise.resolve(Models.countries);
}

exports = module.exports = {
    findUsers: findUsers,
    findUserById: findUserById,
    findCustomers: findCustomers,
    findCustomerById: findCustomerById,
    findCountries: findCountries
};