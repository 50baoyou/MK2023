(function () {
	var banner_nav = document.getElementById("banner-nav");
	var banner_nav_ul = document.getElementById("banner-nav-ul");
	var menus = document.querySelectorAll(".menus-box .menu");

	banner_nav_ul.onmouseover = function (e) {
		if (e.target.tagName.toLowerCase() === "li") {
			var area = e.target.getAttribute("data-t");
			var the_menu = document.querySelector(".menus-box .menu[data-t=" + area + "]");

			for (var i in menus) {
				menus[i].className = "menu";
			}
			the_menu.className = "menu current";
		}
	};

	banner_nav.onmouseleave = function (e) {
		for (var i in menus) {
			menus[i].className = "menu";
		}
	};
})();
