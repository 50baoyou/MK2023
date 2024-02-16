import "./tsddty.css";

import { URL } from "./config.js";
import { getData } from "api/getData.js";
import render from "./items.art";

const layoutEl = document.querySelector(".tsddty .bd");

getData(URL).then((data) => {
	layoutEl.innerHTML = render({
		items: data,
	});
});
