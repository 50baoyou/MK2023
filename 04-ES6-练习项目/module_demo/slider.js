import { BaseSlider } from "./base_slider.js";

class Slider extends BaseSlider {
	constructor(el, options) {
		super(el, options);

		this._bindEvent();
	}

	_bindEvent() {
		document.addEventListener(
			"keyup",
			(ev) => {
				console.log(ev.code);
				if (ev.code === "ArrowLeft") {
					// ←
					this.prev();
				} else if (ev.code === "ArrowRight") {
					// →
					this.next();
				}
			},
			false
		);
	}
}

export { Slider };
