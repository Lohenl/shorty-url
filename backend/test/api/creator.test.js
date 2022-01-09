/* eslint-disable no-unused-expressions */
/* eslint-disable import/no-unresolved */
const { expect } = require('chai');
const chai = require('chai');
const chaiHttp = require('chai-http');
const { app } = require('../index.test');

chai.use(chaiHttp);

describe('api/creator.test.js', () => {
  describe('#createUrl(req, res)', () => {
    it('should return HTTP 200', () => chai.request(app)
      .post('/creator/url')
      .type('form')
      .send({
        longurl: 'http://shortyexample.com',
      })
      .then((res) => {
        expect(res).to.have.status(200);
      }));
  });
});
