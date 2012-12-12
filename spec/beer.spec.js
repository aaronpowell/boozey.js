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

        boozey.beers.get(3).pipe(writableStream);
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

        boozey.beers.all().pipe(writableStream);
    });
});