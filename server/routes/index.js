const express = require('express');
const router = express.Router();
const axios = require('axios');

/* Endpoint */
router.get('/', (req, res, next) => {
  res.render('../views/index', {
    title: 'API MeLi'
  });
});

// Search Products List
router.get('/items', (req, res, next) => {
  const { search } = req.query;
  axios.get(`https://api.mercadolibre.com/sites/MLA/search?q=${ search }`)
    .then((response) => {
      res.json(response.data.results);
    })
    .catch((error) => {
      throw new Error(error);
    })
});

// Product Detail
router.get(`/items/:id`, (req, res, next) => {
  const { id } = req.params;
  axios.get(`https://api.mercadolibre.com/items/${ id }`)
    .then((response) => {
      res.json(response.data);
    })
    .catch(() => {
      res.json({
        Message: 'ID não consta na API.'
      });
    });
});

// Product Detail - Description
router.get(`/items/:id/description`, (req, res, next) => {
  const { id } = req.params;
  axios.get(`https://api.mercadolibre.com/items/${ id }/description`)
    .then((getDescriptionProduct) => {
      res.json(getDescriptionProduct.data);
    })
    .catch(() => {
      res.json({
        Message: 'ID não consta na API.'
      });
    });
});

module.exports = router;