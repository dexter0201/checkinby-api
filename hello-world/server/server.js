'use strict';

const path = require('path');
var loopback = require('loopback');
var boot = require('loopback-boot');

var app = module.exports = loopback();

global.rootPath = path.resolve(__dirname);

app.start = function() {
    // start the web server
    return app.listen(function() {
        app.emit('started');
        var baseUrl = app.get('url').replace(/\/$/, '');

        console.log('Web server listening at: %s', baseUrl);

        if (app.get('loopback-component-explorer')) {
            var explorerPath = app.get('loopback-component-explorer').mountPath;
            console.log('Browse your REST API at %s%s', baseUrl, explorerPath);
        }
    });
};

// Bootstrap the application, configure models, datasources and middleware.
// Sub-apps like REST API are mounted via boot scripts.
boot(app, __dirname, function (err) {
    if (err) {
        throw err;
    }

    app.use('/express-status', (req, res, next) => {
        res.json({
            running: true
        });
    });

    // start the server if `$ node server.js`
    if (require.main === module) {
        app.start();
    }
});
