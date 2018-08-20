// 标准输入和标准输出也是一种流
// 所有的六都是 EventEmiiter 的实例，所以流可以放置一些监听的函数等
// 流可以处理数据，提高性能
var fs = require('fs');


// 读取文件流
// var myReadStream = fs.createReadStream(__dirname + '/LICENSE');
// myReadStream.setEncoding('utf8');
var myReadStream = fs.createReadStream(__dirname + '/LICENSE', 'utf8');
// 写入文件流
var myWriteStream = fs.createWriteStream(__dirname + '/writerMe.txt');

// data 是接收数据的监听事件
readData = '';
myReadStream.on('data', function (chunk) {
    myWriteStream.write(chunk); // 从读取流到写入流
    readData += chunk;
    console.log('new chunk receiverd');
    console.log(chunk);
});

// 文件读取完后的触发事件 ： end
myReadStream.on('end', function () {
    console.log(readData);
});


// 利用管道流实现文件复制，一下一句话即可
myReadStream.pipe(myWriteStream);


// 写入一个文件流
var myWriteStream2 = fs.createWriteStream(__dirname + '/writeme2.txt');

var writeData = "Hello world!";
myWriteStream2.write(writeData);
myWriteStream2.end();
myWriteStream2.on('finish', function () {
    console.log('writing file finished.');
});





////////////////////////// 运用实例,压缩
var crypto = require('crypto');
var fs = require('fs');
var zlib = require('zlib');

var password = new Buffer(process.env.PASS || 'password');
var encryStream = crypto.createCipher('aes-256-cbc', password);
var gzip = zlib.createGzip();
var readStream = fs.createReadStream(__dirname + '/LICENSE');
var writeStream = fs.createWriteStream(__dirname + '/out.gz');

readStream
    .pipe(encryStream)
    .pipe(gzip)
    .pipe(writeStream)
    .on('finish', function () {
        console.log('finish');
    });

////////////////////////// 运用实例,解压
var crypto = require('crypto');
var fs = require('fs');
var zlib = require('zlib');

var password = new Buffer(process.env.PASS || 'password');
var decryptStream = crypto.createDecipher('aes-256-cbc', password);
var gzip = zlib.createGunzip();
var readStream = fs.createReadStream(__dirname + '/out.gz');

readStream
    .pipe(gzip)
    .pipe(decryptStream)
    .pipe(process.stdout)
    .on('finish', function () {
        console.log('finish');
    });
