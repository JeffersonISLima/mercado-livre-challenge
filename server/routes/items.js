const express = require('express');
const router = express.Router();
const axios = require('axios');

// Search Products List
router.get('/', (req, res, next) => {
  const {
    search
  } = req.query;
  axios.get(`https://api.mercadolibre.com/sites/MLA/search?q=${ search }`)
    .then((response) => {
      const searchResult = [...response.data.results];
      response.data.results.map((categoryId) => {
        axios.get(`https://api.mercadolibre.com/categories/${ categoryId.category_id }`)
          .then((response) => {
            res.json({
              searchResult: searchResult,
              categoryName: response.data.name
            })
          })
      })
    })
    .catch((error) => {
      throw new Error(error);
    })
});

// Product Detail
router.get(`/:id`, (req, res, next) => {
  const {
    id
  } = req.params;
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
router.get(`/:id/description`, (req, res, next) => {
  const {
    id
  } = req.params;
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