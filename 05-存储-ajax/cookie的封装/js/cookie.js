// 写入
const set = (name, value, { maxAge, domain, path, secure } = {}) => {
	let cookieText = `${encodeURIComponent(name)}=${encodeURIComponent(value)}`;

	if (typeof maxAge === "number") {
		cookieText += `; max-age = ${maxAge}`;
	}

	if (domain) {
		cookieText += `; domain = ${domain}`;
	}

	if (path) {
		cookieText += `; path = ${path}`;
	}

	if (secure) {
		cookieText += `; secure`;
	}

	document.cookie = cookieText;
};

// 获取
const get = (name) => {
	name = `${encodeURIComponent(name)}`;

	const cookies = document.cookie.split("; ");

	for (const item of cookies) {
		const [cookieName, cookieValue] = item.split("=");

		if (cookieName === name) {
			return decodeURIComponent(cookieValue);
		}
	}

	return undefined;
};

// 删除
const remove = (name, { domain, path } = {}) => {
	set(name, "", { domain, path, maxAge: -1 });
};

export { set, get, remove };
