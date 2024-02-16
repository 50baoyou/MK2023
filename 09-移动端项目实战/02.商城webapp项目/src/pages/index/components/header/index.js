import { ScrollModule } from "utils/scroll.util.js";
import "components/searchbox/index.js";
import "components/header/index.js";

import "./header.css";

const CHANGED_CLASSNAME = "header-transition";
const scrollContainer = document.getElementById("index-page");
const headerEl = document.querySelector(".header-layout>.header");

new ScrollModule(CHANGED_CLASSNAME, headerEl, 0, scrollContainer);
