// object 对象类型
const Person = {
    name: 'xk',
    age: 30,
    tag: '443 or 347',
};

// interface 与 class
interface IPoint {
    // x: number;
    // y: number;

    x: number;
    y: number;

    drawPoint: () => void;
    getDistances: (p: IPoint) => object;
}

export default class Point implements IPoint {
    // x: number;
    // y: number;

    // 访问修饰符
    constructor(private _x: number = 0, private _y: number = 0) {
        // this.x = x;
        // this.y = y;
    }

    set x(value: number) {
        this._x = value;
    }

    set y(value: number) {
        this._y = value;
    }

    get x() {
        return this._x;
    }

    get y() {
        return this._y;
    }

    // 默认为public
    public drawPoint() {
        console.log(this._x, this._y);
    }

    public getDistances(p: IPoint) {
        return {
            x: p.x - this._x,
            y: p.y - this._y,
        };
    }
}

console.log(123);

const point = new Point();

// geberucs 泛型
let list: Array<number> = [1, 2, 3, 4];

function getLastData<T>(arr: Array<T>) {
    return arr[arr.length - 1];
}

const d1 = getLastData([1, 2, 3, 4]);
const d2 = getLastData<string>(['11', 'xk']);

const makeTuple = <T, K>(x: T, y: K) => [x, y];
