"use strict";

/** Configuration**/

// Number of pages available to scroll
const MAXPAGES = 3;

// How much to scroll before we consider it a page move
const THRESHOLD = 23;

/** ------------- **/

// current page number
var page = -1, last_page = page, target;

var is_scrolling = false;
var scroll_target = window.innerHeight * page;

var touch_start = 0;

// activate the JS-only styling
document.body.classList.add("js");

// we assume the sections will be static
const sections = document.body.getElementsByTagName("section");

// create script-only page indicator
const scroller_parent = document.createElement("div");
scroller_parent.id = "js-scroller";
scroller_parent.style.opacity = 1;

for (var i=0; i <= MAXPAGES; i++) {
	var new_child = scroller_parent.appendChild(
		document.createElement("div")
	);
	
	new_child.dataset.page = i;
	
	// add jump to page event
	new_child.addEventListener("click", (e)=>{
		last_page = page;
		target = parseInt(e.target.dataset.page);
		doScrollPage(target);
	});
}

document.body.appendChild(scroller_parent);

// perform the page scroll
function doScrollPage(p) {
	if (page == p) return;
// page stuff
	for (var i=0, section; section = sections[i]; i++) {
		section.classList.remove("-active");
		section.classList.remove("-previous");
			section.classList.remove("-inverse");
		
		if (i == p) {
			section.classList.add("-active");
			section.classList.remove("-previous");
			if (last_page > p) {
				section.classList.add("-inverse");
			}
		} else if (i == last_page) {
			section.classList.remove("-active");
			section.classList.add("-previous");
			if (last_page > p) {
				section.classList.add("-inverse");
			}
		}
	}
	
// prevent overflow
	if (p > MAXPAGES) page = MAXPAGES;
	else page = p;

// change background color according to page counter
	// page 0 will change the background color to that of CSS variable --page-1, etc.
	document.body.style.backgroundColor =
		getComputedStyle(document.body).getPropertyValue("--page-" + (page + 1));
	
// reflect the changes on the page indicator
	// reset every page indicator
	for (var i=0; i <= MAXPAGES; i++) {
		scroller_parent.children[i].classList.remove("_active");
	}
	// enable that one indicator
	scroller_parent.children[page].classList.add("_active");
}

// init
doScrollPage(0);

// detects if the window is still scrolling
window.addEventListener("scroll", (e)=>{
	window.scrollTo(0, 0);
});

// scrolljack
window.addEventListener("wheel", (e)=>{
	if (!is_scrolling) {
		e.preventDefault();
		last_page = page;
		target = last_page;
		
		// simulate pageup/pagedown
		if (e.deltaY > THRESHOLD) { if (target < MAXPAGES) target++; }
		else if (e.deltaY < -THRESHOLD) { if (target > 0) target--; }
		doScrollPage(target);
	}
}, {
	passive: false
});

// touch controls
window.addEventListener("touchstart", (e)=>{
	touch_start = e.changedTouches[0].screenY;
});

window.addEventListener("touchend", (e)=>{
	var delta = e.changedTouches[0].screenY - touch_start;
	
	if (!is_scrolling) {
		last_page = page;
		target = last_page;
		// the directions are reversed here
		if (delta < -THRESHOLD) { if (target < MAXPAGES) target++; }
		else if (delta > THRESHOLD) { if (target > 0) target--; }
		doScrollPage(target);
	}
});

// mark first page as active in the indicator
scroller_parent.children[page].classList.add("_active");
