'use strict';

var Class = require(global.rootPath + '/scripts/util/Class').Class;
var ProductWO = Class.extend({
    init: function () {
        this.brand = null;              // String. The product's brand.
        this.bundled_products = null;   // [BundledProduct]. The array of all bundled products of this product.
        this.currency = null;           // String. The ISO 4217 mnemonic code of the currency.
        this.ean = null;                // String. The European Article Number.
        this.id = null;                 // String. Mandatory=true, maxLength=100, minLength=1, nullable=false. The id (SKU) of the product.
        this.image_groups = null;       // [ImageGroup]. The array of product image groups.
        this.inventories = null;        // [Inventory]. The array of product inventories explicitly requested via 'inventory_ids' query parameter. This property is only returned in context of the 'availability' expansion.
        this.inventory = null;          // Inventory. The site default inventory information. This property is only returned in context of the 'availability' expansion.
        this.long_description = null;   // Localized<String>. The localized product long description.
        this.manufacturer_name = null;  // String. The products manufacturer name.
        this.manufacturer_sku = null;   // String. The products manufacturer sku.
        this.master = null;             // Master. The master product information. Only for types master, variation group and variant.
        this.min_order_quantity = null; // Decimal. The minimum order quantity for this product.
        this.name = null;               // Localized<String>. The localized product name.
        this.options = null;            // [Option]. The array of product options. This array can be empty. Only for type option.
        this.page_description = null;   // Localized<String>. The localized products page description.
        this.page_keywords = null;      // Localized<String>. The localized products page description.
        this.page_title = null;         // Localized<String>. The localized products page title.
        this.price = null;              // Decimal. The sales price of the product. In case of complex products like master or set this is the minimum price of related child products.
        this.price_max = null;          // Decimal. The maximum sales of related child products in case of complex products like master or set.
        this.prices = null;             // Map[String, Decimal]. The prices map with price book ids and their values.
        this.primary_category_id = null;// String. The id of the products primary category.
        this.product_links = null;      // [ProductLink]. The array of source and target products links information.
        this.product_promotions = null; // [ProductPromotion]. The array of active customer product promotions for this product. This array can be empty. Coupon promotions are not returned in this array.
        this.recommendations = null;    // [Recommendation]. Returns a list of recommendations.
        this.set_products = null;       // [Product]. The array of set products of this product.
        this.short_description = null;  // Localized<String>	 	The localized product short description.
        this.step_quantity = null;      // Decimal. The steps in which the order amount of the product can be increased.
        this.type = null;               // ProductType. The product type information. Can be one or multiple of the following values: item,master,variation_group,variant,bundle,set.
        this.unit = null;               // String. The sales unit of the product.
        this.upc = null;                // String. The Universal Product Code.
        this.variants = null;           // [Variant]. The array of actual variants. This array can be empty. Only for types master, variation group and variant.
        this.variation_attributes = null;// [VariationAttribute]. Sorted array of variation attributes information. This array can be empty. Only for types master, variation group and variant.
        this.variation_groups = null;   // [VariationGroup]. The array of actual variation groups. This array can be empty. Only for types master, variation group and variant.
        this.variation_values = null;   // Map[String, String]. The actual variation attribute id - value pairs. Only for type variant and variation group.
    },

    toBDModel: function (product) {

    }
});

module.exports = ProductWO;
