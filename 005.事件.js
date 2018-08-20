/*
// events 是nodejs的核心库
var events = require('events');

// 新建一个事件对象
var myEmitter = new events.EventEmitter();

// 在事件对象上绑定一个事件
myEmitter.on('someEvent', function (msg) {
    console.log(msg);
})

// 触发事件
myEmitter.emit('someEvent', 'this is a test event.');
*/

// events 是nodejs的核心库
var events = require('events');
//nodejs的工具库
var util = require('util');

var Person = function (name) {
    this.name = name;
}

// 通过工具类，让 Person 类继承 EventEmitter 类，让 Person 类具有事件绑定等功能
util.inherits(Person, events.EventEmitter);

var xiaoming = new Person('xiaoming');
var lilei = new Person('lilei');
var lucy = new Person('lucy');

var persons = [xiaoming, lilei, lucy];

// 为每一个 Person 类对象绑定一个 speak 的事件
persons.forEach(function (person) {
    person.on('speak', function (msg) {
        console.log(person.name + " said : " + msg);
    });
});

// 调用speak 事件
lucy.emit('speak', 'haha');
xiaoming.emit('speak', 'what');