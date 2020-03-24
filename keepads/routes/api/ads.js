"use strict";

const express = require("express");
const router = express.Router();

/**load ads model */
const Advertisement = require("../../models/Advertisement");

/**
 * GET /apiv1/ads/
 * Returns list of announcements
 */

router.get("/", (req, res, next) => {
    Advertisement.find().exec((err, ads) => {
        res.json(ads);
    })
});

module.exports = router;