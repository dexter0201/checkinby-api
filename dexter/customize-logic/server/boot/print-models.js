'use strict';

module.exports = function (server) {
    var models = [];

    Object.keys(server.models).forEach((model) => {
        var moduleName = server.models[model].modelName;

        if (!!!~models.indexOf(moduleName)) {
            models.push(moduleName);
        }
    });

    console.log('Models: ', models);
};
