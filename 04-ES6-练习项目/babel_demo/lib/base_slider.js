"use strict";

function _typeof(obj) {
	"@babel/helpers - typeof";
	return (
		(_typeof =
			"function" == typeof Symbol && "symbol" == typeof Symbol.iterator
				? function (obj) {
						return typeof obj;
				  }
				: function (obj) {
						return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype
							? "symbol"
							: typeof obj;
				  }),
		_typeof(obj)
	);
}
function _createForOfIteratorHelper(o, allowArrayLike) {
	var it = (typeof Symbol !== "undefined" && o[Symbol.iterator]) || o["@@iterator"];
	if (!it) {
		if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || (allowArrayLike && o && typeof o.length === "number")) {
			if (it) o = it;
			var i = 0;
			var F = function F() {};
			return {
				s: F,
				n: function n() {
					if (i >= o.length) return { done: true };
					return { done: false, value: o[i++] };
				},
				e: function e(_e) {
					throw _e;
				},
				f: F,
			};
		}
		throw new TypeError(
			"Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
		);
	}
	var normalCompletion = true,
		didErr = false,
		err;
	return {
		s: function s() {
			it = it.call(o);
		},
		n: function n() {
			var step = it.next();
			normalCompletion = step.done;
			return step;
		},
		e: function e(_e2) {
			didErr = true;
			err = _e2;
		},
		f: function f() {
			try {
				if (!normalCompletion && it["return"] != null) it["return"]();
			} finally {
				if (didErr) throw err;
			}
		},
	};
}
function _unsupportedIterableToArray(o, minLen) {
	if (!o) return;
	if (typeof o === "string") return _arrayLikeToArray(o, minLen);
	var n = Object.prototype.toString.call(o).slice(8, -1);
	if (n === "Object" && o.constructor) n = o.constructor.name;
	if (n === "Map" || n === "Set") return Array.from(o);
	if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
	if (len == null || len > arr.length) len = arr.length;
	for (var i = 0, arr2 = new Array(len); i < len; i++) {
		arr2[i] = arr[i];
	}
	return arr2;
}
function ownKeys(object, enumerableOnly) {
	var keys = Object.keys(object);
	if (Object.getOwnPropertySymbols) {
		var symbols = Object.getOwnPropertySymbols(object);
		enumerableOnly &&
			(symbols = symbols.filter(function (sym) {
				return Object.getOwnPropertyDescriptor(object, sym).enumerable;
			})),
			keys.push.apply(keys, symbols);
	}
	return keys;
}
function _objectSpread(target) {
	for (var i = 1; i < arguments.length; i++) {
		var source = null != arguments[i] ? arguments[i] : {};
		i % 2
			? ownKeys(Object(source), !0).forEach(function (key) {
					_defineProperty(target, key, source[key]);
			  })
			: Object.getOwnPropertyDescriptors
			? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source))
			: ownKeys(Object(source)).forEach(function (key) {
					Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
			  });
	}
	return target;
}
function _defineProperty(obj, key, value) {
	key = _toPropertyKey(key);
	if (key in obj) {
		Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
	} else {
		obj[key] = value;
	}
	return obj;
}
function _classCallCheck(instance, Constructor) {
	if (!(instance instanceof Constructor)) {
		throw new TypeError("Cannot call a class as a function");
	}
}
function _defineProperties(target, props) {
	for (var i = 0; i < props.length; i++) {
		var descriptor = props[i];
		descriptor.enumerable = descriptor.enumerable || false;
		descriptor.configurable = true;
		if ("value" in descriptor) descriptor.writable = true;
		Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
	}
}
function _createClass(Constructor, protoProps, staticProps) {
	if (protoProps) _defineProperties(Constructor.prototype, protoProps);
	if (staticProps) _defineProperties(Constructor, staticProps);
	Object.defineProperty(Constructor, "prototype", { writable: false });
	return Constructor;
}
function _toPropertyKey(arg) {
	var key = _toPrimitive(arg, "string");
	return _typeof(key) === "symbol" ? key : String(key);
}
function _toPrimitive(input, hint) {
	if (_typeof(input) !== "object" || input === null) return input;
	var prim = input[Symbol.toPrimitive];
	if (prim !== undefined) {
		var res = prim.call(input, hint || "default");
		if (_typeof(res) !== "object") return res;
		throw new TypeError("@@toPrimitive must return a primitive value.");
	}
	return (hint === "string" ? String : Number)(input);
}
// 默认参数
var DEFAULTS = {
	// 初始索引
	initialIndex: 0,
	// 切换时是否有动画
	animation: true,
	// 切换速度，单位 ms
	speed: 300,
};
// base
var ELEMENT_NODE = 1;
var SLIDER_ANIMATION_CLASSNAME = "slider-animation";
var BaseSlider = /*#__PURE__*/ (function () {
	function BaseSlider(el, options) {
		_classCallCheck(this, BaseSlider);
		console.log(options);
		if (el.nodeType !== ELEMENT_NODE) throw new Error("实例化的时候，请传入 DOM 元素！");

		// 实际参数
		this.options = _objectSpread(_objectSpread({}, DEFAULTS), options);
		var slider = el;
		var sliderContent = slider.querySelector(".slider-content");
		var sliderItems = sliderContent.querySelectorAll(".slider-item");

		// 添加到 this 上，为了在方法中使用
		this.slider = slider;
		this.sliderContent = sliderContent;
		this.sliderItems = sliderItems;
		this.minIndex = 0;
		this.maxIndex = sliderItems.length - 1;
		this.currIndex = this.getCorrectedIndex(this.options.initialIndex);

		// 每个 slider-item 的宽度（每次移动的距离）
		this.itemWidth = sliderItems[0].offsetWidth;
		this.init();
	}

	// 获取修正后的索引值
	// 随心所欲，不逾矩
	_createClass(BaseSlider, [
		{
			key: "getCorrectedIndex",
			value: function getCorrectedIndex(index) {
				if (index < this.minIndex) return this.maxIndex;
				if (index > this.maxIndex) return this.minIndex;
				return index;
			},

			// 初始化
		},
		{
			key: "init",
			value: function init() {
				// 为每个 slider-item 设置宽度
				this.setItemsWidth();

				// 为 slider-content 设置宽度
				this.setContentWidth();

				// 切换到初始索引 initialIndex
				this.move(this.getDistance());

				// 开启动画
				if (this.options.animation) {
					this.openAnimation();
				}
			},

			// 为每个 slider-item 设置宽度
		},
		{
			key: "setItemsWidth",
			value: function setItemsWidth() {
				var _iterator = _createForOfIteratorHelper(this.sliderItems),
					_step;
				try {
					for (_iterator.s(); !(_step = _iterator.n()).done; ) {
						var item = _step.value;
						item.style.width = "".concat(this.itemWidth, "px");
					}
				} catch (err) {
					_iterator.e(err);
				} finally {
					_iterator.f();
				}
			},

			// 为 slider-content 设置宽度
		},
		{
			key: "setContentWidth",
			value: function setContentWidth() {
				this.sliderContent.style.width = "".concat(this.itemWidth * this.sliderItems.length, "px");
			},

			// 不带动画的移动
		},
		{
			key: "move",
			value: function move(distance) {
				this.sliderContent.style.transform = "translate3d(".concat(distance, "px, 0px, 0px)");
			},

			// 带动画的移动
		},
		{
			key: "moveWithAnimation",
			value: function moveWithAnimation(distance) {
				this.setAnimationSpeed(this.options.speed);
				this.move(distance);
			},

			// 设置切换动画速度
		},
		{
			key: "setAnimationSpeed",
			value: function setAnimationSpeed(speed) {
				this.sliderContent.style.transitionDuration = "".concat(speed, "ms");
			},

			// 获取要移动的距离
		},
		{
			key: "getDistance",
			value: function getDistance() {
				var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.currIndex;
				return -this.itemWidth * index;
			},

			// 开启动画
		},
		{
			key: "openAnimation",
			value: function openAnimation() {
				this.sliderContent.classList.add(SLIDER_ANIMATION_CLASSNAME);
			},

			// 关闭动画
		},
		{
			key: "closeAnimation",
			value: function closeAnimation() {
				this.setAnimationSpeed(0);
			},

			// 切换到 index 索引对应的幻灯片
		},
		{
			key: "to",
			value: function to(index) {
				index = this.getCorrectedIndex(index);
				if (this.currIndex === index) return;
				this.currIndex = index;
				var distance = this.getDistance();
				if (this.options.animation) {
					return this.moveWithAnimation(distance);
				} else {
					return this.move(distance);
				}
			},

			// 切换上一张
		},
		{
			key: "prev",
			value: function prev() {
				this.to(this.currIndex - 1);
			},

			// 切换下一张
		},
		{
			key: "next",
			value: function next() {
				this.to(this.currIndex + 1);
			},

			// 获取当前索引
		},
		{
			key: "getCurrIndex",
			value: function getCurrIndex() {
				return this.currIndex;
			},
		},
	]);
	return BaseSlider;
})();
