'use strict';

const path = require('path');

var app = require(path.resolve(__dirname, '../server/server'));
var ds = app.datasources.accountDS;

ds.automigrate('Account', (err) => {
    if (err) {
        throw err;
    }

    var accounts = [{
        email: 'john.doe@ibm.com',
        createdAt: new Date(),
        lastModifiedAt: new Date()
    }, {
        email: 'jane.doe@ibm.com',
        createdAt: new Date(),
        lastModifiedAt: new Date()
    }];
    var count = accounts.length;

    accounts.forEach((account) => {
        app.models.Account.create(account, (err, model) => {
            if (err) {
                throw err;
            }

            console.log('Created:', model);

            count--;
            if (!count) {
                ds.disconnect();
            }
        });
    });
});
