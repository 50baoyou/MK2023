(function () {
	var back_top = document.getElementById("back-top");
	var timer;

	back_top.onclick = function () {
		clearInterval(timer);

		timer = setInterval(function () {
			document.documentElement.scrollTop -= 200;
		}, 50);

		if (document.documentElement.scrollTop <= 0) {
			clearInterval(timer);
		}
	};

	window.onscroll = function () {
		var scrollTop = document.documentElement.scrollTop || window.scrollY;

		if (scrollTop < 900) {
			back_top.style.display = "none";
		} else {
			back_top.style.display = "block";
		}
	};
})();
