const hello = 'hello world!!!';

console.log(hello);

// tuple 元祖类型
// 元组类型是另一种 Array 类型，它确切地知道它包含多少个元素，以及它在特定位置包含哪些类型。
// 是一种 固定长度，固定类型的 Array
let person1: [number, string] = [1, 'xk'];

person1.push(1111);

console.log(person1);

// union 联合类型
// 联合类型是由两种或多种其他类型组成的类型，表示可能是这些类型中的任何一种的值。
// 我们将这些类型中的每一种都称为联合的成员。
let id: number | string = 123;
id = '443';

// literal 字面类型
// 可以在类型位置引用特定的字符串和数字。
// 只能赋值指定的值
let key: 0 | 1 | 2 | 'xk';
key = 0;
key = 2;

// 枚举类型
enum Color {
    Red = 'red',
    Blue = 'bule',
    Green = 'green',
}

console.log(Color.Blue);

export { hello };
