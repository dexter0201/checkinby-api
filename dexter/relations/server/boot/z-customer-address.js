'use strict';

module.exports = function (server) {
    var Customer = server.models.Customer;
    var address = {
        street: '123 A St',
        city: 'San Jose',
        state: 'CA',
        zipCode: '95131'
    };

    Customer.create({
        name: 'John Smith'
    }, (err, customer) => {
        if (err) {
            throw err;
        }

        console.log('Customer: ', customer);
        customer.address.create(address, (err, address) => {
            if (err) {
                throw err;
            }

            console.log('Address', address);
            console.log('Customer with address:', customer);
        });
    });
};
