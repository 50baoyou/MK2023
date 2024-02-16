import { debounce } from "lodash";
import { Tab } from "../tab/index.js";
import { MainConten } from "../main-content/index.js";
import { set, get } from "utils/sessionStorage.util.js";

const tabEl = document.getElementById("tab-list");
const mainContentEl = document.getElementById("main-content");

const tab = new Tab(tabEl);
const mainContent = new MainConten(mainContentEl);

tabEl.addEventListener(
	"click",
	// 节流
	debounce((e) => {
		const eventEl = e.target;
		const storageName = `destination_content_${eventEl.innerHTML}`;
		const storageContent = get(storageName);

		if (eventEl.classList.contains("tab-item")) {
			if (storageContent) {
				console.log("使用缓存");
				tab.setActiveItem(eventEl);
				mainContent.set(storageContent);
			} else {
				console.log("发送请求");
				const tabPromise = tab.to(eventEl);

				tabPromise
					.then((response) => {
						mainContent.set(response.data);
						set(storageName, response.data);
					})
					.catch((error) => {
						console.log(error);
					});
			}
		}
	}, 200),
	false
);

// 设置默认选中项
tabEl.querySelectorAll(".tab-item")[0].click();
