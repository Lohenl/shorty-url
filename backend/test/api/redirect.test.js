/* eslint-disable no-unused-expressions */
/* eslint-disable import/no-unresolved */
const nock = require('nock');
const { expect } = require('chai');
const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../../src/app');

chai.use(chaiHttp);

// mock redirect site
nock('http://shortyexample.com')
  .get('/')
  .reply(200, 'Successful Redirection');

describe('api/redirect.test.js', () => {
  describe('#performRedirect(res, res, next)', () => {
    it('should be redirected to http://shortyexample.com', () => chai.request(app)
    // data seed: "sdflkjns123:'http://shortyexample.com'"
      .get('/sdflkjns123')
      .then((res) => {
        expect(res).to.have.status(200);
      }));
  });
});
