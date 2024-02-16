import { Ajax } from "./ajax.js";
import {
	ERROR_HTTP_CODE,
	ERROR_HTTP_CODE_MESSAGE,
	ERROR_REQUEST,
	ERROR_REQUEST_MESSAGE,
	ERROR_TIMEOUT,
	ERROR_TIMEOUT_MESSAGE,
	ERROR_ABORT,
	ERROR_ABORT_MESSAGE,
} from "./constants.js";

const ajax = (url, options) => {
	// return new Ajax(url, options).getXHR();
	let xhr;
	const p = new Promise((resolve, reject) => {
		xhr = new Ajax(url, {
			...options,
			...{
				success(response) {
					resolve(response);
				},
				httpCodeError(status) {
					reject({
						type: ERROR_HTTP_CODE,
						message: `${ERROR_HTTP_CODE_MESSAGE}:${status}`,
					});
				},
				error() {
					reject({
						type: ERROR_REQUEST,
						message: ERROR_REQUEST_MESSAGE,
					});
				},
				abort() {
					reject({
						type: ERROR_ABORT,
						message: ERROR_ABORT_MESSAGE,
					});
				},
				timeout() {
					reject({
						type: ERROR_TIMEOUT,
						message: ERROR_TIMEOUT_MESSAGE,
					});
				},
			},
		}).getXHR();
	});

	p.xhr = xhr;
	p.ERROR_HTTP_CODE = ERROR_HTTP_CODE;
	p.ERROR_REQUEST = ERROR_REQUEST;
	p.ERROR_ABORT = ERROR_ABORT;
	p.ERROR_TIMEOUT = ERROR_TIMEOUT;

	return p;
};

const get = (url, options) => {
	return ajax(url, { ...options, method: "GET" });
};

const getJSON = (url, options) => {
	return ajax(url, { ...options, method: "GET", responseType: "json" });
};

const post = (url, options) => {
	return ajax(url, { ...options, method: "POST" });
};

export { ajax, get, getJSON, post };
