'use strict';

module.exports = function (app) {
    var productRouter = require(global.rootPath + '/router/product')(app);

    app.use('/api/products/', productRouter);
};
