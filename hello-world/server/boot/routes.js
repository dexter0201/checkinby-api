'use strict';

const path = require('path');

module.exports = function (app) {
    global.rootPath = path.resolve(__dirname + '/../../');
    var productRouter = require(global.rootPath + '/server/router/product')(app);

    app.use('/dxproducts/', productRouter);
};
