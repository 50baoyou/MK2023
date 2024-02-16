import { DEFAULT } from "./defaults.js";
import { serialize, serializeJSON, addUrlData } from "./utils.js";
import { HTTP_GET, CONTENT_TYPE_FORM_URLENCODED, CONTENT_TYPE_JSON } from "./constants.js";

// Ajax类
class Ajax {
	constructor(url, options) {
		this.url = url;
		// 复制并合并源对象
		this.options = Object.assign({}, DEFAULT, options);

		this.init();
	}

	// 初始化
	init() {
		const xhr = new XMLHttpRequest();

		this.xhr = xhr;

		// 事件处理程序
		this.bindEvents();

		// 启动请求
		this.xhr.open(this.options.method, this.url + this.addParam(), true);

		// 设置响应数据类型
		this.setResponseType();

		// 设置跨域是否携带cookie
		this.setCookie();

		// 设置请求超时时间
		this.setTimeout();

		// 发送请求
		this.sendData();
	}

	// 绑定事件处理
	bindEvents() {
		const xhr = this.xhr;

		const { success, httpCodeError, error, abort, timeout } = this.options;

		// load事件，响应数据可用时触发
		xhr.addEventListener(
			"load",
			() => {
				if (this.ok()) {
					success(xhr.response, xhr);
				} else {
					httpCodeError(xhr.status, xhr);
				}
			},
			false
		);

		// error事件，请求出错时触发
		xhr.addEventListener(
			"error",
			() => {
				error(xhr);
			},
			false
		);

		// abort事件，取消请求时触发
		xhr.addEventListener(
			"abort",
			() => {
				abort(xhr);
			},
			false
		);

		// timeout事件，响应超时触发
		xhr.addEventListener(
			"timeout",
			() => {
				timeout(xhr);
			},
			false
		);
	}

	// 检测响应状态码
	ok() {
		const xhr = this.xhr;

		return (xhr.status >= 200 && xhr.status < 300) || xhr.status === 304;
	}

	// 在地址添加参数
	addParam() {
		const { params } = this.options;

		if (!params) {
			return "";
		}

		return addUrlData(this.url, serialize(params));
	}

	// 设置响应数据类型
	setResponseType() {
		this.xhr.responseType = this.options.responseType;
	}

	// 设置跨域是否携带cookie
	setCookie() {
		if (this.options.withCredentials) {
			this.xhr.withCredentials = true;
		}
	}

	// 设置请求超时时间
	setTimeout() {
		const { timeoutTime } = this.options;

		if (timeoutTime > 0) {
			this.xhr.timeout = timeoutTime;
		}
	}

	// 发送请求
	sendData() {
		const xhr = this.xhr;
		const { data } = this.options;

		if (!this.isSendData()) {
			return xhr.send(null);
		}

		let resultData = null;

		// 发送 FromData 格式的数据
		if (this.isFormData()) {
			resultData = data;
		}
		// 发送 urlencoded 格式的数据
		else if (this.isFormURLEncodedData()) {
			this.setContentType(CONTENT_TYPE_FORM_URLENCODED);
			resultData = serialize(data);
		}
		// 发送 json 格式的数据
		else if (this.isJSONData()) {
			this.setContentType(CONTENT_TYPE_JSON);
			resultData = serializeJSON(data);
		}
		// 发送其他格式的数据
		else {
			this.setContentType();
			resultData = data;
		}

		xhr.send(resultData);
	}

	// 是否需要使用 send 发送数据
	isSendData() {
		const { data, method } = this.options;

		if (!data) {
			return false;
		}

		if (method.toLowerCase() === HTTP_GET.toLowerCase()) {
			return false;
		}

		return true;
	}

	// 是否发送 FormData 格式的数据
	isFormData() {
		return this.options.data instanceof FormData;
	}

	// 是否发送 urlencoded 格式的数据
	isFormURLEncodedData() {
		return this.options.contentType.toLowerCase().includes(CONTENT_TYPE_FORM_URLENCODED);
	}

	// 是否发送 json 格式的数据
	isJSONData() {
		return this.options.contentType.toLowerCase().includes(CONTENT_TYPE_JSON);
	}

	// 设置 Content-type
	setContentType(contentType = this.options.contentType) {
		if (!contentType) {
			return;
		}

		this.xhr.setRequestHeader("Content-type", contentType);
	}

	// 获取 XHR 对象
	getXHR() {
		return this.xhr;
	}
}

export { Ajax };
