"use strict";

const express = require("express");
const router = express.Router();

/**load ads model */
const Advertisement = require("../../models/Advertisement");

/**
 * GET /apiv1/ads/
 * Returns list of announcements
 */

router.get("/", async (req, res, next) => {
    
    try{

        const ads = await Advertisement.find();
        res.json(ads);
    }catch(err){

        next(err);
    }
   
});


router.get("/:id", async (req, res, next) => {

    try{

        const _id = req.params.id;
        const ad = await Advertisement.findOne({ _id });

        if(!ad){
            const err = new Error("Ad Not found");
            err.status = 404;
            next(err);
            return;
        }
        res.json(ad);
    }catch(err){

        next(err);
    }

});


module.exports = router;