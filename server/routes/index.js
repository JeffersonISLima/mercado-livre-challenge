const express = require('express');
const router = express.Router();

/* API MeLi */
router.get('/', (req, res, next) => {
  res.render('../views/index', {
    title: 'API MeLi'
  });
});

module.exports = router;