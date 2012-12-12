var expect = require('chai').expect;
var boozey = require('../src/boozey.js');
var stream = require('stream');

require('./helper.js');

describe('beer spec', function () {
    it('should get by id', function (done) {
        var writableStream = new stream.Stream();
        writableStream.writable = true;

        var args = [];

        writableStream.write = function (data) {
            args.push(data);
        };
        writableStream.end = function () {
            expect(args[0]).to.equal('http://api.openbeerdatabase.com/v1/beers/3.json');
            done();
        };

        boozey.beer.get(3).pipe(writableStream);
    });

    it('should allow to get all', function (done) {
        var writableStream = new stream.Stream();
        writableStream.writable = true;

        var args = [];

        writableStream.write = function (data) {
            args.push(data);
        };
        writableStream.end = function () {
            expect(args[0]).to.equal('http://api.openbeerdatabase.com/v1/beers.json');
            done();
        };

        boozey.beer.all().pipe(writableStream);
    });

    it('should have options provided to a get all request', function (done) {
        var writableStream = new stream.Stream();
        writableStream.writable = true;

        var args = [];

        writableStream.write = function (data) {
            args.push(data);
        };
        writableStream.end = function () {
            expect(args[1].qs.query).to.equal('ale');
            done();
        };

        boozey.beer.all({
            query: 'ale'
        }).pipe(writableStream);
    });
});