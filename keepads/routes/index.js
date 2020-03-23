var express = require('express');
var router = express.Router();

const Advertisement = require("../models/Advertisement");

router.get("/ads", (req, res, next) => {
  Advertisement.find().exec((err, ads) => {
    res.json(ads);
  })
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'KeepAds API' });
});

module.exports = router;
