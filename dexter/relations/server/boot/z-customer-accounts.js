'use strict';

const async = require('async');

module.exports = function (server, callback) {
    var Customer = server.models.Customer;
    var accounts = [{
        name: 'Checking',
        balance: 5000
    }, {
        name: 'Saving',
        balance: 2000
    }];

    Customer.create({
        name: 'Marry Smith'
    }, (err, customer) => {
        if (err) {
            throw err;
        }

        console.log('Customer: ', customer);
        async.each(accounts, (account, done) => {
            customer.accounts.create(account, done);
        }, (err) => {
            console.log('Customer with accounts: ', customer);
            customer.accounts(console.log);
            callback(err);
        });
    });
};
