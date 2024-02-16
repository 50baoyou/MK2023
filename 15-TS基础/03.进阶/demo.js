function reverse(param) {
    if (typeof param === 'string') {
        return param.split('').reverse().join('');
    }
    else {
        return param.slice().reverse();
    }
}
var add = function (a, b) {
    return a + b;
};
// 常量断言
var obj = {
    name: 'xk',
    age: 30,
};
var b = {
    name: 'xx',
};
console.log();
// 总结
// typeof 用于获取变量或表达式的类型，返回一个字符串
// keyof 用于获取类型的属性键，返回一个联合类型
