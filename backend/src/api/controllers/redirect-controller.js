const { createLogger } = require('../../utils/logger');

const logger = createLogger('redirect-controller');

// retrieves long url based on short url provided
async function performRedirect(req, res) {
  try {
    const { url } = req.params;
    logger.info(`getLongUrl() - url: ${url}`);
    // TODO: retrieval here
    res.redirect('http://shortyexample.com');
  } catch (error) {
    // TODO: error handling here
    res.status(500).send(error.message);
  }
}

module.exports = {
  performRedirect,
};
