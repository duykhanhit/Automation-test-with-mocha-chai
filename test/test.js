const assert = require("assert")
const { should } = require("chai")
const chai = require("chai")
const chaiHttp = require('chai-http')
chai.use(chaiHttp);
const server = require("../app")
const User = require('../models/User')

describe('Starting to test...', () => {
  context('Test API user', () => {

    beforeEach(async (done) => {
      await User.deleteOne()
      done()
    });

    // Test get all user
    it('/GET all user', (done) => {
      chai.request(server)
        .get('/api/user')
        .end((err, res) => {
          should().exist(res)
          res.should.have.status(200);
          res.body.should.be.a('object');
          done();
        })
    })
  })
})