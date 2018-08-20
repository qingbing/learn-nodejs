var port = 3009;

var http = require('http');
var url = require('url');
var fs = require('fs');
var queryString = require('querystring');

// 响应返回json对象
var server = http.createServer(function (request, response) {
    switch (request.url) {
        case '/favicon.ico':
            break;
        case '/':
        case '/home':
            response.writeHead(200, { 'Content-Type': 'text/html' });
            fs.createReadStream(__dirname + '/015.form.html', 'utf8').pipe(response);
            break;
        default:
        case '/post':
            // var data = '';
            var data = [];
            request.on('error', function (err) {
                console.error(err);
            }).on('data', function (chunk) {
                // data += chunk;
                data.push(chunk);
            }).on('end', function () {
                // 获取get
                var RData = {};
                var getData = url.parse(request.url, true).query;
                RData['getData'] = getData;
                if (request.method === 'POST') {
                    // var postData = queryString.parse(data);
                    if (data.length > 1e6) {// 当数据传输过大，销毁连接，以免数据过大撑爆服务器
                        request.connection.destroy();
                    }
                    var postData = queryString.parse(Buffer.concat(data).toString());

                    RData['postData'] = postData;
                    var allData = Object.assign({}, getData, postData);
                    RData['allData'] = allData;
                }

                response.writeHead(200, { 'Content-Type': 'application/json' });
                response.end(JSON.stringify(RData));
            })
            break;
    }

});

server.listen(port, '127.0.0.1');

console.log('Server started on localhost ' + port);
