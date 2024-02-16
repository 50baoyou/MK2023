type Square = {
    size: number;
};

// 定义不同的函数签名，提高函数使用的准确性
function reverse(str: string): string;

function reverse(arr: string[]): string[];

function reverse(param: string | string[]) {
    if (typeof param === 'string') {
        return param.split('').reverse().join('');
    } else {
        return param.slice().reverse();
    }
}

// 函数调用签名
type Add = {
    (a: number, b: number): number;
};

const add: Add = (a: number, b: number) => {
    return a + b;
};

// 索引签名
type Dictionary = {
    [index: string]: any;
};

// 常量断言
const obj = {
    name: 'xk',
    age: 30,
} as const;

// 类型映射
type Point = {
    x: string;
    y: number;
    z: boolean;
};

type ReadonlyPoint = {
    readonly [key in keyof Point]: Point[key];
};

const b = {
    name: 'xx',
};

// typeof 操作符用于获取一个变量或表达式的类型。
// 它返回一个表示该类型的字符串。
type A = typeof b; // {name: string}

// keyof 操作符用于获取一个类型的所有可用键的联合类型。
// 它返回一个包含给定类型中所有属性键的字符串联合类型。
type B = keyof Point; // x | y | z
console.log();

// 总结
// typeof 用于获取变量或表达式的类型，返回一个字符串
// keyof 用于获取类型的属性键，返回一个联合类型
