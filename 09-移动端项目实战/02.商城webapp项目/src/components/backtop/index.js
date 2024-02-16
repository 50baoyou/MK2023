import { ScrollModule } from "utils/scroll.util.js";
import { BackTopModule } from "utils/backtop.util.js";

import "./backtop.css";
import "icons/iconfont.css";

const CHANGED_CLASSNAME = "backtop-hidden";
const BEHAVIOR = "smooth";
const backtopEl = document.getElementById("backtop");

class Backtop {
	constructor(containerEl) {
		this.init(containerEl);
	}

	init(el) {
		new ScrollModule(CHANGED_CLASSNAME, backtopEl, el.scrollHeight, el);
		new BackTopModule(backtopEl, el, 0, 0, BEHAVIOR);
	}
}

export { Backtop };
