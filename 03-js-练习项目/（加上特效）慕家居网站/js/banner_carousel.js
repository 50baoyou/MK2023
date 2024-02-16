// Banner轮播图特效
(function () {
	// 获取元素
	var carousel = document.getElementById("carousel");
	var carousel_list = document.getElementById("carousel-list");
	var circle_list = document.getElementById("circle-list");
	var circle_btn = document.querySelectorAll(".circle-list>li");

	// 克隆第一张图片
	var img_clone = carousel_list.firstElementChild.cloneNode(true);
	carousel_list.appendChild(img_clone);

	// 图片序号
	var img_index = 0;

	// 节流锁
	var lock = true;

	// 播放下一张图片
	function next_img() {
		if (!lock) {
			return;
		}
		lock = false;

		img_index += 1;
		carousel_list.style.transition = "transform .5s ease 0s";
		carousel_list.style.transform = "translateX(" + -25 * img_index + "%)";

		if (img_index == 3) {
			setTimeout(function () {
				carousel_list.style.transition = "none";
				carousel_list.style.transform = "none";
				img_index = 0;
			}, 500);
		}
		setCircleBtn();

		setTimeout(function () {
			lock = true;
		}, 500);
	}

	// 设置圆点按钮
	function setCircleBtn() {
		for (var i in circle_btn) {
			if (i == img_index % 3) {
				circle_btn[i].className = "current";
			} else {
				circle_btn[i].className = "none";
			}
		}
	}

	// 添加监听器
	circle_list.onclick = function (e) {
		if (e.target.tagName.toLowerCase() === "li") {
			var index = e.target.getAttribute("data-n");
			img_index = parseInt(index);
			carousel_list.style.transition = "transform .5s ease 0s";
			carousel_list.style.transform = "translateX(" + -25 * img_index + "%)";
			setCircleBtn();
		}
	};

	// 自动轮播
	var timer = setInterval(next_img, 2000);

	// 鼠标移入暂停轮播
	carousel.onmouseenter = function () {
		clearInterval(timer);
	};

	// 鼠标移出继续轮播
	carousel.onmouseleave = function () {
		clearInterval(timer);
		timer = setInterval(next_img, 2000);
	};
})();
