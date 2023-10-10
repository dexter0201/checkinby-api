'use strict';

module.exports = function (ProductWO) {
    var app = require('../../server/server');

    ProductWO.beforeRemote('findById', function(ctx, modelInstace, next) {
        if (ctx.req.query.expand) {
            var expand = ctx.req.query.expand.split(',');
            ctx.args.filter = {
                include: expand
            };
        }

        next();
    });

    ProductWO.getProductWODetail = function (callback) {
        callback(null, {
            dexter: 'Nguyen Van Lich'
        });
    };

    ProductWO.prototype.images = function (all_images, locale, variation_attribute, view_type, callback) {
        var ImageGroup = app.models.ImageGroup,
            Image = app.models.Image,
            image = new Image(),
            imageGroup = new ImageGroup();

        image.alt = 'HP Toner Q7581A Cyan (6000 pages), , hi-res';
        image.link = 'https://cdn.weidesire.com/s3/buydesire/SiteContent/ProductImages/SwarovskiHK/Standard/SwarovskiHK_1032d48b-4806-49ce-b38c-02540364b409.jpg';
        image.title = 'HP Toner Q7581A Cyan (6000 pages), ';

        imageGroup.view_type = 'hi-res';
        imageGroup.images = [image];
        imageGroup.variation_attributes = [{
            dexter: 'Nguyen Van Lich'
        }];

        this.image_groups = [imageGroup];

        callback(null, this);
    };

    ProductWO.prototype.links = function (type, direction, locale, callback) {
        // var ProductLink = app.models.ProductLink,
        //     productLink = new ProductLink();

        // productLink.source_product_id = '5a486a0ee833e44be589f62b';
        // productLink.source_product_link = 'http://localhost:3000/api/products/5a486a0ee833e44be589f62b';
        // productLink.target_product_id = this.id;
        // productLink.target_product_link = 'https://<host>/api/products/<this.id>';
        // productLink.type = {
        //     up_sell: 0
        // };

        // this.product_links = [productLink];

        // callback(null, this);
        var productLink = this.product_links.build({
            "id": "Dexter222",
            "source_product_link" : "https://checkinby.com",
            "target_product_id" : "B1112166",
            "target_product_link" : "https://dexternguyen.com222",
            "type" : 0
        });

        this.product_links.create({
            "source_product_link" : "https://checkinby111.com",
            "target_product_id" : "B1112166",
            "target_product_link" : "https://dexternguyen.com111",
            "type" : 0
        },
          function(err, pl) {
            console.log('err', err);
          console.log('done', pl);
        });

        callback(null, productLink)
    };
};
