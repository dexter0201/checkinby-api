'use strict';

var Class = require(global.rootPath + '/scripts/util/Class').Class;
var ImageGroupWO = Class.extend({
    init: function () {
        this.images = [];                   // [Image]. The images of the image group.
        this.variation_attributes = [];     // [VariationAttribute]. Returns a list of variation attributes applying to this image group.
        this.view_type = null;              // String. The image view type.
    }
});

module.exports = ImageGroupWO;
