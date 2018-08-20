var sum = function (a, b) {
    return `${a}+${b}=${a + b}`;
}

var PI = 3.1415926;


module.exports.sum = sum;
module.exports.PI = PI;

module.exports = {
    sum: sum,
    PI: PI
};

module.exports = {
    sum: function (a, b) {
        return `${a}+${b}=${a + b}`;
    },
    PI: 3.1415926
};