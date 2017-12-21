'use strict';

module.exports = function (Product) {
    /**
     * Product Model methods
     */


    /**
     * Returns the active data for this product, for the current site.
     * @return {ProductActiveData} the active data for this product for the
     * current site.
     */
    Product.prototype.getActiveData = function () {
        return this.activeData;
    };

    /**
     * Returns a collection of all categories to which this product is assigned.
     * @return {Collection} Collection of Categories.
     */
    Product.prototype.getAllCategories = function () {
        return this.allCategories;
    };

    /**
     * Returns all category assignments for this product in any catalog.
     * @return {Collection} Collection of category assignments of this product
     * in any catalog.
     */
    Product.prototype.getAllCategoryAssignments = function () {
        return this.allCategoryAssignments;
    };

    /**
     * Returns all incoming product links
     * @return {Collection} a collection of all incoming ProductLinks
     */
    Product.prototype.getAllIncomingProductLinks = function () {
        return this.allIncomingProductLinks;
    };

    /**
     * Return all incoming ProductLinks of a specific type.
     * @param  {Number} type the type of ProductLink to use.
     * @return {Collection}      a collection of all incoming ProductLinks of a
     * specific type.
     */
    Product.prototype.getAllIncomingProductLinks = function (type) {
        return this.allIncomingProductLinks;
    };

    /**
     * Returns all outgoing ProductLinks
     * @return {Collection} a collection of all outgoing ProductLinks.
     */
    Product.prototype.getAllProductLinks = function () {
        return this.allProductLinks;
    };

    /**
     * Returns all outgoing ProductLinks of a specific type.
     * @param  {Number} type the type of ProductLinks to fetch
     * @return {Collection}      a collection of all outgoing ProductLinks of a
     * specific type.
     */
    Product.prototype.getAllProductLinks = function (type) {
        return this.allProductLinks;
    };

    /**
     * Returns outgoing recommendations for this product which belong to
     * specified catalog. The recommendations are sorted by their explicity set
     * order.
     * @param  {Catalog} catalog The catalog containing the recommendations.
     * @return {Collection}         the sorted collection of recommendations,
     * never null but possibly empty.
     */
    Product.prototype.getAllRecommendations = function (catalog) {
        return this.recommendations;
    };

    /**
     * Returns the outgoing recommendations for this product which are of the
     * specified type and which belong to the specified catalog. The
     * recommendations are sorted by their explicitly set order.
     * @param  {Catalog} catalog the catalog containing the recommendations.
     * @param  {Number} type    the recommendation type.
     * @return {Collection}         the sorted collection of recommendations,
     * never null but possibly empty.
     */
    Product.prototype.getAllRecommendations = function (catalog, type) {
        return this.recommendations;
    };

    /**
     * Returns this product's ProductAttributeModel, which makes access to the
     * product attribute information convenient. The model is calculated based
     * on the product attributes assigned to this product's classification
     * category (or any it's ancestors) or the global attribute definations for
     * the system object type 'Product'. If this product has no classification
     * category, the attribute model is calculated on the global attribute
     * definations only. If this product is a variant, then the attribute model
     * is calculated based on the classification category of its corresponding
     * master product.
     * @return {ProductAttributeModel} ProductAttributeModel for this product.
     */
    Product.prototype.getAttributeModel = function () {
        return this.attributeModel;
    };

    /**
     * Returns the availability model, which can be used to determine
     * availabilty information for a product.
     * @return {ProductAvailabilityModel} the availability model for a product.
     */
    Product.prototype.getAvailabilityModel = function () {
        return this.availabilityModel;
    };

    /**
     * Returns the availability model of the given inventory list, which can be
     * used to determine availability information for a product.
     * @param  {ProductInventoryList} list The inventory to get the availability
     * model for. Must not be null or an exception will be raised.
     * @return {ProductAvailabilityModel}      the availability model of the
     * given inventory list for a product.
     */
    Product.prototype.getAvailabilityModel = function (list) {
        return this.availabilityModel;
    };

    /**
     * Returns the branch of the product
     * @return {String} the Brand of the product
     */
    Product.prototype.getBrand = function () {
        return this.brand;
    };

    /**
     * Returns the quantity of the specified product within the bundle. If the
     * specified product is not a part of the bundle, a 0 quantity is returned.
     * @param  {Product} aProduct The product to determine the quantity for.
     * @return {Quantity}          The quantity of the product within the bundle
     * or 0 if the product is not part of the bundle.
     */
    Product.prototype.getBundledProductQuantity = function (aProduct) {
        var quantity = 0;

        return quantity;
    };

    /**
     * Returns a collection containing all products that participate in the
     * product bundle.
     * @return {Collection} A collection containing all products of the product
     * bundle.
     */
    Product.prototype.getBundledProducts = function () {
        return this.bundledProducts;
    };

    /**
     * Returns a collection of all bundles in which this product is included.
     * The method only returns bundles assigned to the current site.
     * @return {Collection} Collection of bundles in which this product is
     * included, possibly empty.
     */
    Product.prototype.getBundles = function () {
        return this.bundles;
    };

    /**
     * Returns a collection of all categories to which this product is assigned
     * and which are also available through the current site.
     * @return {Collection} Collection of categories to which this product is
     * assigned and which are also available through the current site.
     */
    Product.prototype.getCategories = function () {
        return this.categories;
    };

    /**
     * Returns the category assignment for a specific category.
     * @param  {Category} category the category to use when fetching assignments
     * @return {CategoryAssignment}          The category assignment for a specific category.
     */
    Product.prototype.getCategoryAssignment = function (category) {
        var categoryAssignment;

        return categoryAssignment;
    };

    /**
     * Returns a collection of category assignments for this product in the current site catalog.
     * @return {Collection} Collection of category assignments.
     */
    Product.prototype.getCategoryAssignments = function () {
        return this.categoryAssignments;
    };

    /**
     * Returns classification category associated with this product. A Product
     * a single classification category which may or may not be in the site
     * catalog. The classification category defines the attribute set of the
     * product. See getAttributeModel() for how the classification category is
     * used.
     * @return {Category} the associated classification category, or null if
     * none is associated.
     */
    Product.prototype.getClassificationCategory = function () {
        return this.classificationCategory;
    };

    /**
     * Returns the European Article Number of the product.
     * @return {String} the Eropean Article Number of the product.
     */
    Product.prototype.getEAN = function () {
        return this.EAN;
    };

    /**
     * Returns the ID of the product.
     * @return {String} ID of the product.
     */
    Product.prototype.getID = function () {
        return this.ID:
    };

    /**
     * This method calls getImages(String) and return the image at specific
     * index. If no image for specified index is available the method returns
     * null.
     * @param  {String} viewtype the view type annotated to image
     * @param  {Number} index    the index number of the image within image list
     * @return {MediaFile}          The MediaFile or null
     * @throw  {NullArgumentException} if viewtype is null
     */
    Product.prototype.getImage = function (viewtype, index) {
        var MediaFile;

        return MediaFile;
    };

    /**
     * The method calls getImages(String) and returns the first image. If no
     * image is available the method returns null. When called for a variant
     * with defined images for specified view type the method returns the first
     * image. When called for a variant without defined images for specified
     * view type the method returns the first master product image. If no master
     * product images are defined, the method returns null
     * @param  {String} viewtype the view type annotated to image
     * @return {MediaFile}          the MediaFile or null
     * @throw  {NullArgumentException} if viewtype is null
     */
    Product.prototype.getImage = function (viewtype) {
        var MediaFile;

        return MediaFile;
    };
};
