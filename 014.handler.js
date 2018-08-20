var fs = require('fs');
// 主机图标
function favicon(request, response) {
    console.log('favicon');
}
// 主页路由
function home(request, response) {
    response.writeHead(200, { 'Content-Type': 'text/html' });
    var readStream = fs.createReadStream(__dirname + '/route.home.html', 'utf8').pipe(response);
}
// 文本路由
function text(request, response) {
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    response.end('This is a text!');
}
// api 路由
function api(request, response) {
    response.writeHead(200, { 'Content-Type': 'application/json' });
    response.end(JSON.stringify({ 'name': 'qingbing', 'version': '2.0.1' }));
}

// 接口暴露
module.exports = {
    'favicon': favicon,
    'home': home,
    'text': text,
    'api': api
}