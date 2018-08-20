var http = require('http');

var server = {
    __responseType: 'TEXT',
    setResponseType: function (responseType) {
        this.__responseType = responseType.toUpperCase();
        return server;
    },
    __listen: 80,
    setListen: function (listen) {
        this.__listen = listen;
        return server;
    },
    __host: '127.0.0.1',
    setHost: function (host) {
        this.__host = host;
        return server;
    },
    __server: undefined,
    startSever: function (callback) {
        var _server = http.createServer(function (request, response) {
            var contentType;
            switch (server.__responseType) {
                case 'JSON':
                    contentType = 'application/json';
                    break;
                case 'HTML':
                    contentType = 'text/html';
                    break;
                default:
                    contentType = 'text/plain';
                    break;
            }

            response.writeHead(200, {
                'Content-Type': contentType
            });
            switch (server.__responseType) {
                case 'JSON':
                    response.end(JSON.stringify(callback(request, response)));
                    break;
                default:
                    var R = callback(request, response);
                    if (R !== undefined && R !== null) {
                        response.end(callback(request, response));
                    }
                    break;
            }
        });
        _server.listen(server.__listen, server.__host);
    }
}
module.exports = server;