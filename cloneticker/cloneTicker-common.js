// cloneTicker Common Functions

// Variables
var	categories = [];
var	content = [];

// base directory for the tickers
var	tickerbase = "tickers";
	
// Functions
function cat_add(catname){
	categories.push(catname);
}

function content_add(id,contents){
// Get next content slot
	of = content.length;
// Create new array for the offset
	content[of] = new Array(2);
// Fill the array
	content[of][0] = id;
	content[of][1] = contents;
}

function clear_contents(){
	content = [];
}

function ticker_load_horizontal(){
// Select the snorts
	thd = document.getElementById("cloneTicker-horizontal");
// Create marquee.
	thm = document.createElement('marquee');
	thm.setAttribute("direction", "left");
	thm.setAttribute("scrollamount", "1");
	thm.setAttribute("height", "14");
	thm.setAttribute("scrolldelay", "30");
	thm.setAttribute("truespeed", "");
	thm.setAttribute("class", "ticker-main ticker-main-horizontal");
	thm.onmouseout = function(){this.start();}
	thm.onmouseover = function(){this.stop();}
// Replace div with marquee.
	thd.innerHTML = "";
	thd.appendChild(thm);
// Create content holder.
	thc = document.createElement('div');
	thm.appendChild(thc);
	thx = "";
	// Fill it up.
	for (a = 0; a < content.length; a++){
		thx += "<b class=\"ticker-title ticker-title-generic ticker-title-" + content[a][0] +"\">";
		thx += categories[content[a][0]];
		thx += "</b>&nbsp;";
		thx += content[a][1] + "&nbsp;&nbsp;&nbsp;";
	}
	// Done.
	thc.innerHTML = thx;
}

function ticker_load_vertical(){
// Select the snorts
	tvd = document.getElementById("cloneTicker-vertical");
// Create marquee.
	tvm = document.createElement('marquee');
	tvm.setAttribute("direction", "up");
	tvm.setAttribute("scrollamount", "1");
	tvm.setAttribute("scrolldelay", "30");
	tvm.setAttribute("truespeed", "");
	tvm.setAttribute("class", "ticker-main ticker-main-vertical");
	tvm.onmouseout = function(){this.start();}
	tvm.onmouseover = function(){this.stop();}
// Replace div with marquee.
	tvd.innerHTML = "";
	tvd.appendChild(tvm);
// Create content holder.
	tvc = document.createElement('div');
	tvm.appendChild(tvc);
	// Clear ticker contents.
		tvx = "";
	// Wait for it to load, then fill it up.
		for (a = 0; a < content.length; a++){
			tvx += "<b class=\"ticker-title ticker-title-generic ticker-title-" + content[a][0] +"\">"
			tvx += categories[content[a][0]];
			tvx += "</b><br>";
			tvx += content[a][1] + "<br><br>";
		}
		tvc.innerHTML = tvx;
}