"use strict";

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
    await Ad.insertMany([
        {
            name: "Anuncio de prueba",
            type: "sell",
            price: 42,
            photo: "mifoto.jpg",
            tags: ["lifestyle", "work"],
            created: Date.now()
        },
        {
            name: "Vendo papel higiénico",
            type: "buy",
            price: 215,
            photo: "mipapel.jpg",
            tags: ["lifestyle", "motor", "work"],
            created: Date.now()
        },
        {
            name: "Compro algo, lo que sea",
            type: "sell",
            price: 0.5,
            photo: "mipapel.jpg",
            tags: ["lifestyle", "work"],
            created: Date.now()
        },
    ]);
}
