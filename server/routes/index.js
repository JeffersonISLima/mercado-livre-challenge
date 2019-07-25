const express = require('express');
const router = express.Router();
const axios = require('axios');


/* Endpoint */
router.get('/', (req, res, next) => {
 axios.get(`https://api.mercadolibre.com/sites/MLA`)
 .then((resultCallApi) => {
    res.json(resultCallApi);
 })
 .catch((error) => {
    throw new Error(error);
 })
});

module.exports = router;
