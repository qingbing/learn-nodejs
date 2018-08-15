function sayHello (callback, username) {
    callback(username);
}

sayHello(function(username){
    console.log(username + " say : hello");
}, 'node');