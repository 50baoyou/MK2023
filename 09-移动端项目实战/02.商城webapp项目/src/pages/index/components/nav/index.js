import render from "./nav.art";

import "./nav.css";

const NAV_IMG_URL = "https://www.imooc.com/api/mall-wepApp/index/nav";

const axios = require("axios");

axios
	.get(NAV_IMG_URL)
	.then((response) => {
		document.getElementById("index-nav").innerHTML = render(response.data);
	})
	.catch((error) => {
		console.log(error);
	})
	.then(() => {});
