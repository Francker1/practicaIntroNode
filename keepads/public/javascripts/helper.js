"use strict";

/**
 * This function returns an object to filter the list of ads by price.
 * First, I check if the value of req.query.price comes "-", so I avoid continuing with the parameter processing
 * @returns object
 */
exports.getFilterPricing = price => { 
    
    let filterPrice;

    if( price.search("-") != -1 ){
        
        //I get a price grater and less
        const priceArray    = price.split("-");
        const priceGte      = priceArray[0];
        const priceLte      = priceArray[1];

        //Logical process to return filter
        if( priceGte == "" ){

            filterPrice = { $lte: priceLte };
        }else if( priceLte == "" ){

            filterPrice = { $gte: priceGte };
        }else{
            
            filterPrice = { $gte: priceGte, $lte: priceLte };
        }
    
    }else{

        //if not exists "-", this will search for the exact price
        filterPrice = price;
    }

    return filterPrice;
}