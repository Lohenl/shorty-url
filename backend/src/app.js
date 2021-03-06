const express = require('express');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');
const morganLogger = require('morgan');
const { createLogger } = require('./utils/logger');

const indexRouter = require('./api/routes/index');
const creatorRouter = require('./api/routes/creator');

const logger = createLogger('app');
const app = express();

// consider making use of morgan for once
// https://stackoverflow.com/questions/27906551/node-js-logging-use-morgan-and-winston

logger.info('Starting Shorty Backend');

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*'); // not great for prod lol
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use(morganLogger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(helmet());

logger.info('Middleware ready');

app.use('/', indexRouter);
app.use('/creator', creatorRouter);

logger.info('Shorty Backend is ready');

module.exports = app;
