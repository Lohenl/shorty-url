const mongoose = require('mongoose');
const { createLogger } = require('../../utils/logger');

const logger = createLogger('mongoose-client');

const url = `mongodb://${process.env.MONGODB_URL}:${process.env.MONGODB_PORT}/${process.env.MONGODB_COLLECTION_NAME}`;

mongoose.connect(url, { useNewUrlParser: true });
const db = mongoose.connection;
db.once('open', () => {
  logger.info('Database connected:', url);
});

db.on('error', (err) => {
  logger.error('Connection error:', err);
});

module.exports = mongoose;
