(function () {
	// 获得元素
	var left_btn = document.getElementById("commodity-left-btn");
	var right_btn = document.getElementById("commodity-right-btn");
	var product_list = document.getElementById("product-list");

	// 序号
	var product_index = 0;

	// 节流器
	function throttle(fn, interval, scope) {
		let timer;
		return function () {
			let context = scope || this;
			let args = arguments;
			if (!timer) {
				timer = setTimeout(function () {
					fn.apply(context, args);
					timer = null;
				}, interval);
			}
		};
	}

	// 添加监听器
	function move_left() {
		if (product_index === 5) {
			return;
		}

		product_index += 1;

		product_list.style.left = -product_index * 221 + "px";
	}

	function move_right() {
		if (product_index === 0) {
			return;
		}

		product_index -= 1;

		product_list.style.left = -product_index * 221 + "px";
	}

	left_btn.addEventListener("click", throttle(move_left, 400));
	right_btn.addEventListener("click", throttle(move_right, 400));
})();
