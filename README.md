# 1、符号函数

```
(() => {
    console.log("括号函数");
})();
// 上面的函数和下面的函数意义一样
(function(){
    console.log("自包含函数");
})();
```

# 2、nodejs的全局变量
- __dirname : 运行脚本的当前目录
- __filename : 运行的当前脚本

# 3、模块
## 3.1 模块的编写方式有三种暴露方式
- 可以保留的内容包含方法和变量
1、定义和暴露分开
```
// 定义
var sum = function (a, b) {
    return `${a}+${b}=${a + b}`;
}
var PI = 3.1415926;

// 暴露接口
module.exports.sum = sum;
module.exports.PI = PI;
```

2、定义分开，暴露统一成一个json对象
```
// 定义
var sum = function (a, b) {
    return `${a}+${b}=${a + b}`;
}
var PI = 3.1415926;

// 暴露接口
module.exports = {
    sum: sum,
    PI: PI
};
```

3、定义和暴露直接写成同一个json对象里面
```
module.exports = {
    sum: function (a, b) {
        return `${a}+${b}=${a + b}`;
    },
    PI: 3.1415926
};
```

## 3.2 应用模块，两种方式
- 一个文件就是一个模块
1、单个引用
```js
var PI = require('./004.count').PI;
var sum = require('./004.count').sum;

```
2、整体引用
```js
var counter = require('./004.count');
var PI = counter.PI;
var sum = counter.sum;

```

# 4、模拟 sleep ，这种模拟很好客户端资源
```
var waitSeconds = new Date(new Date.getTime() + 4 * 1000);
while (waitSeconds > new Date()){}
```

# 5、新认识的几个对象的操作
```javascript
// json对象 转换成 jsonString
JSON.stringify(JsonObj)
// json 字符串 json对象化
JSON.parse(JsonString)
// 对象合并
var allData = Object.assign({}, getData, postData);
```

# 6、npm：nodejs的包管理
- https://www.npmjs.com
- https://npm.taobao.org
- 安装
  - npm install express : 下载到当前目录下的 node_modules 目录
  - npm install -g express : 做为全局包，express可以在任意地方使用
- package.json : 项目依赖包管理文件
  - npm init : 初始化项目，生成package.json文件
  - npm install : 下载新demo，用该命令下载相关依赖的包
  - npm install --save express : 下载包（无则下载），并将作为package.json 文件的一个依赖项
  - npm install --save-dev express : 下载包（无则下载），并将作为package.json 文件的一个dev（开发）模式下的一个依赖项
  - npm run start : 执行该命令将调用 package.json -> scripts -> start 对应的命令
  
  
# 7、npmmon：文件动态监控工具（开发使用），安装后用nodemon代替node命令即可
- 安装
  - npm install -g nodemon