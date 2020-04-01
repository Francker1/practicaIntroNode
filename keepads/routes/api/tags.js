"use strict";

const express = require("express");
const router = express.Router();

/**load ads model */
const Advertisement = require("../../models/Advertisement");


/**
 * GET /apiv1/tags/
 * Returns list of tags
 */

router.get("/", async (req, res, next) => {
    
  try{

    const tags = await Advertisement.distinct("tags");
    res.json({tags: tags});
  }catch(err){

    next(err);
  }
});

module.exports = router;