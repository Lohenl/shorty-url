const moment = require('moment');
const { createLogger } = require('../../utils/logger');
const ShortyUrl = require('../../data/models/ShortyUrl');
const shortyConfig = require('../../../cfg/shorty-configs.json');

const logger = createLogger('creator-controller');

// creates a short url based on longurl provided
function createShortUrl(longUrl) {
  // TODO: short url creation
  // reference: https://www.youtube.com/watch?v=JQDHz72OA3c&ab_channel=TechDummiesNarendraL
  return longUrl;
}

// creates a short url using the long url provided
async function createUrl(req, res) {
  try {
    const longUrl = req.body.longurl;
    logger.info(`createShortUrl() - url: ${longUrl}`);

    // define new entry
    const newUrl = new ShortyUrl({
      shortUrl: createShortUrl(longUrl),
      longUrl,
      expiresAt: moment(Date.now).add(shortyConfig.shortUrlDefaultTTLInSeconds, 's').toDate(),
    });

    // save to repo
    newUrl
      .save()
      .then((doc) => { logger.info(doc); })
      .catch((error) => { logger.error(error); });
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
