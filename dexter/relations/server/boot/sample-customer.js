'use strict';

module.exports = function (server) {
    var Customer = server.models.Customer;
    var Order = server.models.Order;

    // Define a custom scope
    Customer.scope('youngFolks', {
        where: {
            age: {
                lte: 22
            }
        }
    });
    server.dataSources.db.automigrate('Customer', (err) => {
        if (err) {
            throw err;
        }

        var customers = [{
            name: 'Customer A',
            age: 21
        }, {
            name: 'Customer B',
            age: 22
        }, {
            name: 'Customer C',
            age: 23
        }, {
            name: 'Customer D',
            age: 24
        }];
        var orders = [{
            description: 'First order by Customer A',
            date: '01-01-2015'
        }, {
            description: 'Second order by Customer B',
            date: '02-01-2015'
        }, {
            description: 'First order by Customer C',
            date: '03-01-2015'
        }, {
            description: 'First order by Customer D',
            date: '04-01-2015'
        }];

        Customer.create(customers[0], function (err, instance) {
            if (err) return console.error(err);
            console.log('Customer created: ', instance);
            orders[0].customerId = instance.id;
            orders[1].customerId = instance.id;
            Order.create(orders[0], function (err, instance) {
                if (err) return console.error(err);
                console.log('Order created: ', instance);
            });
            Order.create(orders[1], function (err, instance) {
                if (err) return console.error(err);
                console.log('Order created: ', instance);
            });
        });
        Customer.create(customers[1], function (err, instance) {
            if (err) return console.error(err);
            console.log('Customer created: ', instance);
            orders[2].customerId = instance.id;
            Order.create(orders[2], function (err, instance) {
                if (err) return console.error(err);
                console.log('Order created: ', instance);
            });
        });
        Customer.create(customers[2], function (err, instance) {
            if (err) return console.error(err);
            console.log('Customer created: ', instance);
            orders[3].customerId = instance.id;
            Order.create(orders[3], function (err, instance) {
                if (err) return console.error(err);
                console.log('Order created: ', instance);
            });
        });
        Customer.create(customers[3], function (err, instance) {
            if (err) return console.error(err);
            console.log('Customer created: ', instance);
            instance.orders.create(orders[4], function (err, instance) {
                if (err) return console.error(err);
                console.log('Order created: ', instance);
                instance.shipments.create({
                    date: new Date(),
                    description: 'Shipment'
                },
                function (err, instance) {
                    if (err) return console.error(err);
                    console.log('Shipment created: ', instance);
                });
            });
        });
    });
};
