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
	offset = content.length;
	
	content[offset] = new Array(2);
	
	content[offset][0] = id;
	content[offset][1] = contents;
}


function ticker_load_horizontal(){
	ticker_horiz_div = document.getElementById("cloneTicker-horizontal");
	
	ticker_horiz_div.innerHTML = "<marquee direction=\"left\" onmouseout=\"this.start();\" onmouseover=\"this.stop();\" scrollamount=\"2\" scrolldelay=\"30\" truespeed=\"\" class=\"ticker-main ticker-main-horizontal\"><span id=\"ticker-id-horizontal\"></span></marquee>";
	
	ticker_horiz_marquee = document.getElementById("ticker-id-horizontal");
	
	if ((typeof(ticker_id) != "undefined") && (ticker_id != null)){
		ticker_horiz_script = document.createElement('script');
		ticker_horiz_script.setAttribute("type","text/javascript");
		ticker_horiz_script.setAttribute("src", tickerbase + "/" + ticker_id + ".js");
		
		ticker_horiz_marquee.append(ticker_horiz_script);
		
		ticker_horiz_contents = "";
		setTimeout(function(){
			for (a = 0; a < content.length; a++){
				ticker_horiz_contents += "<b class=\"ticker-title ticker-title-generic ticker-title-" + content[a][0] +"\">";
				ticker_horiz_contents += categories[content[a][0]];
				ticker_horiz_contents += "</b>&nbsp;";
				ticker_horiz_contents += content[a][1] + "&nbsp;&nbsp;&nbsp;";
			}
			ticker_horiz_marquee.innerHTML = ticker_horiz_contents;
		}, 0);
		
	} else {
		ticker_horiz_marquee.innerHTML = "<b>No ticker ID set!</b>";
	}
}


function ticker_load_vertical(){
	ticker_vertical_div = document.getElementById("cloneTicker-vertical");
	
	// Add crap to #cloneTicker-vertical
	ticker_vertical_div.innerHTML = "<marquee direction=\"up\" onmouseout=\"this.start();\" onmouseover=\"this.stop();\" scrollamount=\"1\" scrolldelay=\"30\" truespeed=\"\" class=\"ticker-main ticker-main-vertical\"><span id=\"ticker-id-vertical\"></span></marquee>";
	
	// Grab the newly-created span
	ticker_vertical_marquee = document.getElementById("ticker-id-vertical");
	
	if ((typeof(ticker_id) != "undefined") && (ticker_id != null)){
		// Insert script to span...
		ticker_vertical_script = document.createElement('script');
		ticker_vertical_script.setAttribute("type","text/javascript");
		ticker_vertical_script.setAttribute("src", tickerbase + "/" + ticker_id + ".js");
		
		ticker_vertical_marquee.append(ticker_vertical_script);
		
		// Parse contents...
		ticker_vertical_contents = "";
		setTimeout(function(){
			for (a = 0; a < content.length; a++){
				ticker_vertical_contents += "<b class=\"ticker-title ticker-title-generic ticker-title-" + content[a][0] +"\">"
				ticker_vertical_contents += categories[content[a][0]];
				ticker_vertical_contents += "</b><br>";
				ticker_vertical_contents += content[a][1] + "<br><br>";
			}
			ticker_vertical_marquee.innerHTML = ticker_vertical_contents;
		}, 0);
		
	} else {
		ticker_vertical_marquee.innerHTML = "<b>No ticker ID set!</b>";
	}
}