var http = require('http');

// server 构建方式一
/*
var server = http.createServer(function (request, response) {
    console.log('Request received');
    response.writeHead(200, {
        'Content-Type': 'text/plain' // 声明文本
    });

    // response.write('Hello from out application');
    // response.end();

    response.end('Hello from out application');
});
*/


// server 构建方式二
// 响应返回文本
function onRequest(request, response) {
    console.log('Request received');
    response.writeHead(200, {
        'Content-Type': 'text/plain' // 声明文本
    });
    response.end('Hello function from out application');
}

var server = http.createServer(onRequest);


server.listen(3000, '127.0.0.1');
// server.listen(3000);
console.log('Server started on localhost 3000');
