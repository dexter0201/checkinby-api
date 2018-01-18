'use strict';

/**
* Class: ProductPriceTable
* Description: A ProductPriceTable is a map of quantities to prices representing the potentially tiered prices of a product in Commerce Cloud Digital. The price of a product is the price associated with the largest quantity in the ProductPriceTable which does not exceed the purchase quantity.
*/
module.exports = function (ProductPriceTable) {

    /**
    * @documentation: Returns the quantity following the passed quantity in the price table. If the passed quantity is the last entry in the price table, null is returned.
    *
    * @param quantity {[object Object]} the quantity to use to locate the next quantity in the price table.
    * @param  {[object Object]} the next quantity or null.
    * @return {null}
    */
    ProductPriceTable.prototype.getNextQuantity = function (quantity) {
        //TODO: Implement Me

    };


    /**
    * @documentation: Returns the percentage off value of the price related to the passed quantity, calculated based on the price of the products minimum order quantity.
    *
    * @param quantity {[object Object]} the price quantity to compute the percentage off.
    * @param  {Number} the percentage off value of the price related to the passed quantity.
    * @return {null}
    */
    ProductPriceTable.prototype.gerPercentage = function (quantity) {
        //TODO: Implement Me

    };


    /**
    * @documentation: Returns the monetary price for the passed order quantity. If no price is defined for the passed quantity, null is returned. This can happen if for example no price is defined for a single item.
    *
    * @param quantity {[object Object]} the quantity to use to determine price.
    * @param  {[object Object]} price amount for the passed quantity.
    * @return {null}
    */
    ProductPriceTable.prototype.getPrice = function (quantity) {
        //TODO: Implement Me

    };


    /**
    * @documentation: Returns the price book which defined the monetary price for the passed order quantity. If no price is defined for the passed quantity, null is returned. This can happen if for example no price is defined for a single item.
    *
    * @param quantity {[object Object]} the quantity to use to determine price.
    * @param  {[object Object]} the price book defining this price, or null
    * @return {null}
    */
    ProductPriceTable.prototype.getPriceBook = function (quantity) {
        //TODO: Implement Me

    };


    /**
    * @documentation: Returns all quantities stored in the price table.
    *
    * @param  {[object Object]} all price table quantities.
    * @return {null}
    */
    ProductPriceTable.prototype.getQuantities = function () {
        //TODO: Implement Me

    };

};
