'use strict';

module.exports = function (Car) {
    /**
     * Define a remote method.
     * @param  {[type]}   sound    [description]
     * @param  {Function} callback [description]
     * @return {[type]}            [description]
     */
    Car.revEngine = function (sound, callback) {
        console.log('Running ... revEngine.');
        callback(null, [sound, sound, sound].join(' '));
    };

    Car.remoteMethod(
        'revEngine', {
            accepts: [{
                arg: 'sound',
                type: 'string'
            }],
            returns: {
                arg: 'engineSound',
                type: 'string'
            },
            http: {
                path: '/rev-engine',
                verb: 'post'
            }
        }
    );
    // === END === //

    /**
     * Define a remote method before hook
     * @param  {[type]} 'revEngine' [description]
     * @param  {[type]} (context,   unused,       next [description]
     * @return {[type]}             [description]
     */
    Car.beforeRemote('revEngine', (context, unused, next) => {
        console.log('Putting in the car key, starting the engine.');
        next();
    });

    /**
     * Define a method after hook.
     * @param  {[type]} 'revEngine' [description]
     * @param  {[type]} (context,   remoteMethodOutput, next [description]
     * @return {[type]}             [description]
     */
    Car.afterRemote('revEngine', (context, remoteMethodOutput, next) => {
        console.log('Turning off the engine, removing the key.');
        next();
    });
};
