import "./menu.css";

import { URL } from "./config.js";
import { getData } from "api/getData.js";
import render from "./menu.art";
import sec_menu from "./sec_menu.art";
import sec_menu_inn from "./sec_menu_inn.art";

const vMenuBoxEl = document.getElementById("v-menu-box");
const vMenuEl = document.getElementById("v-menu");

getData(URL)
	.then((data) => {
		vMenuEl.innerHTML = render(data);
		vMenuBoxEl.innerHTML += sec_menu(data);
	})
	.then(() => {
		//添加监听;
		vMenuBoxEl.addEventListener(
			"mouseenter",
			(e) => {
				const el = e.target;
				if (el.tagName.toLowerCase() === "li") {
					const tag = el.dataset.n;
					const menuEl = document.querySelector(`div[data-n=${tag}].menu `);

					setMenus(tag);

					if (!menuEl.dataset.get) {
						const url = `${URL}/${tag}`;

						getData(url).then((data) => {
							menuEl.dataset.get = 1;
							menuEl.innerHTML = sec_menu_inn(data);
						});
					}
				}
			},
			true
		);

		vMenuBoxEl.addEventListener(
			"mouseleave",
			() => {
				removeSecMenus();
			},
			false
		);
	});

// 设置菜单事件
const setMenus = (tag) => {
	const menus = getMenus();
	const sec_menus = getSecMenus();

	for (const item of menus) {
		item.classList.remove("active");
		if (item.dataset.n === tag) {
			item.classList.add("active");
		}
	}

	for (const item of sec_menus) {
		item.classList.remove("active");
		if (item.dataset.n === tag) {
			item.classList.add("active");
		}
	}
};

// 隐藏所有扩展菜单
const removeSecMenus = () => {
	const menus = getMenus();
	const sec_menus = getSecMenus();

	for (const item of menus) {
		item.classList.remove("active");
	}

	for (const item of sec_menus) {
		item.classList.remove("active");
	}
};

const getMenus = () => {
	return document.querySelectorAll("#v-menu li");
};

const getSecMenus = () => {
	return document.querySelectorAll("#v-menu-box .menu");
};
