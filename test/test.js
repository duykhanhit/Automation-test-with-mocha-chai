const mocha = require("mocha")
const chai = require("chai")
const chaiHttp = require("chai-http")
// const chaiSinon = require("cha")

const server = require("../app")

const should = chai.should();
const { assert, expect } = chai;

chai.use(chaiHttp);

const User = require("../models/User");

describe('Starting to test...', () => {
  context('Test API create user', () => {

    // beforeEach(async () => {
    //   await User.deleteMany()
    // });

    // afterEach(async () => {
    //   await User.deleteMany()
    // });

    // Test get all user
    it('/GET all user', (done) => {
      chai.request(server)
        .get('/api/user')
        .end((err, res) => {
          should.not.exist(err);
          should.exist(res);

          // Verify response type input
          res.should.be.an('object')
        })
      done();
    })

    // Test create a new user
    it('/POST create a new user', (done) => {
      chai.request(server)
        .post('/api/user')
        // .set('Cookie', 'demo')   // set header (example: content-type, cache-control, X-Powered-By, ...)
        // .set('Content-Type', 'application/json')
        .send({
          Fname: "Hoang",
          Lname: "Khanh",
          age: 8,
          bio: "Intern nodejs",
          address: "Hai Phong",
          skill: ['HTML', 'CSS', 'JS']
        })
        .end((err, res) => {
          should.not.exist(err)
          should.exist(res)

          // Verify response status
          res.should.have.status(201)

          // Verify response header
          expect(res).to.have.header('Content-Type', 'application/json; charset=utf-8')
          expect(res).to.have.header('X-Powered-By', 'Express')

          // Verify response type input
          res.should.be.an('object')
          res.body.should.have.property('data').be.an('object')
          res.body.data.should.have.property('Fname').be.a('string')
          res.body.data.should.have.property('Lname').be.a('string')
          res.body.data.should.have.property('age').be.a('number')
          res.body.data.should.have.property('bio').be.a('string')
          res.body.data.should.have.property('address').be.a('string')
          res.body.data.should.have.property('skill').be.an('array')
        })

      done();
    })

    // Test create new user error
    it('/POST create new user with error', (done) => {
      chai.request(server)
        .post('/api/user')
        .send({
          Fname: null,
          Lname: "Khanh",
          age: 8,
          bio: "Intern nodejs",
          address: "Hai Phong",
          skill: ['HTML', 'CSS', 'JS']
        })
        .end((err, res) => {
          should.not.exist(err)
          should.exist(res)

          res.should.be.an('object')
          res.should.have.status(400)
          res.body.should.have.property("data").equal("user validation failed: Fname: Path `Fname` is required.")

        })

      done();
    })

  })
})