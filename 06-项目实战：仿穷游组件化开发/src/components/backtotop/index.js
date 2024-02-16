import "./backtotop.css";

const backtotop = document.getElementById("backtotop");

backtotop.onclick = function () {
	document.documentElement.scrollTop = 0;
	document.body.scrollTop = 0;
};
