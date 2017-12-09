'use strict';

module.exports = function (CoffeeShop) {
    CoffeeShop.status = function (callback) {
        const OPEN_HOUR = 8;
        const CLOSE_HOUR = 20;
        var currentHours = new Date().getHours(),
            msg = '';

        console.log('Current hour is %d', currentHours);

        if (currentHours >= OPEN_HOUR && currentHours < CLOSE_HOUR) {
            msg = 'We are in the business time';
        } else {
            msg = 'Sorry!!! We are closed';
        }

        callback(null, msg);
    };

    CoffeeShop.remoteMethod('status', {
        http: {
            path: '/status',
            verb: 'get'
        },
        returns: {
            arg: 'status',
            type: 'string'
        }
    });

    CoffeeShop.getName = function (shopId, callback) {
        this.findById(shopId, function (err, result) {
            if (err) {
                throw err;
            }

            callback(null, 'Your shop is ' + result.name);
        });
    };

    CoffeeShop.remoteMethod('getName', {
        http: {
            path: '/getname',
            verb: 'post'
        },
        accepts: {
            arg: 'id',
            type: 'number',
            http: {
                source: 'query'
            }
        },
        returns: {
            arg: 'name',
            type: 'string'
        }
    });
};
