const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./api/routes/index');
const creatorRouter = require('./api/routes/creator');

const app = express();

// consider making use of morgan for once
// https://stackoverflow.com/questions/27906551/node-js-logging-use-morgan-and-winston

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', indexRouter);
app.use('/creator', creatorRouter);

module.exports = app;
