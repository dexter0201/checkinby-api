'use strict';

var Class = require(global.rootPath + '/server/scripts/util/Class').Class;
var ProductController = Class.extend({
    init: function (app) {
        this.model = app.models.Product;
    },

    getProductDetails: function (id, callback) {
        this.model.findById(
            id, {
                include: ['priceModel']
            },
            (err, result) => {
                if (err) {
                    callback(err, null);
                } else {
                    console.log('res ', result.priceModel().getPrice());
                    // result.priceModel.getPrice();
                    callback(null, result);
                }
            }
        );
    }
});

module.exports = ProductController;
