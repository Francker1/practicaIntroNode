"use strict";

const express = require("express");
const router = express.Router();
const multer = require("multer");
const upload = multer({ dest: "../../public/images/ads/" });
const helperJS = require("../../public/javascripts/helper");


/**load ads model */
const Advertisement = require("../../models/Advertisement");

/**
 * GET /apiv1/ads/
 * Returns list of announcements
 */

router.get("/", async (req, res, next) => {
    
    try{

        // filter const:
        const name = req.query.name;
        const type = req.query.type;
        const tag = req.query.tag;
        const limit = parseInt( req.query.limit || 150 );
        const skip = parseInt( req.query.skip );
        const sort = req.query.sort;
        const fields = req.query.fields || "-__v";
        const price = req.query.price;
        
        //filters
        const filters = {};

        if (typeof name     !== "undefined") filters.name   = new RegExp(name, "i");
        if (typeof type     !== "undefined") filters.type   = type;
        if (typeof tag      !== "undefined") filters.tags   = tag;
        if (typeof price    !== "undefined") filters.price  = helperJS.getFilterPricing(price);

        // list by filters:
        const ads = await Advertisement.list( filters, limit, skip, sort, fields );
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
router.post("/", upload.single("photo"), async (req, res, next) => {

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


/**
 * DELETE /apiv1/ads/:id
 * Delete an announcement by ID
 */
router.delete("/:id", async (req, res, next) => {

    try{

        const _id = req.params.id;
        await Advertisement.deleteOne({ _id });
        res.json();
    } catch(err){
        
        next(err);
    }
});

module.exports = router;