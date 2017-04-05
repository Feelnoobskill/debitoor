/* global it, describe, before */

'use strict';

const should  = require('should');
const request = require('supertest');
const server  = require('../../src/app');

describe('users controller', () => {

    describe('GET /api/users', () => {

        it('should return all users', (done) => {
            request(server)
                .get('/api/users')
                .set('Accept', 'application/json')
                .expect('Content-Type', /json/)
                .expect(200)
                .end((err, res) => {
                    should.not.exist(err);

                    const users = res.body;

                    users.should.have.lengthOf(3);
                    testUserObject(users[0]);
                    testUserObject(users[1]);
                    testUserObject(users[2]);
                    done(err);
                });
        });

    });

    describe('GET /api/users/{userId}', () => {

        it('should return user by id', (done) => {
            request(server)
                .get('/api/users/1')
                .set('Accept', 'application/json')
                .expect('Content-Type', /json/)
                .expect(200)
                .end((err, res) => {
                    should.not.exist(err);

                    const user = res.body;

                    testUserObject(user);
                    user.id.should.eql(1);
                    user.first_name.should.eql('Andrey');
                    user.last_name.should.eql('Melnik');
                    user.city.should.eql('Kiev');

                    done(err);
                });
        });

        it('should return 404 when user not found', (done) => {
            request(server)
                .get('/api/users/666')
                .set('Accept', 'application/json')
                .expect('Content-Type', /json/)
                .expect(404)
                .end((err, res) => {
                    should.not.exist(err);
                    res.body.should.have.property('message').eql('User not found');
                    done(err);
                });
        })

    })

});

function testUserObject(user) {
    user.should.have.property('id');
    user.should.have.property('first_name');
    user.should.have.property('last_name');
    user.should.have.property('city');
}

