const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.render('form');
});

router.post('/', function (req, res, next) {
  const { messageText, author } = req.body;
  messages.push({
    text: messageText,
    user: author,
    added: new Date(),
  });
  res.redirect('/horse');
});

module.exports = router;
