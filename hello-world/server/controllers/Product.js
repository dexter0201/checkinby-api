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
                include: [{
                    storeGroup: 'stores'
                }, {
                    relation: 'priceModel',
                    scope: {
                        fields: ['id', 'price']
                    }
                }]
            },
            (err, product) => {
                if (err) {
                    callback(err, null);
                } else {
                    // console.log(product);
                    var productwo = product.toDocument();
                    product.storeGroup({
                        include: 'stores'
                    }, function (err, storeGroup) {
                        //console.log(storeGroup);
                    });

                    callback(null, productwo);
                }
            }
        );
    }
});

module.exports = ProductController;
