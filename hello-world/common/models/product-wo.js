'use strict';

module.exports = function (ProductWO) {
    ProductWO.getProductWODetail = function (callback) {
        callback(null, {
            dexter: 'Nguyen Van Lich'
        });
    };
};
