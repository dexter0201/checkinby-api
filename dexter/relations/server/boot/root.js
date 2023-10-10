'use strict';

module.exports = function (server) {
    // Install a `/` route that returns server status
    var router = server.loopback.Router();

    router.get('/', (req, res, next) => {
        server.models.Customer.findOne({
            where: {
                name: 'Customer A'
            }
        }, (err, customer) => {
            if (err) {
                // return next(err);
                customer = {
                    id: -1,
                    name: 'Fake customer'
                };
            }

            res.render('index', {
                customer: customer
            });
        });
    });

    router.get('/email', (req, res, next) => {
        server.models.Customer.findOne({
            where: {
                name: 'Larry Smith'
            }
        }, (err, customer) => {
            if (err) {
                return next(err);
            }

            res.render('email', {
                customer: customer
            });
        });
    });

    router.get('/address', (req, res, next) => {
        server.models.Customer.findOne({
            where: {
                name: 'John Smith'
            }
        }, (err, customer) => {
            if (err) {
                throw err;
            }

            res.render('address', {
                customer: customer
            });
        });
    });

    router.get('/account', (req, res, next) => {
        server.models.Customer.findOne({
            where: {
                name: 'Marry Smith'
            }
        }, (err, customer) => {
            if (err) {
                throw err;
            }

            res.render('account', {
                customer: customer
            });
        });
    });

    server.use(router);
};
