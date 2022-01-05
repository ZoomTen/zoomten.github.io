"use strict";

/** Configuration**/

// Number of pages available to scroll
const MAXPAGES = 3;

// How much to scroll before we consider it a page move
const THRESHOLD = 50;

/** ------------- **/

// current page number
var page = 0;

var is_scrolling = false;
var scroll_target = window.innerHeight * page;

var touch_start = 0;

// activate the JS-only styling
document.body.classList.add("js");

// perform the page scroll
function doScrollPage(p) {
// calculate where to scroll to
	scroll_target = window.innerHeight * page;
	window.scrollTo({top:scroll_target, behavior:"smooth"});

// prevent overflow
	if (page > MAXPAGES) page = MAXPAGES;

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

// reset scroll position
window.scrollTo({top:scroll_target, behavior:"smooth"});

// detects if the window is still scrolling
window.addEventListener("scroll", (e)=>{
	is_scrolling = !(window.scrollY == scroll_target);
});

// scrolljack
window.addEventListener("wheel", (e)=>{
	if (!is_scrolling) {
		e.preventDefault();
		
		// simulate pageup/pagedown
		if (e.deltaY > THRESHOLD) { if (page < MAXPAGES) page++; }
		else if (e.deltaY < -THRESHOLD) { if (page > 0) page--; }
		doScrollPage(page);
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
		// the directions are reversed here
		if (delta < -THRESHOLD) { if (page < MAXPAGES) page++; }
		else if (delta > THRESHOLD) { if (page > 0) page--; }
		doScrollPage(page);
	}
});

// keep screen oriented
window.addEventListener("resize", (e)=>{
	scroll_target = window.innerHeight * page;
	window.scrollTo({top:scroll_target});
});

// create script-only page indicator
var scroller_parent = document.getElementById("js-scroller");
scroller_parent.style.opacity = 1;

for (var i=0; i <= MAXPAGES; i++) {
	var new_child = scroller_parent.appendChild(
		document.createElement("div")
	);
	
	new_child.dataset.page = i;
	
	// add jump to page event
	new_child.addEventListener("click", (e)=>{
		page = parseInt(e.target.dataset.page);
		doScrollPage(page);
	});
}

// mark first page as active in the indicator
scroller_parent.children[page].classList.add("_active");
