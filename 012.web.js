var server = require('./012.server');

/*
// TEXT
server.setHost('127.0.0.1')
    .setListen(3005)
    .setResponseType('text')
    .startSever(function (request, response) {
        return 'hahah';
    });
*/

/*
// JSON
server.setHost('127.0.0.1')
    .setListen(3005)
    .setResponseType('json')
    .startSever(function (request, response) {
        return {
            'name': 'what',
            'version': '1.001'
        };
    });
*/

// HTML
server.setHost('127.0.0.1')
    .setListen(3005)
    .setResponseType('html')
    .startSever(function (request, response) {
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
        return html;
    });