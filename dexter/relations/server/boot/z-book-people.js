'use strict';

const async = require('async');

module.exports = function (server, callback) {
    var Book = server.models.Book;
    var Author = server.models.Author;
    var Reader = server.models.Reader;
    var author, reader;

    async.series([
        function createAuthor(done) {
            Author.create({
                name: 'Author 1'
            }, (err, people) => {
                author = people;
                done(err, people);
            });
        },
        function createReader(done) {
            Reader.create({
                name: 'Reader 1'
            }, (err, people) => {
                reader = people;
                done(err, people);
            });
        },
        function createBook(done) {
            Book.create({
                name: 'Book 1'
            }, (err, book) => {
                if (err) {
                    throw err;
                }

                var link1 = book.people.build({
                    notes: 'Note 1'
                });
                var link2 = book.people.build({
                    notes: 'Note 2'
                });

                link1.linked(author);
                link2.linked(reader);
                console.log('Book: ', book);
                book.save(done);
            });
        }
    ], (err) => {
        console.log('done');
        callback(err);
    });
};
