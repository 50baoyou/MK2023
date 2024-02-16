import { BaseSlider } from "./base.js";
import { BTN_TAGNAME, BTN_DATANAME, CHEACKED_CLASSNAME } from "./constant.js";

class Slider extends BaseSlider {
	constructor(isCarousel, el, btn_el, left_btn, right_btn, options) {
		super(el, options);
		this._timer;
		this._select(btn_el);
		this._setScircleBtn(btn_el);

		if (isCarousel === true) {
			this._carousel(btn_el);

			el.onmouseenter = () => {
				clearInterval(this._timer);
			};

			el.onmouseleave = () => {
				this._carousel(btn_el);
			};
		}

		if (left_btn !== undefined && right_btn !== undefined) {
			this._prev_page(left_btn, btn_el);
			this._next_page(right_btn, btn_el);
			el.onmouseenter = () => {
				clearInterval(this._timer);
			};

			el.onmouseleave = () => {
				this._carousel(btn_el);
			};
		}
	}

	_setScircleBtn(el) {
		const btns = el.getElementsByTagName(BTN_TAGNAME);
		for (let index = 0; index < btns.length; index++) {
			index == this.currIndex ? (btns[index].className = CHEACKED_CLASSNAME) : (btns[index].className = "none");
		}
		for (const item of Object.entries(btns)) {
			console.log(item);
		}
	}

	_carousel(btn_el) {
		clearInterval(this._timer);
		this._timer = setInterval(() => {
			this.next();
			this._setScircleBtn(btn_el);
		}, 1000);
	}

	_select(btn_el) {
		btn_el.addEventListener(
			"click",
			(e) => {
				if (e.target.tagName.toLowerCase() === BTN_TAGNAME) {
					let index = e.target.getAttribute(BTN_DATANAME);
					this.to(index);
					this._setScircleBtn(btn_el);
				}
			},
			false
		);
	}

	_prev_page(left_btn, btn_el) {
		left_btn.addEventListener(
			"click",
			() => {
				this.prev();
				this._setScircleBtn(btn_el);
			},
			false
		);
	}

	_next_page(right_btn, btn_el) {
		right_btn.addEventListener(
			"click",
			() => {
				this.next();
				this._setScircleBtn(btn_el);
			},
			false
		);
	}
}

export { Slider };
