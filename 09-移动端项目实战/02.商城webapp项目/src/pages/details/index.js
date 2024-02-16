// 样式
import "styles/normalize.css";
import "styles/reset.css";
import "styles/base.css";
import "styles/layout.css";
import "./detail.css";

// 组件
import "components/loading/index.js";
import "components/tabbar/index.js";
import "./components/header/index.js";
import "./components/info/index.js";
import "./components/tabbar/index.js";

import render from "./components/info/info.art";
import { trimStart } from "lodash";

const id = trimStart(window.location.search, "?");
const DETAIL_DATA_URL = "https://www.imooc.com/api/mall-wepApp/details/";

const axios = require("axios");
axios
	.get(DETAIL_DATA_URL + id)
	.then((response) => {
		document.getElementById("info-layout").innerHTML = render(response.data);
	})
	.catch((error) => {
		console.log(error);
	});
