var port = 3008;

var http = require('http');
var url = require('url');

// 响应返回json对象
var server = http.createServer(function (request, response) {
    if ('/favicon.ico' === request.url) { return; }
    var parseUrl = url.parse(request.url, true);

    response.writeHead(200, { 'Content-Type': 'application/json' });
    response.end(JSON.stringify(parseUrl.query));
});

server.listen(port, '127.0.0.1');

console.log('Server started on localhost ' + port);
