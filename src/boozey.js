'use strict';

var request = require('request');

var baseUri = 'http://api.openbeerdatabase.com/v1/';

module.exports.version = '0.2.0';

module.exports.beer = {
    all: function (options) {
        options = options || {};
        return request.get(baseUri + 'beers.json', {
            qs: {
                token: options.token,
                order: (options.order || 'id') + ' ' + (options.dir || 'ASC'),
                page: options.page || 1,
                per_page: options.perPage || 50,
                query: options.query
            }
        });
    },
    get: function (id, token) {
        return request.get(baseUri + 'beers/' + id + '.json', {
            qs: {
                token: token
            }
        });
    }
};

module.exports.brewery = {
    all: function (options) {
        options = options || {};
        return request.get(baseUri + 'breweries.json', {
            qs: {
                token: options.token,
                order: (options.order || 'id') + ' ' + (options.dir || 'ASC'),
                page: options.page || 1,
                per_page: options.perPage || 50,
                query: options.query
            }
        });
    },
    get: function (id, token) {
        return request.get(baseUri + 'breweries/' + id + '.json', {
            qs: {
                token: token
            }
        });
    }
};