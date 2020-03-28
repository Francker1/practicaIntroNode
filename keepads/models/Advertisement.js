"use strict";

const mongoose = require("mongoose");

/**
 * create schema:
 */

const adSchema = mongoose.Schema({
    name: String,
    type: String,
    price: Number,
    photo: String,
    tags: [String],
    created: Date,
});


adSchema.statics.list = function (filter, limit, skip, sort){

    const query = Advertisement.find(filter);
    query.limit(limit);
    query.skip(skip);
    query.sort(sort);
    
    //execute query
    return query.exec();
}

/**
 * create model
 * mongoose.model("name singular of collection in bd", schema);
 */

const Advertisement = mongoose.model("Advertisement", adSchema);

/**
 * export model
 */

module.exports = Advertisement;
