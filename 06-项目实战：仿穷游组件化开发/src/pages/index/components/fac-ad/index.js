import "./fac_ad.css";

import { getData } from "api/getData.js";
import { URL } from "./config.js";
import render from "./fac_ad.art";

const layoutEl = document.querySelector(".fav-ad .center-wrap");

getData(URL).then((data) => {
	layoutEl.innerHTML = render({
		items: data,
	});
});
