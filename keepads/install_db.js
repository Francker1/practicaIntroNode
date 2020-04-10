"use strict";

const dataInit = require("./lib/data_initialize");
const conn = require("./lib/connectDB");
const Ad = require("./models/Advertisement");

conn.once("open", async () => {

    /**Initialize collection Advertisements */
    try{

        await initAds();
        conn.close();
    }catch(err){

        console.error(`Error: ${err}`);
        process.exit();
    }

});

const initAds = async () => {
    
    await Ad.deleteMany();
    await Ad.insertMany(dataInit);
};
