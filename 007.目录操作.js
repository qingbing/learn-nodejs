// 导入文件相关操作的类库
var fs = require('fs');


// 创建目录， 异步
fs.mkdir('stuff', 0777, function (err) {
    console.log('Create directory successfull');
});

// 创建目录， 同步
// var status = fs.mkdirSync('stuff', 0777);
// console.log(status);

// 删除目录， 异步
fs.rmdir('stuff', function (err) {
    console.log('Delete directory successful.');
});

// 删除目录， 同步
// var status = fs.rmdirSync('stuff');
// console.log(status);

// 功能
fs.mkdir('stuff', function () {
    fs.readFile('006.txt', function (err, data) {
        fs.writeFile('007.txt', data, 'utf8', function (err) {
            console.log('Copy successfully!');
        });
    });
});
