'use strict';

var request = require('request');

var baseUri = 'http://api.openbeerdatabase.com/v1/';

module.exports.beers = function (key, fn) {
    return request({
        url: baseUri + 'beers.json',
        qs: {
            token: key
        }
    }, fn);
}