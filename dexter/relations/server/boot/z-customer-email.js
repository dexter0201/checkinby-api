'use strict';

const async = require('async');

module.exports = function (server, callback) {
    var Customer = server.models.Customer;
    var emails = [{
        label: 'work',
        address: 'larry@xyz.com'
    }, {
        label: 'home',
        address: 'larry@gmail.com'
    }];

    Customer.create({
        name: 'Larry Smith'
    }, (err, customer) => {
        if (err) {
            throw err;
        }

        console.log('Customer:', customer);
        async.each(emails, (email, done) => {
            customer.emails.create(email, done);
        }, (err) => {
            console.log('Customer with emails: ', customer);


            console.log('Customer with emails:', customer);
            var id1 = customer.emailList[0].id;
            var id2 = customer.emailList[1].id;

            async.series([
                // Find an email by id
                function (done) {
                    customer.emails.get(id1, (err, email) => {
                        if (err) {
                            throw err;
                        }

                        console.log('Email:', email);
                    });
                    done();
                },
                function (done) {
                    customer.emails.set(id2, {
                        label: 'home',
                        address: 'larry@yahoo.com'
                    }, (err, email) => {
                        if (err) {
                            throw err;
                        }
                        done();
                    });
                },
                // Remove an email by id
                function (done) {
                    customer.emails.unset(id1, (err) => {
                        if (err) {
                            throw err;
                        }
                        done();
                    });
                }
            ], (err) => {
                console.log('Customer with emails:', customer);
                callback(err)
            });

        });
    });
};
