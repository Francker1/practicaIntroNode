"use strict";

const mongoose = require("mongoose");

/**
 * create schema:
 */

const adSchema = mongoose.Schema({
        name: {
            type: String,
            required: [true, "Name is required"]
        },
        type: {
            type: String,
            required: [true, "Hey! You buy or sell?"]
        },
        price: {
            type: Number,
            required: true
        },
        photo: String,
        tags: {
            type: [String],
            enum: ["motor", "lifestyle", "work", "mobile"]
        }
    },
    {
        timestamps: true
    }
);


adSchema.statics.list = function (filter, limit, skip, sort, fields){

    const query = Advertisement.find(filter);
    query.limit(limit);
    query.skip(skip);
    query.sort(sort);
    query.select(fields);

    //execute query
    return query.exec();
};

/**
 * create model
 * mongoose.model("name singular of collection in bd", schema);
 */

const Advertisement = mongoose.model("Advertisement", adSchema);

/**
 * export model
 */

module.exports = Advertisement;
