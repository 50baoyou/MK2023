import render from "./slider.art";
import Swiper from "swiper/bundle";

import "swiper/css/bundle";
import "./slider.css";

const SWIPER_IMG_URL = "https://www.imooc.com/api/mall-wepApp/index/slider";

const axios = require("axios");

axios
	.get(SWIPER_IMG_URL)
	.then((response) => {
		document.getElementById("index-slider").innerHTML = render(response.data);
	})
	.catch((error) => {
		console.log(error);
	})
	.then(() => {
		// 获取完数据后再生成幻灯片
		new Swiper(".swiper", {
			// 开启循环
			loop: true,

			// 自动播放
			autoplay: {
				delay: 2000,
				stopOnLastSlide: false,
				disableOnInteraction: true,
			},

			// 使用分页器
			pagination: {
				el: ".swiper-pagination",
				clickable: true,
			},
		});
	});
