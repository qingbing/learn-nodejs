var http = require('http');
var fs = require('fs');

// 响应返回html
var server = http.createServer(function (request, response) {
    var url = request.url;
    console.log(url);
    switch (url) {
        case '/favicon.ico':
            break;
        case '/':
        case '/home':
            response.writeHead(200, { 'Content-Type': 'text/html' });
            var readStream = fs.createReadStream(__dirname + '/route.home.html', 'utf8').pipe(response);
            break;
        case '/api':
            response.writeHead(200, { 'Content-Type': 'application/json' });
            response.end(JSON.stringify({ 'name': 'qingbing', 'version': '2.0.1' }));
            break;
        case '/text':
            response.writeHead(200, { 'Content-Type': 'text/plain' });
            response.end('This is a text!');
            break;
        default:
            response.writeHead(404, { 'Content-Type': 'text/plain' });
            response.end('This is error return!');
            break;
    }
});

server.listen('3006', '127.0.0.1');

console.log('Server started on localhost 3006');