const express = require('express');

const router = express.Router();
const controller = require('../controllers/redirect-controller');

/* index handler */
router.get('/', (req, res) => {
  res.send('This is the backend');
});

/* perform url redirection based on short url */
router.get('/:url', (req, res) => {
  controller.performRedirect(req, res);
});

module.exports = router;
