import "./tab.css";

const ACTIVE_CLASSNAME = "tab-item-active";

const MAIN_CONTENT_IMG_URL = "https://www.imooc.com/api/mall-wepApp/destination/content/";

const axios = require("axios");

class Tab {
	constructor(el) {
		this.itemEls = el.querySelectorAll(".tab-item");
	}

	setActiveItem(el) {
		for (const itemEl of this.itemEls) {
			itemEl.classList.remove(ACTIVE_CLASSNAME);
		}

		el.classList.add(ACTIVE_CLASSNAME);
	}

	async to(el) {
		this.setActiveItem(el);

		// 如果上一次请求未完成，则终止它
		if (this.controller) {
			this.controller.abort();
			this.controller = "";
		} else {
			this.controller = new AbortController();
		}

		return await axios.get(MAIN_CONTENT_IMG_URL + el.dataset.id, { signal: this.controller.signal });
	}

	setCurrIndex(index) {
		const el = this.itemEls[index];

		return this.to(el);
	}
}

export { Tab };
