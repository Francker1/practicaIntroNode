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


/**
 * GET /apiv1/ads/:id
 * Returns announcement by id
 */
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


/**
 * POST /apiv1/ads/
 * Create an announcement
 */
router.post("/", async (req, res, next) => {

    try{

        const adDataCreate = req.body;
        const ad = new Advertisement(adDataCreate);

        //save in BD
        const adSaved = await ad.save();

        //if is ok, response code 201 - created
        res.status(201).json(adSaved);
    }catch(err){

        next(err);
    }
});


/**
 * PUT /apiv1/ads/:id
 * Update an announcement by ID
 */
router.put("/:id", async (req, res, next) => {

    try{

        const _id = req.params.id;
        const adDataUpdate = req.body;

        const adUpdated = await Advertisement.findOneAndUpdate( 
            { _id }, 
            adDataUpdate, 
            { new: true, useFindAndModify: false } 
        );
        res.status(200).json(adUpdated);
    } catch(err){

        next(err);
    }
});


module.exports = router;