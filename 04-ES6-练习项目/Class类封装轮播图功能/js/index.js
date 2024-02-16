import { Slider } from "./slider.js";

// 第一种切换方式：自动或点击小圆点切换图片
const a_element = document.getElementById("type_a");
const a_circleBtn = document.querySelector("#type_a .dots.pagination");

new Slider(true, a_element, a_circleBtn);

// 第二种切换方式：选项卡切换
const b_element = document.getElementById("type_b");
const b_circleBtn = document.querySelector("#type_b .pagination");

new Slider(false, b_element, b_circleBtn);

// 第三种切换方式：按钮和小圆点切换
const c_element = document.getElementById("type_c");
const c_circleBtn = document.querySelector("#type_c .dots.pagination");
const left_btn = document.querySelector("#type_c .arrow>.prev");
const right_btn = document.querySelector("#type_c .arrow>.next");

new Slider(false, c_element, c_circleBtn, left_btn, right_btn, { initialIndex: 1 });
