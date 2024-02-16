import { debounce } from "lodash";

class BackTopModule {
	constructor(eventEl, container, top, left, behavior) {
		// 监听点击事件的元素
		this.eventEl = eventEl;
		// 滚动条所在容器
		this.container = container;
		// 滚动到位置水平轴上距元素左上角的像素
		this.top = top;
		// 滚动到位置竖直轴上距元素左上角的像素
		this.left = left;
		// 期望滚动行为
		this.behavior = behavior;

		this.bindEvent();
	}

	// 绑定事件
	bindEvent() {
		this.eventEl.addEventListener(
			"click",
			// 防抖
			debounce(() => {
				this.container.scrollTo({ top: this.top, left: this.left, behavior: this.behavior });
			}, 300),
			false
		);
	}
}

export { BackTopModule };
