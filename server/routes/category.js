const express = require('express');
const router = express.Router();
const axios  = require('axios');

//Get Product Category
router.get('/:id', (req, res, next) => {
  const { id } = req.params;
  axios.get(`https://api.mercadolibre.com/categories/${ id }`)
    .then((response) => {
    res.json(response.data.name);
  })
  .catch((error) => {
    throw new Error(error);
  });
});

module.exports = router; 