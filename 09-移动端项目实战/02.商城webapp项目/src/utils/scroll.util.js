import { throttle } from "lodash";

const REDUNDANCY = 30;

class ScrollModule {
	constructor(classname, el, limit, container, eventEl = container) {
		// 设置样式的名称
		this.classname = classname;
		// 设置样式的元素
		this.el = el;
		// 滚动范围限制
		this.limit = limit;
		// 滚动条所在容器
		this.container = container;
		// 监听滚动事件的元素
		this.eventEl = eventEl;

		this.bindEvent();
	}

	// 绑定事件
	bindEvent() {
		this.eventEl.addEventListener(
			"scroll",
			// 节流
			throttle(() => {
				const scrollValue = this.container.scrollTop + this.limit - REDUNDANCY;
				if (scrollValue >= this.limit) {
					this.el.classList.add(this.classname);
				}
				if (this.container.scrollTop === 0) {
					this.el.classList.remove(this.classname);
				}
			}, 300),
			false
		);
	}
}

export { ScrollModule };
