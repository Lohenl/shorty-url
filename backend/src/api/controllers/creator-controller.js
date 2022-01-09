const { createLogger } = require('../../utils/logger');

const logger = createLogger('creator-controller');

// creates a short url using the long url provided
async function createUrl(req, res) {
  try {
    const longUrl = req.body.longurl;
    logger.info(`createShortUrl() - url: ${longUrl}`);
    // TODO: create here
  } catch (error) {
    logger.error('Error creating short url: ', error);
    res.status(500).send(error.message);
  }
}

// gets metadata for url
async function getUrlDetails(isShort, req, res) {
  try {
    const url = decodeURI(req.params.url);
    logger.info(`getUrlDetails() - url: ${url}, isShort: ${isShort}`);
    // TODO: read here
  } catch (error) {
    logger.error('Error fetching details: ', error);
    res.status(500).send(error.message);
  }
}

// updates url metadata
async function updateUrl(isShort, req, res) {
  try {
    const url = decodeURI(req.params.url);
    logger.info(`updateUrl() - url: ${url}, isShort: ${isShort}`);
    // TODO: update here
    // WISHLIST: Might wanna do some logics?
  } catch (error) {
    logger.error('Error updating url: ', error);
    res.status(500).send(error.message);
  }
}

// deletes url
async function deleteUrl(isShort, req, res) {
  try {
    const url = decodeURI(req.params.url);
    logger.info(`updateUrl() - url: ${url}, isShort: ${isShort}`);
    // TODO: delete here
  } catch (error) {
    logger.error('Error deleting url: ', error);
    res.status(500).send(error.message);
  }
}

module.exports = {
  createUrl,
  getUrlDetails,
  updateUrl,
  deleteUrl,
};
