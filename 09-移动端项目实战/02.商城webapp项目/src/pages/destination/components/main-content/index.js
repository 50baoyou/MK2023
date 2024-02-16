import render from "./item.art";
import loading_render from "components/loading/loading.art";

import "./main_content.css";

class MainConten {
	constructor(el) {
		this.el = el;
	}

	toSet(response) {
		this.setLoading();

		response
			.then((response) => {
				this.set(response.data);
			})
			.catch((error) => {
				console.log("Error", error);
			});
	}

	set(data) {
		this.el.innerHTML = render(data);
	}

	setLoading() {
		this.el.innerHTML = loading_render();
	}
}

export { MainConten };
