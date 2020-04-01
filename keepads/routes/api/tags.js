"use strict";

const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
    
 
    //const ads = await Advertisement.list( filters, limit, skip, sort, fields );
    res.json({
        "success": true,
        "count": 4,
        "results": [
          "lifestyle",
          "mobile",
          "motor",
          "work"
        ]
      });


});


module.exports = router;