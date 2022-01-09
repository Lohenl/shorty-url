const { createLogger } = require('../../utils/logger');
const ShortyUrl = require('../../data/models/ShortyUrl');

const logger = createLogger('redirect-controller');

// retrieves long url based on short url provided
async function performRedirect(req, res) {
  try {
    const { url } = req.params;
    logger.info(`getLongUrl() - url: ${url}`);

    // perform retrieval
    ShortyUrl.findOne({ shortUrl: url })
      .then((doc) => {
        logger.info(`Result: ${JSON.stringify(doc)}`);
        res.redirect(doc.longUrl);
      })
      .catch((err) => {
        logger.error(`Error encountered getting from db, url:${url} error: ${err}`);
        throw err;
      });
  } catch (error) {
    // TODO: error handling here
    res.status(500).send(error.message);
  }
}

module.exports = {
  performRedirect,
};
