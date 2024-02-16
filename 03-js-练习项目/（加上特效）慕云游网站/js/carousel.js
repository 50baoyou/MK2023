/**
 * 轮播图特效
 */
(function () {
	// 获取元素
	var carousel_list = document.getElementById("carousel-list");
	var left_btn = document.getElementById("left-btn");
	var right_btn = document.getElementById("right-btn");

	var circles = document.getElementById("circles");
	var circles_list = circles.getElementsByTagName("li");

	var banner = document.getElementById("banner");

	// 克隆第一张图片
	var img_node = carousel_list.firstElementChild.cloneNode(true);
	carousel_list.appendChild(img_node);

	// 图片序号
	var img_index = 0;

	// 节流锁
	var lock = true;

	// 绑定按钮监听器
	right_btn.onclick = right_btn_handler;

	function right_btn_handler() {
		if (!lock) {
			return;
		}
		lock = false;

		img_index += 1;
		carousel_list.style.transition = "transform .5s ease 0s";
		carousel_list.style.transform = "translateX(" + -16.666 * img_index + "%)";

		if (img_index == 5) {
			setTimeout(function () {
				carousel_list.style.transition = "none";
				carousel_list.style.transform = "none";
				img_index = 0;
			}, 500);
		}
		setCircles();

		setTimeout(function () {
			lock = true;
		}, 500);
	}

	left_btn.onclick = function () {
		if (!lock) {
			return;
		}
		lock = false;

		if (img_index == 0) {
			carousel_list.style.transition = "none";
			carousel_list.style.transform = "translateX(" + -16.666 * 5 + "%)";

			img_index = 4;
			setTimeout(function () {
				carousel_list.style.transition = "transform .5s ease 0s";
				carousel_list.style.transform = "translateX(" + -16.666 * img_index + "%)";
			}, 1);
		} else {
			img_index -= 1;
			carousel_list.style.transition = "transform .5s ease 0s";
			carousel_list.style.transform = "translateX(" + -16.666 * img_index + "%)";
		}
		setCircles();

		setTimeout(function () {
			lock = true;
		}, 500);
	};

	// 设置小圆点按钮
	function setCircles() {
		for (var i in circles_list) {
			if (i == img_index % 5) {
				circles_list[i].className = "current";
			} else {
				circles_list[i].className = "none";
			}
		}
	}

	// 使用事件委托，绑定小圆点按钮监听器
	circles.onclick = function (e) {
		if (e.target.tagName.toLowerCase() === "li") {
			var circles_index = e.target.getAttribute("data-n");
			img_index = parseInt(circles_index);
			carousel_list.style.transform = "translateX(" + -16.666 * img_index + "%)";
			setCircles();
		}
	};

	// 自动轮播
	var timer = setInterval(right_btn_handler, 2000);

	// 鼠标进入，暂停轮播
	banner.onmouseenter = function () {
		clearInterval(timer);
	};

	// 鼠标离开，继续轮播
	banner.onmouseleave = function () {
		clearInterval(timer);
		timer = setInterval(right_btn_handler, 2000);
	};
})();
