var http = require('http');

var router = require('./014.route.router');
var handlers = require('./014.handler');

var handlers = {
    '/favicon.ico': handlers.favicon,
    '/': handlers.home,
    '/home': handlers.home,
    '/text': handlers.text,
    '/api': handlers.api
};

// 响应返回html
var server = http.createServer(function (request, response) {
    router.route(request, response, handlers);
});

server.listen('3007', '127.0.0.1');

console.log('Server started on localhost 3007');