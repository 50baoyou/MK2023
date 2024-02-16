import { ScrollModule } from "utils/scroll.util.js";

import "components/header/index.js";
import "./header.css";

const CHANGED_CLASSNAME = "header-transition";
const scrollContainer = document.getElementById("info-layout");
const headerEl = document.querySelector(".detail-page>.header-layout>.header");

console.log(headerEl);

new ScrollModule(CHANGED_CLASSNAME, headerEl, 0, scrollContainer);
