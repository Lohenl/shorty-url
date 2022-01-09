const { nanoid } = require('nanoid');
const { createLogger } = require('../../utils/logger');
const ShortyUrl = require('../../data/models/ShortyUrl');
const shortyConfig = require('../../../cfg/shorty-configs.json');

const logger = createLogger('creator-controller');

// creates a short url using the long url provided
async function createUrl(req, res) {
  try {
    const longUrl = req.body.longurl;
    logger.info(`createUrl() - url: ${longUrl}`);

    // define new entry
    const newUrl = new ShortyUrl({
      shortUrl: nanoid(shortyConfig.shortUrlNoOfChars),
      longUrl,
    });

    logger.info(`Object created, shorturl: ${newUrl.shortUrl}`);

    // save to repo
    logger.info('Saving to db');
    newUrl
      .save()
      .then((doc) => {
        logger.info(`Saved to db: ${JSON.stringify(doc)}`);
        res.status(200).send(newUrl.shortUrl);
      });
  } catch (error) {
    logger.error('Error creating short url: ', error);
    res.status(500).send(error.message);
  }
}

// gets metadata for url (more useful for TTL / owner functions / full CRUD)
// async function getUrlDetails(isShort, req, res) {
//   try {
//     const url = decodeURI(req.params.url);
//     logger.info(`getUrlDetails() - url: ${url}, isShort: ${isShort}`);
//     // TODO: read here
//   } catch (error) {
//     logger.error('Error fetching details: ', error);
//     res.status(500).send(error.message);
//   }
// }

// updates url metadata (more useful for TTL / owner functions / full CRUD)
// async function updateUrl(isShort, req, res) {
//   try {
//     const url = decodeURI(req.params.url);
//     logger.info(`updateUrl() - url: ${url}, isShort: ${isShort}`);
//     // TODO: update here
//     // WISHLIST: Might wanna do some logics?
//   } catch (error) {
//     logger.error('Error updating url: ', error);
//     res.status(500).send(error.message);
//   }
// }

// deletes url (more useful for TTL / owner functions / full CRUD)
// async function deleteUrl(isShort, req, res) {
//   try {
//     const url = decodeURI(req.params.url);
//     logger.info(`updateUrl() - url: ${url}, isShort: ${isShort}`);
//     // TODO: delete here
//   } catch (error) {
//     logger.error('Error deleting url: ', error);
//     res.status(500).send(error.message);
//   }
// }

module.exports = {
  createUrl,
  // getUrlDetails,
  // updateUrl,
  // deleteUrl,
};
