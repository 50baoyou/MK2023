import { ELEMENT_NODE_TYPE, SLIDER_ANIMATION_CLASS_NAME } from "./constants.js";
import { DEFAULTS } from "./defaults";

class BaseSlider {
	constructor(el, options) {
		if (el.nodeType !== ELEMENT_NODE_TYPE) {
			throw new Error("实例化的时候，请传入 DOM 元素");
		}

		// 合并参数
		this.options = { ...DEFAULTS, ...options };

		// 设置元素
		const sliderEl = el;
		const sliderContentEL = sliderEl.querySelector(".slider-content");
		const sliderItemEls = sliderContentEL.querySelectorAll(".slider-item");
		const circleEls = sliderEl.querySelectorAll(".slider-circles li");

		this.sliderEl = sliderEl;
		this.sliderContentEL = sliderContentEL;
		this.sliderItemEls = sliderItemEls;
		this.circleEls = circleEls;

		// 设置索引值
		this.minIndex = 0;
		this.maxIndex = sliderItemEls.length - 1;
		this.currIndex = this.getCorrectedIndex(this.options.initialIndex);

		// 设置幻灯片移动距离
		this.itemWidth = sliderItemEls[0].offsetWidth;

		this.init();
	}

	// 初始化
	init() {
		this.setItemWidth();
		this.setContentWidth();
		this.move(this.getDistance());

		if (this.options.animation) {
			this.openAnimation();
		}

		if (this.options.autoplay) {
			this.autoplay();
		}
	}

	// 修正索引值
	getCorrectedIndex(index) {
		if (index < this.minIndex) {
			return this.maxIndex;
		}

		if (index > this.maxIndex) {
			return this.minIndex;
		}

		return index;
	}

	// 设置 slider-item 宽度
	setItemWidth() {
		for (const item of this.sliderItemEls) {
			item.style.width = `${this.itemWidth}px`;
		}
	}

	// 设置 slider-content 宽度
	setContentWidth() {
		this.sliderContentEL.style.width = `${this.itemWidth * this.sliderItemEls.length}px`;
	}

	// 不带动画移动
	move(distance) {
		this.sliderContentEL.style.transform = `translate3d(${distance}px,0px,0px)`;
	}

	// 带动画移动
	moveWidthAnimation(distance) {
		this.setAnimationSpeed();
		this.move(distance);
		this.sliderContentEL.addEventListener(
			"transitionend",
			() => {
				this.closeAnimation();
			},
			false
		);
	}

	// 获取要移动的距离
	getDistance(index = this.currIndex) {
		return -this.itemWidth * index;
	}

	// 开启动画
	openAnimation() {
		this.sliderContentEL.classList.add(SLIDER_ANIMATION_CLASS_NAME);
	}

	// 关闭动画
	closeAnimation() {
		this.setAnimationSpeed(0);
	}

	// 设置切换动画速度
	setAnimationSpeed(speed = this.options.speed) {
		this.sliderContentEL.style.transitionDuration = `${speed}ms`;
	}

	// 自动切换
	autoplay() {
		const { autoplay } = this.options;

		if (autoplay <= 0) {
			return;
		}

		this.pause();
		this.autoplayTimer = setInterval(() => {
			this.next();
		}, autoplay);
	}

	// 切换上一张
	prev() {
		this.to(this.currIndex - 1);
	}

	// 切换下一张
	next() {
		this.to(this.currIndex + 1);
	}

	// 切换到索引对应的换灯片
	to(index) {
		index = this.getCorrectedIndex(index);

		if (this.currIndex === index) {
			return;
		}

		this.currIndex = index;
		const distance = this.getDistance();

		if (this.options.animation) {
			this.moveWidthAnimation(distance);
		} else {
			this.move(distance);
		}

		this.setCircle();
	}

	// 暂停自动切换
	pause() {
		clearInterval(this.autoplayTimer);
	}

	// 设置小圆点
	setCircle() {
		for (const item of this.circleEls) {
			item.classList.remove("active");
		}

		this.circleEls[this.currIndex].classList.add("active");
	}
}

export { BaseSlider };
