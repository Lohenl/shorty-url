const express = require('express');

const router = express.Router();
const controller = require('../controllers/creator-controller');

/* create new shortened url */

router.post('/url/', controller.createUrl);

/* get details by urlencoded long/short url (more useful for TTL / owner functions / full CRUD) */

// router.get('/url/long/:url', (req, res) => {
//   controller.getUrlDetails(false, req, res);
// });

// router.get('/url/short/:url', (req, res) => {
//   controller.getUrlDetails(true, req, res);
// });

/* update by urlencoded long/short url (more useful for TTL / owner functions / full CRUD) */

// router.put('/url/long/:url', (req, res) => {
//   controller.updateUrl(true, req, res);
// });

// router.put('/url/short/:url', (req, res) => {
//   controller.updateUrl(true, req, res);
// });

/* delete by urlencoded long/short url (more useful for TTL / owner functions / full CRUD) */

// router.delete('/url/long/:url', (req, res) => {
//   controller.deleteUrl(true, req, res);
// });

// router.delete('/url/short/:url', (req, res) => {
//   controller.deleteUrl(true, req, res);
// });

module.exports = router;
