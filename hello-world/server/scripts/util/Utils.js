'use strict';

function Utils() {}

// dexterNguyen --> dexter_nguyen
Utils.camelCaseToSnack = function (name) {
    if (!!!name) {
        return '';
    }

    return name.replace(/([A-Z])/g, function ($1) {
        return '_' + $1.toLowerCase();
    });
};

// dexter_nguyen --> dexterNguyen
Utils.snackToCamelCase = function (name) {
    if (!!!name) {
        return '';
    }

    return name.toLowerCase().replace(/_(\w)/ig, function (match, hump) {
        return hump.toUpperCase();
    });
};

module.exports = Utils;
