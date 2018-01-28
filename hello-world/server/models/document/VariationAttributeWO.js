'use strict';

var Class = require(global.rootPath + '/scripts/util/Class').Class;
var VariationAttributeWO = Class.extend({
    init: function () {
        this.id = null;         // String. mandatory=true, minLength=1, nullable=false. The id of the variation attribute.
        this.name = null;       // Localized<String>. The localized display name of the variation attribute.
        this.values = [];       // [VariationAttributeValue]. The sorted array of variation values. This array can be empty.
    }
});

module.exports = VariationAttributeWO;
