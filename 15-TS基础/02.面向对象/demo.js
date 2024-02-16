"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// object 对象类型
var Person = {
    name: 'xk',
    age: 30,
    tag: '443 or 347',
};
var Point = /** @class */ (function () {
    // x: number;
    // y: number;
    // 访问修饰符
    function Point(_x, _y) {
        if (_x === void 0) { _x = 0; }
        if (_y === void 0) { _y = 0; }
        this._x = _x;
        this._y = _y;
        // this.x = x;
        // this.y = y;
    }
    Object.defineProperty(Point.prototype, "x", {
        get: function () {
            return this._x;
        },
        set: function (value) {
            this._x = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Point.prototype, "y", {
        get: function () {
            return this._y;
        },
        set: function (value) {
            this._y = value;
        },
        enumerable: false,
        configurable: true
    });
    // 默认为public
    Point.prototype.drawPoint = function () {
        console.log(this._x, this._y);
    };
    Point.prototype.getDistances = function (p) {
        return {
            x: p.x - this._x,
            y: p.y - this._y,
        };
    };
    return Point;
}());
exports.default = Point;
console.log(123);
var point = new Point();
// geberucs 泛型
var list = [1, 2, 3, 4];
function getLastData(arr) {
    return arr[arr.length - 1];
}
var d1 = getLastData([1, 2, 3, 4]);
var d2 = getLastData(['11', 'xk']);
var makeTuple = function (x, y) { return [x, y]; };
