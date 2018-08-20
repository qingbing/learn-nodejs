var http = require('http');

// 响应返回json对象
var server = http.createServer(function (request, response) {
    response.writeHead(200, {
        'Content-Type': 'application/json'
    });

    var rObj = {
        'name': 'qingbing',
        'version': '1.0'
    };
    response.end(JSON.stringify(rObj));
});

server.listen('3001', '127.0.0.1');

console.log('Server started on localhost 3001');
