const winston = require('winston');

let logFormat;

if (process.env.IS_DEV === 'true') {
  logFormat = winston.format.combine(
    winston.format.colorize(),
    winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    winston.format.simple(),
  );
} else {
  logFormat = winston.format.combine(
    winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    winston.format.simple(),
  );
}

function createLogger(location) {
  const logger = winston.createLogger({
    level: process.env.LOGGING_LEVEL,
    format: winston.format.combine(
      winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
      winston.format.json(),
    ),
    defaultMeta: { location },
  });

  logger.add(
    new winston.transports.Console({
      format: logFormat,
    }),
  );

  return logger;
}

module.exports = {
  createLogger,
};
