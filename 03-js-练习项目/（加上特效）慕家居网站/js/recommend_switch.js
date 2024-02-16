(function () {
	// 获得元素
	var left_btn = document.getElementById("recommend-left-btn");
	var right_btn = document.getElementById("recommend-right-btn");
	var product_list = document.getElementById("recommend-list");

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
		if (product_index === 6) {
			return;
		}

		product_index += 1;

		product_list.style.left = -product_index * 368 + "px";
	}

	function move_right() {
		if (product_index === 0) {
			return;
		}

		product_index -= 1;

		product_list.style.left = -product_index * 368 + "px";
	}

	left_btn.addEventListener("click", throttle(move_left, 400));
	right_btn.addEventListener("click", throttle(move_right, 400));
})();
