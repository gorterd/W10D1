import warmUp from "./warmup";
import clock from "./clock";
import { handleEnter, handleLeave } from "./drop_down";
import todo from "./todo_list"
import slideScroll from "./slide_scroll"
import search from "./search"
const list = document.getElementsByClassName("drop-down-dog-nav")[0];

list.addEventListener("mouseenter", handleEnter);
list.addEventListener("mouseleave", handleLeave);



