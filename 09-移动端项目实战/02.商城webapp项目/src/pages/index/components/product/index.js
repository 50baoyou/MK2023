import render from "./items.art";
import "./product.css";

const listEl = document.getElementById("product-list");

const PRODUCT_DATA_URL = "https://www.imooc.com/api/mall-wepApp/index/product?icode=J20A462262B727D57";

const axios = require("axios");

axios
	.get(PRODUCT_DATA_URL)
	.then((response) => {
		listEl.innerHTML = render(response.data);
	})
	.catch((error) => {
		console.log(error);
	})
	.then(() => {});
