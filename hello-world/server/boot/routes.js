'use strict';

module.exports = function (app) {
    var router = app.loopback.Router();

    router.get('/ping', (req, res) => {
        res.send('pongroor');
    });

    app.use(router);
};
