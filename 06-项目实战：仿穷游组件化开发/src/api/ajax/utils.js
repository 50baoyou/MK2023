// 工具函数
const serialize = (param) => {
	const results = [];

	for (const [key, value] of Object.entries(param)) {
		results.push(`${encodeURIComponent(key)}=${encodeURIComponent(value)}`);
	}

	return results.join("&");
};

const serializeJSON = (param) => {
	return JSON.stringify(param);
};

const addUrlData = (url, data) => {
	if (!data) {
		return "";
	}

	const mark = url.includes("?") ? "&" : "?";

	return `${mark}${data}`;
};

export { serialize, serializeJSON, addUrlData };
