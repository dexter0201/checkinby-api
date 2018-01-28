'use strict';

module.exports = function (Product) {
    var app = require('../../server/server');
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
     * @return {CategoryAssignment}          The category assignment for a
     * specific category.
     */
    Product.prototype.getCategoryAssignment = function (category) {
        var categoryAssignment;

        return categoryAssignment;
    };

    /**
     * Returns a collection of category assignments for this product in the
     * current site catalog.
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
        return this.ID;
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

    /**
     * Returns incoming ProductLinks, where the source product is a site product
     * @return {Collection} a collection of incoming ProductLinks, where the
     * source product is a site product.
     */
    Product.prototype.getIncomingProductLinks = function () {
        return this.incomingProductLinks;
    };

    /**
     * Returns incoming ProductLinks, where the source product is a site product
     * of a specific type
     * @param  {Number} type the type of ProductLinks to fetch
     * @return {Collection}      a collection of incoming ProductLinks, where
     * the source product is a site product of a specific type.
     */
    Product.prototype.getIncomingProductLinks = function (type) {
        return this.incomingProductLinks;
    };

    /**
     * Returns the product's long description in the current locate.
     * @return {MarkupText} The product's long description in the current locate
     * , or null if it wasn't found.
     */
    Product.prototype.getLongDescription = function () {
        return this.longDescription;
    };

    /**
     * Returns the name of the product manufacturer.
     * @return {String} the name of the product manufacturer.
     */
    Product.prototype.getManufacturerName = function () {
        return this.manufactureName;
    };

    /**
     * Returns the value of the manufacturer's stock keeping unit.
     * @return {String} the value of the manufacturer's stock keeping unit.
     */
    Product.prototype.getManufacturerSKU = function () {
        return this.manufactureSKU;
    };

    /**
     * Returns the minimum order quantity for this product.
     * @return {Quantity} the minimum order quantity for this product.
     */
    Product.prototype.getMinOrderQuantity = function () {
        return this.minOrderQuantity;
    };

    /**
     * Returns the name of the product in current locate.
     * @return {String} the name of the product in current locate, null if it
     * wasn't found.
     */
    Product.prototype.getName = function () {
        return this.name;
    };

    /**
     * Returns a collection of all currently online categories to which this
     * product is assigned and which are also available through the current
     * site. A category is currently online if its online flag equals true and
     * the current site date is within the date range defined by the onlineFrom
     * and onlineTo attributes.
     * @return {[type]} [description]
     */
    Product.prototype.getOnlineCategories = function () {
        return this.onlineCategories;
    };

    /**
     * Returns the online status flag of the product.
     * @return {Boolean} the online flag of the product.
     */
    Product.prototype.getOnlineFlag = function () {
        return this.onlineFlag;
    };

    /**
     * Returns the date from which the product is online or valid.
     * @return {Date} the date from which the product is online or valid.
     */
    Product.prototype.getOnlineFrom = function () {
        return this.onlineFrom;
    };

    /**
     * Returns the date to which the product is online or valid.
     * @return {Date} the date to which the product is online or valid.
     */
    Product.prototype.getOnlineTo = function () {
        return this.onlineTo;
    };

    /**
     * Returns the product's option model. The option values selections are
     * initialized with the values defined for the product, or the default
     * values defined for the option.
     * @return {ProductOptionModel} the products option model.
     */
    Product.prototype.getOptionModel = function () {
        return this.optionModel;
    };

    /**
     * Returns a list of outgoing recommendations for this product. This method
     * behaves similarly to getRecommendations() but additionally filters out
     * recommendations for which the target product is unorderable according
     * to its product availability model.
     * @return {Collection} the sorted collection of recommendations, never null
     * but possible empty.
     */
    Product.prototype.getOrderableRecommendations = function () {
        return this.orderableRecommendations;
    };

    /**
     * Returns a list of outgoing recommendations for this product. This method
     * behaves similarly to getRecommendations(Number) but additionally filters
     * out recommendations for which the target product is unorderable according
     * to its product availability model.
     * @param  {Number} type the recommendation type.
     * @return {Collection}      the sorted collection of recommendations, never
     * null but possibly empty.
     */
    Product.prototype.getOrderableRecommendations = function (type) {
       return this.orderableRecommendations;
    };

    /**
     * Returns the product's page description in the default locate.
     * @return {String} The product's page description in the default locate,
     * or null if it wasn't found.
     */
    Product.prototype.getPageDescription = function () {
        return this.pageDescription;
    };

    /**
     * Returns the product's page keywords in the default locale.
     * @return {String} The product's page keywords in the default locale, or
     * null if it wasn't found.
     */
    Product.prototype.getPageKeywords = function () {
        return this.pageKeywords;
    };

    /**
     * Reverved for beta users.
     *
     * Returns the page meta for the specified id.
     *
     * The meta tag content is generated based on the product detail meta tag
     * context and rule. The rule is obtained from the current product context
     * or inherited from variation groups, master product, the primary category,
     * up to the root category.
     *
     * Null will be returned if the meta data tag is undefined on the current
     * instance, or if no rule can be found for the current context, of if the
     * rule resolves to an empty string.
     * @param  {String} id the ID to get the meta data for.
     * @return {PageMetaTag}    page meta tag containing content generated
     * based on the rule.
     */
    Product.prototype.getPageMetaTag = function (id) {
        var pageMetaTag = '';

        return pageMetaTag;
    };

    /**
     * Reserved for beta users.
     *
     * Returns all page meta tags, defined for this instance for which content
     * can be generated.
     *
     * The meta tag content is generated based on the product detail page meta
     * tag context and rules. The rules are obtained from the current product
     * context or inherited from variation groups, master product, the primary
     * category, up to the root category.
     * @return {Array} page meta tags defined for this instance, containing
     * content generated based on rules
     */
    Product.prototype.getPageMetaTags = function () {
        return this.pageMetaTags;
    };

    /**
     * Returns the product's page title in the default locale.
     * @return {String} The product's page title in the default locale, or null
     * if it wasn't found.
     */
    Product.prototype.getPageTitle = function () {
        return this.pageTitle;
    };

    /**
     * Returns the product's page URL in the default locale.
     * @return {String} The product's page URL in the default locale, or null if
     * it wasn't found.
     */
    Product.prototype.getPageURL = function () {
        return this.pageURL;
    };

    /**
     * Returns the price model, which can be used to retrieve a price for this
     * product.
     * @return {ProductPriceModel} the price model, which can be used to
     * retrieve a price for this product.
     */
    Product.prototype.getPriceModel = function () {
        return this.priceModel;
    };

    /**
     * Returns the price model based on the specified optionModel. The price
     * model can be used to retrieve a price for this product. Prices are
     * calculated based on the option values selected in the specified option
     * model.
     * @param  {ProductOptionModel} optionModel the option model to use when
     * fetching the price model.
     * @return {ProductPriceModel}             the price model based on the
     * specified optionModel.
     */
    Product.prototype.getPriceModel = function (optionModel) {
        return this.priceModel;
    };

    /**
     * Returns the primary category of the product within the current site
     * catalog.
     * @return {Category} The product's primary category or null.
     */
    Product.prototype.getPrimaryCategory = function () {
        return this.primaryCategory;
    };

    /**
     * Returns the category assignment to the primary category in the current
     * site catalog, or null if no primary category is defined within the
     * current site catalog.
     * @return {CategoryAssignment} The category assignment to the primary
     * category or null.
     */
    Product.prototype.getPrimaryCategoryAssignment = function () {
        return this.primaryCategoryAssignment;
    };

    /**
     * Returns all outgoing ProductLinks, where the target product is also
     * available in the current site. The ProductLinks are unsorted.
     * @return {Collection} a collection of outgoing ProductLinks where the
     * target product is also available in the current site.
     */
    Product.prototype.getProductLinks = function () {
        return this.productLinks;
    };

    /**
     * Returns all outgoing ProductLinks of a specific type, where the target
     * product is also available in the current site. The ProductLinks are
     * sorted.
     * @param  {Number} type the type of ProductLinks to fetch.
     * @return {Collection}      a collection of outgoing ProductLinks where the
     * target product is also available in the current site.
     */
    Product.prototype.getProductLinks = function (type) {
        return this.productLinks;
    };

    /**
     * Returns a collection of all products which are assigned to this product
     * and which are available through the current site. If this product does
     * not represent a product set then an empty collection will be returned.
     * @return {Collection} Collection of products which are assigned to this
     * product and which are also available through current site.
     */
    Product.prototype.getProductSetProducts = function() {
        return this.productSetProducts;
    };

    /**
     * Returns a collection of all product sets which this product is included.
     * The method only returns product sets assigned to the current site.
     * @return {Collection} Collection of product sets in which this product
     * is included, possibly empty.
     */
    Product.prototype.getProductSets = function () {
        return this.productSets;
    };

    /**
     * Returns the outgoing recommendations for this product which belong to the
     * site catalog. If this product is not assigned to the site catalog, or
     * there is no site catalog, an empty collection is returned. Only
     * recommendations for which the target product exists and is assigned to
     * the site catalog are returned. The recommendations are sorted by their
     * explicitly set order.
     * @return {Collection} the sorted collection of recommendations, never null
     * but possibly empty.
     */
    Product.prototype.getRecommendations = function () {
        return this.recommendations;
    };

    /**
     * Returns the outgoing recommendations for this product which are of the
     * specified type and which belong to the site catalog. Behaves the same as
     * getRecommendations() but additionally filters by recommendation type.
     * @param  {Number} type the recommendation type.
     * @return {Collection}      the sorted collection of recommendations, never
     * null but possibly empty.
     */
    Product.prototype.getRecommendations = function (type) {
        return this.recommendations;
    };

    /**
     * Returns, whether the product is currently searchable
     * @return {Boolean} the searchable status flag of the product.
     */
    Product.prototype.getSearchableFlag = function () {
        return this.searchableFlag;
    };

    /**
     * Returns the searchable status of the Product if unavailable. Besides true
     * or false, the return value null indicates that the value is not set.
     * @return {Boolean} The searchable status of the product if unavailable or
     * null if not set.
     */
    Product.prototype.getSearchableIfUnavailableFlag = function () {
        return this.searchableIfUnavailableFlag;
    };

    /**
     * Returns the product's search placement classification. The higher the
     * numeric product placement value, the more relevant is the product when
     * sorting search results. The range of numeric placement values is defined
     * in the meta data of object type 'Product' and can therefore be customized
     * @return {Number} the product's search placement.
     */
    Product.prototype.getSearchPlacement = function () {
        return this.searchPlacement;
    };

    /**
     * Returns the product's search rank. The higher the numeric product rank,
     * the more relevant is the product when sorting search results. The range
     * of numeric rank values is defined in the meta data of object type
     * 'Product' and can therefore be customized.
     * @return {Number} The product's search rank.
     */
    Product.prototype.getSearchRank = function () {
        return this.searchRank;
    };

    /**
     * Returns the product's short description in the current locale.
     * @return {MarkupText} the product's short description in the current
     * locale, or null if it wasn't found.
     */
    Product.prototype.getShortDescription = function () {
        return this.shortDescription;
    };

    /**
     * Returns the product's change frequency needed for the sitemap creation.
     * @return {String} The product's sitemap change frequency.
     */
    Product.prototype.getSiteMapChangeFrequency = function () {
        return this.siteMapChangeFrequency;
    };

    /**
     * Returns the product's priority needed for the sitemap creation.
     * @return {Number} The product's sitemap priority.
     */
    Product.prototype.getSiteMapPriority = function () {
        return this.siteMapPriority;
    };

    /**
     * Returns the steps in which the order amount of the product can be
     * increased.
     * @return {Quantity} the order amount by which the product can be increased
     */
    Product.prototype.getStepQuantity = function () {
        return this.stepQuantiry;
    };

    /**
     * Returns the store receipt name of the product in current locale.
     * @return {String} the store receipt name of the product in the current
     * locale.
     */
    Product.prototype.getStoreReiptName = function () {
        return this.storeReceiptName;
    };

    /**
     * Returns the store tax class ID.
     * This is an optional override for in-store tax calculation.
     * @return {String} the store tax class id.
     */
    Product.prototype.getStoreTaxClass = function () {
        return this.storeTaxClass;
    };

    /**
     * Returns the ID of the product's tax class.
     * @return {String} the ID of the product's tax class.
     */
    Product.prototype.getTaxClassID = function () {
       return this.taxClassID;
    };

    /**
     * Returns the name of the product's rendering template.
     * @return {String} the name of the product's rendering template.
     */
    Product.prototype.getTemplate = function () {
        return this.template;
    };
    /**
     * Returns the product's sale unit.
     * @return {String} the products sales unit.
     */
    Product.prototype.getUnit = function () {
        return this.unit;
    };

    /**
     * Returns the Universal Product Code of the product.
     * @return {String} the Universal Product Code of the product.
     */
    Product.prototype.getUPC = function () {
        return this.UPC;
    };

    /**
     * Returns a collection of all variants assigned to this variation master
     * or variation group product. All variants are returned regardless of
     * whether they are online or offline. If this product does not represent
     * a variation master or variation group
     * @return {Collection} Collection of variants associated with this
     * variation master or variation group product.
     */
    Product.prototype.getVariants = function () {
        return this.variants;
    };

    /**
     * Returns a collection of all variation groups assigned to this variation
     * master product. All variation groups are returned regardless of whether
     * they are online or offline. If this product does not represent a
     * variation master product then an empty collection is returned.
     * @return {Collection} Collection of variation groups associated with this
     * variation master product.
     */
    Product.prototype.getVariationGroups = function () {
        return this.variationGroups;
    };

    /**
     * Returns the variation model of this product. If this is a master product,
     * then the returned model will encapsulate all the information about its
     * variation attributes and variants. If this product is a variant product,
     * the returned model will encapsulate all the same information, but
     * additional pre-select all the variation attribute values of this variant.
     * (See ProductVariationModel for details on 'selected' means). If this
     * product is neither a master product or a variation product, then a model
     * will be returned but will be essentially empty and not useful for any
     * particular purpose.
     * @return {ProductVariationModel} the variation model of the product.
     */
    Product.prototype.getVariationModel = function () {
        return this.variationModel;
    };

    /**
     * Indetifies if the specified product participates in this product bundle.
     * If this product does not represent a bundle at all, then false always
     * be returned.
     * @param  {Product} product the product to check for participation.
     * @return {Boolean}         true if the product participates in the bundle,
     * false otherwise.
     */
    Product.prototype.includedInBundle = function (product) {
        var includedInBundle = false;

        return includedInBundle;
    };

    /**
     * Returns 'true' if item is assigned to specified category.
     * @param  {Category}  category the category to check
     * @return {Boolean}          true if item is assigned to category.
     */
    Product.prototype.isAssignedToCategory = function (category) {
        var isAssigned = false;

        return isAssigned;
    };

    /**
     * Returns 'true' if the product is assigned to current site (via the site
     * catalog), false otherwise.
     * @return {Boolean} 'true' if the product assigned to site.
     */
    Product.prototype.isAssignedToSiteCatalog = function () {
        return this.assignedToSiteCatalog;
    };

    /**
     * Identifies if this product instance is a product bundle.
     * @return {Boolean} true if product is a bundle, false otherwise.
     */
    Product.prototype.isBundle = function () {
        return this.bundle;
    };

    /**
     * Identifies if this product is bundled within at least one product bundle.
     * @return {Boolean} true if the product is bundled, false otherwise.
     */
    Product.prototype.isBundled = function () {
        return this.bundled;
    };

    /**
     * Identifies if this product is bound to at least one catalog category.
     * @return {Boolean} true if the product is bound to at least one catalog
     * category, false otherwise.
     */
    Product.prototype.isCategorized = function () {
        return this.categorized;
    };

    /**
     * Identifies if the product is facebook enabled.
     * @return {Boolean} the value of attribute 'facebookEnabled'
     */
    Product.prototype.isFacebookEnabled = function () {
        return this.facebookEnabled;
    };

    /**
     * Identifies if this product instance is a product master.
     * @return {Boolean} true if the product is a master, false otherwise.
     */
    Product.prototype.isMaster = function () {
        return this.master;
    };

    /**
     * Returns the online status of the product. The online status is calculated
     * from the online status flag and the onlineFrom onlineTo dates defined for
     * the product.
     * @return {Boolean} the online status of the product.
     */
    Product.prototype.isOnline = function () {
        return this.online;
    };

    /**
     * Identifies if the product has options.
     * @return {Boolean} true if the product has options, false otherwise
     */
    Product.prototype.isOptionProduct = function () {
        return this.optionProduct;
    };

    /**
     * Identifies if the product is Pinterest enabled.
     * @return {Boolean} the value of the attribute 'pinterestEnabled'.
     */
    Product.prototype.isPinterestEnabled = function () {
        return this.pinterestEnabled;
    };

    /**
     * Returns 'true' if the instance represent a product. Returns 'false' if
     * the instance represents a product set.
     * @return {Boolean} true if the instance if a product, false otherwise.
     */
    Product.prototype.isProduct = function () {
        return this.product;
    };

    /**
     * Returns 'true' if the instance represents a product set, otherwise
     * 'false'.
     * @return {Boolean} true if the instance is a product set, false otherwise.
     */
    Product.prototype.isProductSet = function () {
        return this.productSet;
    };

    /**
     * Returns true if this product is part of any product set, otherwise false.
     * @return {Boolean} true if the product is part of any product set,
     * false otherwise.
     */
    Product.prototype.isProductSetProduct = function () {
        return this.productSetProduct;
    };

    /**
     * Identifies if the product is searchable.
     * @return {Boolean} the value of the attribute 'searchable'.
     */
    Product.prototype.isSearchable = function () {
        return this.searchable;
    };

    /**
     * Identifies if this product instance is mastered by a product master.
     * @return {Boolean} true if the product is mastered, false otherwise.
     */
    Product.prototype.isVariant = function () {
        return this.variant;
    };

    /**
     * Identifies if this product instance is a variation group product.
     * @return {Boolean} true if the product is a variation group product, false
     * otherwise.
     */
    Product.prototype.isVariationGroup = function () {
        return this.variationGroup;
    };

    /**
     * Set the online status flag of the product for the current site. If the
     * current site is not available (i.e. in case this method is called by a
     * job that runs on organization level) the online flag is set global, which
     * can affect all sites.
     *
     * In previous versions this method set the online status flag global,
     * instead of site specific.
     * @param {Boolean} online online status flag.
     */
    Product.prototype.setOnlineFlag = function (online) {
        // @TODO
    };

    /**
     * Set the flag indicating whether the product is searchable or not in
     * context of the current site. If current site is not available (i.e. in
     * case this method is called by a job that runs on organization level) the
     * searchable flag is set global, which can affect all sites.
     *
     * In previous versions this method set the searchable flag global, instead
     * of site specific.
     * @param {Boolean} searchable The value of the attribute 'searchable'.
     */
    Product.prototype.setSearchableFlag = function (searchable) {
        // @TODO:
    };

    /**
     * Set the product's search placement classification in context of the
     * current site. If current site is not available (i.e. in case this method
     * is called by a job that runs on organization level) the search placement
     * is set global, which can affect all sites.
     *
     * In previous versions this method set the search placement classification
     * global, instead of site specific.
     * @param {Number} placement The product's search placement classification.
     */
    Product.prototype.setSearchPlacement = function (placement) {
        // @TODO:
    };

    /**
     * Set the product's search rank in context of the current site. If current
     * site is not available (i.e. in case this method is called by a job that
     * runs on organization level) the search rank is set global, which can
     * affect all sites.
     *
     * In previous versions this method set the search rank global, instead of
     * site specific.
     * @param {Number} rank The product's search rank.
     */
    Product.prototype.setSearchRank = function (rank) {
        // @TODO:
    };

    // ======================== CUSTOMIZATION =================================
    // const publicFields = {
    //     ID: true,
    //     name: true,
    //     brand: true,
    //     longDescription: true,
    //     shortDescription: true,
    //     stepQuantiry: true,
    //     storeReceiptName: true,
    //     priceModel: true,
    //     productId: true,
    //     productPriceModelId: true
    // };

    Product.beforeRemote('findById', function (ctx, modelInstance, next) {
        // ctx.args.filter = {
        //     fields: publicFields,
        //     include: ''
        // };

        if (ctx.req.query.expand) {
            var expand = ctx.req.query.expand.split(',');
            ctx.args.filter = {
                include: expand
            };
        };

        next();
    });

    /**
     * This is a test method
     * @param {Function(Error)} callback
     */
    Product.prototype.testMethod = function (callback) {
        this.priceModel.create({
            basePriceQuantity: 1,
            maxPrice: 1000000,
            minPrice: 10000,
            priceInfos: [],
            priceRange: false
        }, function (err, priceModel) {
            if (err) {
                console.log(err);
            }

            console.log(priceModel);
        });
        callback(null, 'OK');
    };

    Product.testStaticGreet2 = function (msg, callback) {
        callback(null, 'Hello ' + msg);
    };

    Product.remoteMethod('testStaticGreet2', {
        http: {
            path: '/sayhi',
            verb: 'get'
        },
        accepts: {
            arg: 'msg',
            type: 'string'
        },
        returns: {
            arg: 'results',
            type: 'string'
        }
    });

    /**
     * This is a test method
     * @param {Function(Error)} callback
     */
    Product.prototype.availability = function (inventory_ids, locale, callback) {
        callback(null, this.getAvailabilityModel());
    };

    // Product.prototype.images = function (all_images, locale, variation_attribute, view_type, callback) {
    //     // var ImageGroup = app.models.ImageGroup,
    //     //     imageGroup = new ImageGroup();

    //     // imageGroup.view_type = 'hi-res';
    //     // imageGroup.images = [];
    //     // imageGroup.variation_attributes = [{
    //     //     dexter: 'Nguyen Van Lich'
    //     // }];

    //     // console.log(this);

    //     // callback(null, imageGroup);
    // };

    //================== Original methods ====================================
    function getMock(currentMethod) {
        return require('./mock/' + currentMethod.callee.name.slice(3) + '.json');
    }

    Product.getDesireDetail = function getDesireDetail(callback) {
        callback(null, getMock(arguments));
    };

    Product.getPriceFilter = function getPriceFilter(callback) {
        callback(null, getMock(arguments));
    };

    Product.getFilterProductCatalogues = function getFilterProductCatalogues(callback) {
        callback(null, getMock(arguments));
    };

    Product.getProductComments = function getProductComments(callback) {
        callback(null, getMock(arguments));
    };

    Product.getFollowingDesireList = function getFollowingDesireList(callback) {
        callback(null, getMock(arguments));
    };

    Product.getDesireList = function getDesireList(callback) {
        callback(null, getMock(arguments));
    };
};
