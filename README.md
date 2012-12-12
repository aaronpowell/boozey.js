# Boozey

[![Build Status](https://travis-ci.org/aaronpowell/boozey.js.png?branch=master)](https://travis-ci.org/aaronpowell/boozey.js)

Boozey is a library (and cli tool) for querying the [Open Beer Database](http://openbeerdatabase.com) API v1.

# Usage

You can use this in either node.js as a library or from the cli.

## Node.js

Get it from npm:

    npm install boozey

Use it as a package:

    var boozey = require('boozey');

    boozey.beers.all().pipe(process.stdout);

You can pass in any of the arguments as defined on the [website](http://openbeerdatabase.com/documentation/beers-get):

    boozey.beer.all({
        query: 'ale',
        order: 'id',
        dir: 'ASC',
        page: 1,
        perPage: 10,
        token: '<API token>'
    }).pipe(process.stdout);

To get back a single beer use the `get` method:

    boozey.beer.get(3).pipe(process.stdout);

If you want to query against breweries not beers then just change `beer` to `brewery`:

    boozey.brewery.get(3);

## cli

Install it as a global npm package:

    npm install -g boozey

    Usage: boozey [options] [command]

    Commands:

      beer                   Perform operations for beer
      brewery                Perform options for a brewery

    Options:

      -h, --help                 output usage information
      -V, --version              output the version number
      -t, --token <token>        API token
      -p, --pretty               Pretty print the result
      --page [page]              Page number to get
      -pp, --per-page [perPage]  Records per page
      --order-by [order]         Field to order by
      -d, --direction [dir]      Sort order direction, ASC or DESC
      -q, --query [query]        Query to use to filter the data set
      -i, --id <id>              Id of the specific beer to get

For example (pretty prints the first 5 beers):

    boozey beer -p -pp 5

# License

MIT

# Author

Aaron Powell