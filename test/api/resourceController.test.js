/* global it, describe, before */

'use strict';

const should  = require('should');
const request = require('supertest');
const server  = require('../../src/app');

describe('resource controller', () => {

    describe('GET /api/resources', () => {
        it('should return users and countries', (done) => {

            request(server)
                .get('/api/resources?users=api/users&countries=api/countries')
                .set('Accept', 'application/json')
                .expect('Content-Type', /json/)
                .expect(200)
                .end((err, res) => {
                    should.not.exist(err);

                    const result = res.body;

                    result.should.have.property('users').lengthOf(3);
                    result.should.have.property('countries').lengthOf(15);

                    done(err);
                });
        });

        it('should return user by id and customer by id', (done) => {
            request(server)
                .get('/api/resources?users=api/users/1&customers=api/customers/202')
                .set('Accept', 'application/json')
                .expect('Content-Type', /json/)
                .expect(200)
                .end((err, res) => {
                    should.not.exist(err);

                    const result = res.body;

                    result.should.have.property('users');

                    result.users.should.have.property('id').eql(1);
                    result.users.should.have.property('first_name').eql('Andrey');
                    result.users.should.have.property('last_name').eql('Melnik');
                    result.users.should.have.property('city').eql('Kiev');

                    result.should.have.property('customers');

                    result.customers.should.have.property('id').eql(202);
                    result.customers.should.have.property('first_name').eql('Josephine');
                    result.customers.should.have.property('last_name').eql('Darakjy');
                    result.customers.should.have.property('address');
                    result.customers.address.should.have.property('street').eql('4 B Blue Ridge Blvd');
                    result.customers.address.should.have.property('city').eql('Brighton');
                    result.customers.address.should.have.property('state').eql('MI');
                    result.customers.address.should.have.property('zip').eql('48116');

                    done(err);
                });
        });

        it('should return user key with 404 error, because user not found', (done) => {
            request(server)
                .get('/api/resources?user=api/users/666')
                .set('Accept', 'application/json')
                .expect('Content-Type', /json/)
                .expect(200)
                .end((err, res) => {
                    should.not.exist(err);

                    const result = res.body;

                    result.should.have.property('user');

                    result.user.should.not.have.property('id');
                    result.user.should.not.have.property('first_name');
                    result.user.should.not.have.property('last_name');
                    result.user.should.not.have.property('city');

                    result.user.should.have.property('status').eql(404);

                    done(err);
                })
        });

        it('should return customer key with 404 error, because customer not found', (done) => {
            request(server)
                .get('/api/resources?customer=api/customers/1')
                .set('Accept', 'application/json')
                .expect('Content-Type', /json/)
                .expect(200)
                .end((err, res) => {
                    should.not.exist(err);

                    const result = res.body;

                    result.should.have.property('customer');

                    result.customer.should.not.have.property('id');
                    result.customer.should.not.have.property('first_name');
                    result.customer.should.not.have.property('last_name');
                    result.customer.should.not.have.property('address');

                    result.customer.should.have.property('status').eql(404);

                    done(err);
                })
        });

        it('should return resource key with 404 error, because resource url not found', (done) => {
            request(server)
                .get('/api/resources?resource=api/not/found/resource')
                .set('Accept', 'application/json')
                .expect('Content-Type', /json/)
                .expect(200)
                .end((err, res) => {
                    should.not.exist(err);

                    const result = res.body;

                    result.should.have.property('resource');

                    result.resource.should.have.property('status').eql(404);

                    done(err);
                })
        })

    });

});