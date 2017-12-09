'use strict';

const async = require('async');

module.exports = function (app) {
    var mongoDs = app.dataSources.mongoDs,
        mysqlDs = app.dataSources.mysql;

    function createReviewers(callback) {
        mongoDs.automigrate('Reviewer', (err) => {
            if (err) {
                throw err;
            }

            var Reviewer = app.models.Reviewer;

            Reviewer.create([{
                email: 'foo@bar.com',
                password: 'foobar'
            }, {
                email: 'john@doe.com',
                password: 'johndoe'
            }, {
                email: 'jane@doe.com',
                password: 'janedoe'
            }], callback);
        });
    }

    function createCoffeeShops(callback) {
        mysqlDs.automigrate('CoffeeShop', (err) => {
            if (err) {
                throw err;
            }

            var CoffeeShop = app.models.CoffeeShop;

            CoffeeShop.create([{
                name: 'Bel Cafe',
                city: 'Vancouver'
            }, {
                name: 'Three Bees Coffee House',
                city: 'San Mateo'
            }, {
                name: 'Caffe Artigiano',
                city: 'Vancouver'
            }], callback);
        });
    }

    function createReviews(reviewers, coffeeShops, callback) {
        mongoDs.automigrate('Review', (err) => {
            if (err) {
                return callback(err);
            }

            var Review = app.models.Review;
            const DAY_IN_MILLISECONDS = 1000 * 60 * 60 * 24;

            Review.create([{
                date: Date.now() - (DAY_IN_MILLISECONDS * 4),
                rating: 5,
                comments: 'A very good coffee shop.',
                publisherId: reviewers[0].id,
                coffeeShopId: coffeeShops[0].id
            }, {
                date: Date.now() - (DAY_IN_MILLISECONDS * 3),
                rating: 5,
                comments: 'Quite pleasant.',
                publisherId: reviewers[1].id,
                coffeeShopId: coffeeShops[0].id
            }, {
                date: Date.now() - (DAY_IN_MILLISECONDS * 2),
                rating: 4,
                comments: 'It was ok.',
                publisherId: reviewers[1].id,
                coffeeShopId: coffeeShops[1].id
            }, {
                date: Date.now() - (DAY_IN_MILLISECONDS),
                rating: 4,
                comments: 'I go here everyday.',
                publisherId: reviewers[2].id,
                coffeeShopId: coffeeShops[2].id
            }], callback);
        });
    }

    async.parallel({
        reviewers: async.apply(createReviewers),
        coffeeShops: async.apply(createCoffeeShops)
    }, (err, results) => {
        if (err) {
            throw err;
        }

        createReviews(results.reviewers, results.coffeeShops, (err) => {
            console.log('> Models created sucessfully.');
        });
    })
};
