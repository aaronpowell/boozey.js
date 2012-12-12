var request = require('request');
var stream = require('stream');

request.get = function () {
    var s = new stream.Stream();
    var args = arguments;
    s.readable = true;
    process.nextTick(function () {
        s.emit('data', args[0]);
        s.emit('data', args[1]);
        s.emit('end');
    });

    return s;
};
