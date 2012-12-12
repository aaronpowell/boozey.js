var expect = require('chai').expect;
var boozey = require('../src/boozey.js');
var stream = require('stream');

require('./helper.js');

describe('brewery spec', function () {
    it('should get by id', function (done) {
        var writableStream = new stream.Stream();
        writableStream.writable = true;

        var args = [];

        writableStream.write = function (data) {
            args.push(data);
        };
        writableStream.end = function () {
            expect(args[0]).to.equal('http://api.openbeerdatabase.com/v1/breweries/3.json');
            done();
        };

        boozey.brewery.get(3).pipe(writableStream);
    });

    it('should allow to get all', function (done) {
        var writableStream = new stream.Stream();
        writableStream.writable = true;

        var args = [];

        writableStream.write = function (data) {
            args.push(data);
        };
        writableStream.end = function () {
            expect(args[0]).to.equal('http://api.openbeerdatabase.com/v1/breweries.json');
            done();
        };

        boozey.brewery.all().pipe(writableStream);
    });

    it('should have options provided to a get all request', function (done) {
        var writableStream = new stream.Stream();
        writableStream.writable = true;

        var args = [];

        writableStream.write = function (data) {
            args.push(data);
        };
        writableStream.end = function () {
            expect(args[1].qs.query).to.equal('Abita');
            done();
        };

        boozey.brewery.all({
            query: 'Abita'
        }).pipe(writableStream);
    });
});