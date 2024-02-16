import "./slider.css";
import "./btn.css";

import { Slider } from "./module/index.js";
import { getData } from "api/getData.js";

import render from "./slider.art";

const layout_el = document.getElementById("slider-layout");

// 接口码有效期：30天（2023.2.2）
const URL = "https://www.imooc.com/api/mall-PC/index/slider?icode=J0D5E7E6ADAD223CA";
getData(URL).then((data) => {
	layout_el.innerHTML = render({
		items: data,
	});

	const slider = new Slider(document.querySelector(".slider"), { initialIndex: 0, autoplay: 1000 });

	const bannerEl = document.getElementById("banner");
	const leftbtnEl = document.getElementById("leftbtn");
	const rightbtnEl = document.getElementById("rightbtn");
	const circlesEL = document.getElementById("circles");

	leftbtnEl.addEventListener(
		"click",
		() => {
			slider.prev();
		},
		false
	);

	rightbtnEl.addEventListener(
		"click",
		() => {
			slider.next();
		},
		false
	);

	bannerEl.addEventListener(
		"mouseenter",
		() => {
			slider.pause();
		},
		false
	);

	bannerEl.addEventListener(
		"mouseleave",
		() => {
			slider.autoplay();
		},
		false
	);

	circlesEL.addEventListener(
		"click",
		(e) => {
			const el = e.target;

			if (el.tagName.toLowerCase() === "li") {
				let index = el.dataset.index;
				slider.to(index);
				slider.setCircle();
			}
		},
		false
	);
});
