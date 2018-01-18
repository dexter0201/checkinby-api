'use strict';

/**
* Class: ProductPriceModel
* Description: ProductPriceModel provides methods to access all the PriceBook information of a product. A ProductPriceModel instance is retrieved by calling Product.getPriceModel() or Product.getPriceModel(ProductOptionModel) for a specified product. The latter method will return a model which also includes the additional option prices of an option product.
*
When the current price of a product is accessed in the storefront via its price model, a price lookup is performed. The high-level steps of this price lookup are:
* Get all price books applicable in the context of the current site, time, session, customer, source code.
* Identify all prices in the applicable price books and for a requested quantity.
* Calculate the best-price of all identified prices. The best-price is the lowest price.

In more detail:
Identify applicable price books:
* If any price books are explicitly registered in the session (see pipelet SetApplicablePriceBooks), use these price books and their direct parents for price lookup. Ignore all inactive price books, price books not valid at the current time, and price books with a currency other than the session currency.
Otherwise:
* If a valid source code is registered with the current session, get all price books assigned to the source code and their parent price books. Ignore all inactive price books, price books not valid at the current time, and price books with a currency other than the session currency.
* Get all price books assigned to site and their parent price books. Ignore all inactive price books, price books not valid at the current time, and price books with a currency other than the session currency.
Identify all prices:
* Get all price definitions for the product from all applicable price books. Ignore price definitions not valid at the current time.
* Convert any percentage price definition into a monetary amount. As the base price for this calculation, the minimum product price for the minimum order quantity of the product, including product options, is used.
* Compare all prices and identify the lowest (=best) price.
* Calculate best price for each defined price cut in the price table and return price table.
Variation Price Fallback:
* If no applicable price books for a variant is found, the price lookup gets the price books from the variant's master product.
* A price books is also not applicable of the price definition for the variant in the price book is not valid at the current time.

Typically, in order to to a standard price lookup, it is only necessary to call: "Product.getPriceModel(). getPrice(). However, Commerce Cloud also supports tiered prices, meaning that higher quantities receive a lower price. In this case, the merchant typically wants to display a table of price points on product details. Therefore, the ProductPriceModel provides the method "getPriceTable()" to retrieve a table of these prices.
If a merchant wants to know not only what the price of a given product is, but what price book the price was derived from, this class provides the method "getPriceInfo()". This class also provides methods to lookup product prices in specific price books by name and quantity. See "getPriceBookPrice(String)"
*/
module.exports = function (ProductPriceModel) {
    /**
    * @documentation: Returns the quantity for which the base price is defined. This is typically 1.0.
    *
    * @param  {[object Object]} the quantity for which the base price is defined.
    * @return {null}
    */
    ProductPriceModel.prototype.getBasePriceQuantity = function () {
        //TODO: Implement Me

    };


    /**
    * @documentation: Calculates and returns the maximum price-book price of all variants (for master products) or set-products (for product sets) for base quantity 1.00. This value can be used to display a range of prices in storefront. If the product represented by this model is not a master product or product set, then this method behaves the same as getPrice(). Only online products are considered. If the "orderable products only" search preference is enabled for the current site, then only orderable products are considered. For master products, only variants with all variation attributes configured are considered.
    *
    Warning: If the product represented by this model is a master product with numerous variants, this method can be very expensive and should be avoided.


    *
    * @param  {[object Object]} Maximum price of all online variants or set-products.
    * @return {null}
    */
    ProductPriceModel.prototype.getMaxPrice = function () {
        //TODO: Implement Me

    };


    /**
    * @documentation: Calculates and returns the maximum price in a given price book of all variants (for master products) or set-products (for product sets) for base quantity 1.00. This value ca be used to display a range of prices in the storefront. This method follows the same rules as "getPriceBookPrice(String)" in determining the price book price for each variant or set-product. If the product represented by this model is not a master product or product set, then this method behaves the same as getPricebookPrice(String)
    *
    * @param priceBookID {String} ID of price book the price is requested for, must not be null.
    * @param  {[object Object]} The maximum price across all sub-products in the specified price book.
    * @return {null}
    */
    ProductPriceModel.prototype.getMaxPriceBookPrice = function (priceBookID) {
        //TODO: Implement Me

    };


    /**
    * @documentation: Calculates and returns the minimum price-book price of all variants (for master products) or set-products (for product sets) for base quantity 1.00. This value can be used to display a range of prices in storefront. If the product represented by this model is not a master product or product set, then this method behaves the same as getPrice(). Only online products are considered. If the "orderable products only" search preference is enabled for the current site, then only orderable products are considered. For master products, only variants with all variation attributes configured are considered.
    *    Warning: If the product represented by this model is a master product with numerous variants, this method can be very expensive and should be avoided.
    *
    * @param  {[object Object]} Minimum price of all online variants or set-products.
    * @return {null}
    */
    ProductPriceModel.prototype.getMinPrice = function () {
        //TODO: Implement Me

    };


    /**
    * @documentation: Calculates and returns the minimum price in a given price book of all variants (for master products) or set-products (for product sets) for base quantity 1.00. This value can be used to display a range of prices in storefront. This method follows the same rules as getPriceBookPrice(String) in determining the price book price for each variant or set-product. If the product represented by this model is not a master product or product set, then this method behaves the same as getPriceBookPrice(String).
    *
    * @param priceBookID {String} ID of price book the price is requested for, must not be null.
    * @param  {[object Object]} The minimum price across all subproducts in the specified price book.
    * @return {null}
    */
    ProductPriceModel.prototype.getMinPriceBookPrice = function (priceBookID) {
        //TODO: Implement Me

    };


    /**
    * @documentation: Returns the price of a product, calculated based on base price quantity 1.00. The price is returned for the currency of the current session.
    *    The price lookup is based on the configuration of price books. It depends on various settings, such as which price books are active, or explicitly set as applicable in the current session.

    If the product represented by this model is an option product, option prices will be added to the price book price if the price model was initialized with an option model.

    If no price could be found, MONEY.NOT_AVAILABLE is returned.
    *
    * @param  {[object Object]} the product price.
    * @return {null}
    */
    ProductPriceModel.prototype.getPrice = function () {
        //TODO: Implement Me

    };


    /**
    * @documentation: Returns the price of a product, calculated based on the passed order quantity. The price is returned for the currency of the current session.
    *    The price lookup is based on the configuration of price books. It depends on various settings, such as which price books are active, or explicitly set as applicable in the current session.

    If the product represented by this model is an option product, option prices will be added to the price book price if the price model was initialized with an option model.

    If no price could be found, MONEY.NOT_AVAILABLE is returned.
    *
    * @param quantity {[object Object]} Quantity price is requested for
    * @param  {[object Object]} the product price.
    * @return {null}
    */
    ProductPriceModel.prototype.getPrice = function (quantity) {
        //TODO: Implement Me

    };


    /**
    * @documentation: Returns the active price of the product in the specified price book for quantity 1.00.
    *    If the product represented by this model is an option product, option prices will be added to the price book price if the price model was initialized with an option model.

    Money.NOT_AVAILABLE will be returned in any of the following cases:

    priceBookID is null or does not identify a valid price book.
    The price book has no price for the product.
    None of the prices for the product in the price book is currently active.
    The currently active price entry is a percentage.
    *
    * @param priceBookID {String} ID of price book the price is requested for.
    * @param  {[object Object]} the price of the product in the specified price book.
    * @return {null}
    */
    ProductPriceModel.prototype.getPriceBookPrice = function (priceBookID) {
        //TODO: Implement Me

    };


    /**
    * @documentation: Returns the active price of the product in the specified price book for the specified quantity.
    *    If the product represented by this model is an option product, option prices will be added to the price book price if the price model was initialized with an option model.

    Money.NOT_AVAILABLE will be returned in any of the following cases:

    priceBookID is null or does not identify a valid price book.
    quantity is null.
    The price book has no price for the product.
    None of the prices for the product in the price book is currently active.
    The currently active price entry is a percentage.
    *
    * @param priceBookID {String} ID of price book the price is requested for.
    * @param quantity {[object Object]}  the specified quantity to find the price for.
    * @param  {[object Object]} the price of the product in the specified price book.
    * @return {null}
    */
    ProductPriceModel.prototype.getPriceBookPrice = function (priceBookID, quantity) {
        //TODO: Implement Me

    };


    /**
    * @documentation: This method acts similarly to getPriceBookPrice(String) but returns a ProductPriceInfo object wrapping the actual price with additional information.
    *
    * @param priceBookID {String} ID of price book the price is requested for, must not be null
    * @param  {[object Object]} the product price info, or null if not found.
    * @return {null}
    */
    ProductPriceModel.prototype.getPriceBookPriceInfo = function (priceBookID) {
        //TODO: Implement Me

    };


    /**
    * @documentation: This method acts similarly to getPriceBookPrice(String, Quantity) but returns a ProductPriceInfo object wrapping the actual price with additional information.
    *
    * @param priceBookID {String} ID of price book the price is requested for, must not be null.
    * @param quantity {[object Object]}  Quantity price is requested for.
    * @param  {[object Object]} the product price info, or null if not found.
    * @return {null}
    */
    ProductPriceModel.prototype.getPriceBookPriceInfo = function (priceBookID, quantity) {
        //TODO: Implement Me

    };


    /**
    * @documentation: Returns the price info of a product, calculated based on base price quantity 1.00. The price is returned for the currency of the current session.
    *    This method is similar to getPrice() but instead of just returning the price value, it returns a ProductPriceInfo which contains additional information such as the PriceBook which defined the price and the percentage discount this price point represents.

    If the product represented by this model is an option product, option prices will be added to the price book price if the price model was initialized with an option model.

    If no price info could be found, null is returned.

    *
    * @param  {[object Object]} the product price info, or null if not found.
    * @return {null}
    */
    ProductPriceModel.prototype.getPriceInfo = function () {
        //TODO: Implement Me

    };


    /**
    * @documentation: Returns the price info of a product, calculated based on the passed order quantity. The price is returned for the currency of the current session.
    *    This method is similar to getPrice(Quantity) but instead of just returning the price value, it returns a ProductPriceInfo which contains additional information such as the PriceBook which defined the price and the percentage discount this price point represents.

    If the product represented by this model is an option product, option prices will be added to the price book price if the price model was initialized with an option model.

    If no price info could be found, null is returned.
    *
    * @param quantity {[object Object]} the quantity to use.
    * @param  {[object Object]} the product price info, or null if not found.
    * @return {null}
    */
    ProductPriceModel.prototype.getPriceInfo = function (quantity) {
        //TODO: Implement Me

    };


    /**
    * @documentation: Returns all the price infos of a product that could have been the basis of the storefront price, calculated based on base price quantity 1.00. This will return an empty list if getPriceInfo() would return null, and if there is only one price info in the collection it will be the same price info as getPriceInfo(). Two or more price infos indicate that there are that many price books that meet the criteria for returning the price shown in the storefront.
    *
    * @param  {[object Object]} any product price info that could be responsible for the storefront price, or empty collection if there were no product price infos this price model.
    * @return {null}
    */
    ProductPriceModel.prototype.getPriceInfos = function () {
        //TODO: Implement Me

    };


    /**
    * @documentation: Returns the product price table object. The price represents a map between order quantities and prices, and also provides % off information to be shown to storefront customers. The price is returned for the currency of the current session.
    *
    Usually, the product price table is printed on product detail pages in the storefront.

    If the product represented by this model is an option product, option prices will be added to the price book price if the price model was initialized with an option model.

    All other methods of this class are based on the information in the product price table.
    *
    * @param  {[object Object]} the Product price table.
    * @return {null}
    */
    ProductPriceModel.prototype.getPriceTable = function () {
        //TODO: Implement Me

    };


    /**
    * @documentation: Returns true if this product is a master product (or product set) and the collection of online variants (or set products respectively) contains products of different prices.
    *
    Warning: If the product represented by this model is a master product with numerous variants, this method can be very expensive and should be avoided.
    *
    * @param  {Boolean} True if this product has a range of prices, false otherwise.
    * @return {null}
    */
    ProductPriceModel.prototype.isPriceRange = function () {
        //TODO: Implement Me

    };


    /**
    * @documentation: Returns true if this product is a master product (or product set) and the collection of online variants (or set products respectively) contains products of different prices in the specified price book.
    *
    * @param priceBookID {String} The ID of the price book.
    * @param  {Boolean} True if this product has a range of prices, false otherwise.
    * @return {null}
    */
    ProductPriceModel.prototype.isPriceRange = function (priceBookID) {
        //TODO: Implement Me

    };
};

