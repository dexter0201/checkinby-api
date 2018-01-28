'use strict';

var Class = require(global.rootPath + '/scripts/util/Class').Class;
var VariationAttributeValueWO = Class.extend({
    init: function () {
        this.description = null;        // Localized<String>. The localized description of the variation value.
        this.image = null;              // Image. The first product image for the configured viewtype and this variation value.
        this.image_swatch = null;       // Image. The first product image for the configured viewtype and this variation value. (typically the swatch image)
        this.name = null;               // Localized<String>. The localized display name of the variation value.
        this.orderable = false;         // Boolean. A flag indicating whether at least one variant with this variation attribute value is available to sell.
        this.value = null;              // String. mandatory=true, minLength=1, nullable=false. The actual variation value.
    }
});

module.exports = VariationAttributeValueWO;
