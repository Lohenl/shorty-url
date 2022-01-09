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
}
module.exports = mongoose;
