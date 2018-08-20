var http = require('http');
var fs = require('fs');

// 响应返回html
var server = http.createServer(function (request, response) {
    console.log('request received');
    response.writeHead(200, {
        'Content-Type': 'text/html'
    });

    /*
    var html = '<!DOCTYPE html>' +
    '<html lang="en">' +
    '<head>' +
    '<meta charset="UTF-8">' +
    '<meta name="viewport" content="width=device-width, initial-scale=1.0">' +
    '<meta http-equiv="X-UA-Compatible" content="ie=edge">' +
    '<title>Document</title>' +
    '</head>' +
    '<body>' +
        
    '<p> this is html returning. </p>' +
        
    '</body>' +
    '</html>';
    response.end(html);
    */

    var readStream = fs.createReadStream(__dirname + '/temp.html', 'utf8');
    readStream.pipe(response);
});

server.listen('3002', '127.0.0.1');

console.log('Server started on localhost 3002');