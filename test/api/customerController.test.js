/* global it, describe, before */

'use strict';

const should  = require('should');
const request = require('supertest');
const server  = require('../../src/app');

describe('customer controller', () => {

    describe('GET /api/customers', () => {
        it('should return all customers', (done) => {
            request(server)
                .get('/api/customers')
                .set('Accept', 'application/json')
                .expect('Content-Type', /json/)
                .expect(200)
                .end((err, res) => {
                    should.not.exist(err);

                    const customers = res.body;

                    customers.should.have.lengthOf(3);
                    testCustomerObject(customers[0]);
                    testCustomerObject(customers[1]);
                    testCustomerObject(customers[2]);
                    done(err);
                });
        });
    });

    describe('GET /api/customers/{customerId}', () => {
        it('should return customer by id', (done) => {
            request(server)
                .get('/api/customers/203')
                .set('Accept', 'application/json')
                .expect('Content-Type', /json/)
                .expect(200)
                .end((err, res) => {
                    should.not.exist(err);

                    const customer = res.body;

                    testCustomerObject(customer);
                    customer.id.should.eql(203);
                    customer.first_name.should.eql('Art');
                    customer.last_name.should.eql('Chemel');
                    customer.address.street.should.eql('8 W Cerritos Ave #54');
                    customer.address.city.should.eql('Bridgeport');
                    customer.address.state.should.eql('NJ');
                    customer.address.zip.should.eql('08014');

                    done(err);
                });
        });

        it('should return 404 when customer not found', (done) => {
            request(server)
                .get('/api/customers/666')
                .set('Accept', 'application/json')
                .expect('Content-Type', /json/)
                .expect(404)
                .end((err, res) => {
                    should.not.exist(err);
                    res.body.should.have.property('message').eql('Customer not found');
                    done(err);
                });
        })
    })

});

function testCustomerObject(customer) {
    customer.should.have.property('id');
    customer.should.have.property('first_name');
    customer.should.have.property('last_name');
    customer.should.have.property('address');
    customer.address.should.have.property('city');
    customer.address.should.have.property('state');
    customer.address.should.have.property('zip');
}