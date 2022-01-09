/* eslint-disable no-unused-expressions */
/* eslint-disable import/no-unresolved */
const nock = require('nock');
const { expect } = require('chai');
const chai = require('chai');
const chaiHttp = require('chai-http');
const { app } = require('../index.test');

chai.use(chaiHttp);

// mock redirect site
nock('http://shortyexample.com')
  .get('/')
  .reply(200, 'Successful Redirection');

describe('api/redirect.test.js', () => {
  describe('#performRedirect(req, res)', () => {
    let shortUrl;

    it('should create a short url', () => chai.request(app)
      .post('/creator/url')
      .type('form')
      .send({
        longurl: 'http://shortyexample.com',
      })
      .then((res) => {
        shortUrl = res.body.shortUrl;
        expect(res).to.have.status(200);
      }));

    it('should be redirected to http://shortyexample.com', () => chai.request(app)
      .get(`/${shortUrl}`)
      .then((res) => {
        expect(res).to.have.status(200);
      }));
  });
});
