/* eslint-disable no-unused-expressions */
/* eslint-disable import/no-unresolved */

// load environment variables before starting app
const path = require('path');

const dotenvPath = path.resolve('./env/test.env');
require('dotenv').config({ path: dotenvPath });

// ref: https://www.npmjs.com/package/mock-mongoose
const { MockMongoose } = require('mock-mongoose');
const mongoose = require('../src/data/clients/mongoose-client');

const mockMongoose = new MockMongoose(mongoose);

before((done) => {
  mockMongoose.prepareStorage().then(() => {
    mongoose.connect('mongodb://example.com/TestingDB', (err) => {
      done(err);
    });
  });
});

// once loaded, load app for test env
const app = require('../src/app');

module.exports = {
  app,
  mockMongoose,
};
