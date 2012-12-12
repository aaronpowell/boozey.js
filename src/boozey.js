'use strict';

var request = require('request');

var baseUri = 'http://api.openbeerdatabase.com/v1/';

module.exports.version = '0.1.0';

module.exports.beers = {
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