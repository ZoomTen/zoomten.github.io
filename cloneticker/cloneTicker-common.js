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
	if ((typeof(ticker_id) != "undefined") && (ticker_id != null)){
	// Create script element.
		ths = document.createElement('script');
		ths.type = "text/javascript";
		ths.src = tickerbase + "/" + ticker_id + ".js";
		thc.append(ths);
	// Clear ticker contents.
		thx = "";
	// Wait for it to load, then fill it up.
		setTimeout(function(){
		for (a = 0; a < content.length; a++){
			thx += "<b class=\"ticker-title ticker-title-generic ticker-title-" + content[a][0] +"\">";
			thx += categories[content[a][0]];
			thx += "</b>&nbsp;";
			thx += content[a][1] + "&nbsp;&nbsp;&nbsp;";
		}
	// Refresh marquee
		thm.parentNode.removeChild(thm);
	// Wait a while because shit can go way too fast
		setTimeout(function(){
		thd.appendChild(thm);
		thm.appendChild(thc);
		},50);
	// Done.
		thc.innerHTML = thx;
		},950);
		
	} else {
		thc.innerHTML = "<b>No ticker ID set!</b>";
	}
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
	if ((typeof(ticker_id) != "undefined") && (ticker_id != null)){
	// Create script element.
		tvs = document.createElement('script');
		tvs.type = "text/javascript";
		tvs.src = tickerbase + "/" + ticker_id + ".js";
		tvc.append(tvs);
	// Clear ticker contents.
		tvx = "";
	// Wait for it to load, then fill it up.
		setTimeout(function(){
		for (a = 0; a < content.length; a++){
			tvx += "<b class=\"ticker-title ticker-title-generic ticker-title-" + content[a][0] +"\">"
			tvx += categories[content[a][0]];
			tvx += "</b><br>";
			tvx += content[a][1] + "<br><br>";
		}
	// Refresh marquee
		tvm.parentNode.removeChild(tvm);
	// Wait a while because shit can go way too fast
		setTimeout(function(){
		tvd.appendChild(tvm);
		tvm.appendChild(tvc);
		},50);
	// Done.
		tvc.innerHTML = tvx;
		},950);
		
	} else {
		tvc.innerHTML = "<b>No ticker ID set!</b>";
	}
}