/* global it, describe, before */

'use strict';

const should  = require('should');
const request = require('supertest');
const server  = require('../../src/app');

describe('country controller', () => {

    describe('GET /api/countries', () => {
        it('should return all countries', (done) => {
            request(server)
                .get('/api/countries')
                .set('Accept', 'application/json')
                .expect('Content-Type', /json/)
                .expect(200)
                .end((err, res) => {
                    should.not.exist(err);

                    const countries = res.body;
                    countries.should.have.lengthOf(15);

                    countries.map((country) => {
                        testCountryObject(country);
                    });

                    done(err);
                });
        });
    });

});

function testCountryObject(country) {
    country.should.have.property('name');
    country.should.have.property('code');
}