'use strict';

/**
* Class: ProductPriceInfo
* Description: Simple class representing a product price point. This class is useful because it provides additional information beyond just the price. Since the system calculates sales based on applicable price books, it is sometimes useful to know additional such as which price book defined a price book, what percentage discount off the base price this value represents, and the date range for which this price point is active.
*/
module.exports = function (ProductPriceInfo) {

    /**
    * @documentation: Returns the date from which the associated price point is valid. If such as date doesn't exist, e.g. as in the case of a continuous price point, null will be returned.
    *
    * @param  {Date} the date from which the associated price point is valid.
    * @return {null}
    */
    ProductPriceInfo.prototype.getOnlineFrom = function () {
        //TODO: Implement Me

    };


    /**
    * @documentation: Returns the date until which the associated price point is valid. If such a date doesn't exist, e.g. as in the case of a continuous price point, null will be returned.
    *
    * @param  {Date} the date to which the associated price point is valid
    * @return {null}
    */
    ProductPriceInfo.prototype.getOnlineTo = function () {
        //TODO: Implement Me

    };


    /**
    * @documentation: Returns the percentage off value of this price point related to the base price for the product's minimum order quantity.
    *
    * @param  {Number} the percentage off value of this price point.
    * @return {null}
    */
    ProductPriceInfo.prototype.getPercentage = function () {
        //TODO: Implement Me

    };


    /**
    * @documentation: Returns the price monetary price for this price point.
    *
    * @param  {[object Object]} the price amount.
    * @return {null}
    */
    ProductPriceInfo.prototype.getPrice = function () {
        //TODO: Implement Me

    };


    /**
    * @documentation: Returns the price book which defined this price point.
    *
    * @param  {[object Object]} the price book defining this price
    * @return {null}
    */
    ProductPriceInfo.prototype.getPriceBook = function () {
        //TODO: Implement Me

    };


    /**
    * @documentation: Returns the price info associated with this price point. This is an arbitrary string which a merchant can associate with a price entry. This can be used for example, to track which back-end system the price is derived from.
    *
    * @param  {String} the price info associated with this price point.
    * @return {null}
    */
    ProductPriceInfo.prototype.getPriceInfo = function () {
        //TODO: Implement Me

    };
};
