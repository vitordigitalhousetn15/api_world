const express = require('express');
const model = require('../models/country');
const router = express.Router();

router.get("/", async function(req, res) {
  const response = await model.getCountries();
  res.json({ success: true, response: response });
});

module.exports = router;