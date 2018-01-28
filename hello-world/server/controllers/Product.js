'use strict';

var Class = require(global.rootPath + '/scripts/util/Class').Class;
var Utils = require(global.rootPath + '/scripts/util/Utils');
var ProductController = Class.extend({
    init: function (app) {
        this.model = app.models.Product;
    },

    getProductDetails: function (id, callback) {
        this.model.findById(
            id, {
                include: ['priceModel']
            },
            (err, product) => {
                if (err) {
                    callback(err, null);
                } else {
                    var productwo = product.toDocument();

                    callback(null, productwo);
                }
            }
        );
    }
});

module.exports = ProductController;
