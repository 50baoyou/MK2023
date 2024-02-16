import { getJSON } from "./ajax/index.js";
import { SUCCESS_CODE, TIMECOUT_TIME } from "./config.js";

// 获取
const getData = (url, options) => {
	return getJSON(url, {
		timeoutTime: TIMECOUT_TIME,
		...options,
	})
		.then((response) => {
			if (response.code !== SUCCESS_CODE) {
				throw new Error(`错误：${response.code}`);
			}

			return response.data;
		})
		.catch((err) => {
			console.log(err);
		});
};

export { getData };
