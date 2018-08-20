// 导入文件相关操作的类库
var fs = require('fs');

// 读取文件，异步（不等执行完就执行之下的内容）
fs.readFile('006.txt', 'utf-8', function (err, data) {
    console.log(data)
});


// 读取文件，同步（执行完才执行之下的内容）
// var content = fs.readFileSync('006.txt', 'utf8');
// console.log(content);

// 写文件，异步
fs.writeFile('006.txt', 'this is append content', function (err){
    console.log('write is finished.');
});


// 写文件，覆盖，同步
// fs.writeFileSync('006.txt', 'this is append content');

// 创建文件，异步
fs.unlink('006.txt', function (err){
    console.log('delete file finished.');
});


// 创建文件，同步
// var status = fs.unlink('006.txt');
// console.log(status);