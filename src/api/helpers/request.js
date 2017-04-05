'use strict';

const superAgent = require('superagent');

class Request {
    constructor() {
        this.agent = superAgent;
        this.headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        };
    }

    _handleResponse(resource, resolve) {
        return (err, res) => {
            const result = {
                key: resource
            };
            if (err) {
                result.error = err;
            }
            result.data = res.body;

            return resolve(result);
        };
    }

    _request(method, url) {
        return this.agent[method](url || this.baseUrl).set(this.headers);
    }

    sendGetRequest(url, resource) {
        return new Promise((resolve) => {
            this._request('get', url)
                .end(this._handleResponse(resource, resolve));
        })
    }
}

exports = module.exports = new Request();
