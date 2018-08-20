
var fs = require('fs');

var route = function (request, response, handlers) {
    console.log(request.url);
    console.log(handlers);
    if (typeof handlers[request.url] === 'function') {
        handlers[request.url](request, response);
    } else {
        response.writeHead(404, { 'Content-Type': 'text/plain' });
        response.end('This is error return!');
    }
};

module.exports.route = route;