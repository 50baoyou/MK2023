"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hello = void 0;
var hello = 'hello world!!!';
exports.hello = hello;
console.log(hello);
// tuple 元祖类型
// 元组类型是另一种 Array 类型，它确切地知道它包含多少个元素，以及它在特定位置包含哪些类型。
// 是一种 固定长度，固定类型的 Array
var person1 = [1, 'xk'];
person1.push(1111);
console.log(person1);
// union 联合类型
// 联合类型是由两种或多种其他类型组成的类型，表示可能是这些类型中的任何一种的值。
// 我们将这些类型中的每一种都称为联合的成员。
var id = 123;
id = '443';
// literal 字面类型
// 可以在类型位置引用特定的字符串和数字。
// 只能赋值指定的值
var key;
key = 0;
key = 2;
// 枚举类型
var Color;
(function (Color) {
    Color["Red"] = "red";
    Color["Blue"] = "bule";
    Color["Green"] = "green";
})(Color || (Color = {}));
console.log(Color.Blue);
