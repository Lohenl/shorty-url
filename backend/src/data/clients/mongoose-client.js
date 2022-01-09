const mongoose = require('mongoose');
const { createLogger } = require('../../utils/logger');

const logger = createLogger('mongoose-client');

if (!process.env.IS_LOCAL_TEST && process.env.IS_LOCAL_TEST !== 'true') {
  const url = process.env.MONGODB_URL;

  mongoose.connect(url, { useNewUrlParser: true });
  const db = mongoose.connection;
  db.once('open', () => {
    logger.info('Database connected:', url);
  });

  db.on('error', (err) => {
    logger.error('Connection error:', err);
  });
} else if (!process.env.MONGO_PROD && process.env.IS_LOCAL_TEST !== 'true') {
  const url = process.env.MONGODB_URL;

  mongoose.connect(url, { 
    useNewUrlParser: true,
    username: process.env.MONGO_USER,
    password: process.env.MONGO_PASSWORD,
  });
}
module.exports = mongoose;
