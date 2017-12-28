// 'use strict';

module.exports = function (Desire) {
    function getMock(currentMethod) {
        return require('./mock/' + currentMethod.callee.name.slice(3) + '.json');
    }

    Desire.getDesires = function getDesires(callback) {
        callback(null, getMock(arguments));
    };

    Desire.getOtherHaveDesires = function getOtherHaveDesires(callback) {
        callback(null, getMock(arguments));
    };
};
