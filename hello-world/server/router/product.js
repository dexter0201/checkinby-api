'use strict';

var ProductController = require(global.rootPath + '/controllers/Product');

module.exports = function (app) {
    var productController = new ProductController(app);
    var router = app.loopback.Router();

    router.route('/:id')
        .get(function (req, res) {
            productController.getProductDetails(
                req.params.id, (err, product) => {
                    res.send(product);
                }
            );
        });

    return router;
};
