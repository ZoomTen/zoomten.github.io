
// let's do a fly effect with nothing but CSS animations and a bit of javascript

// we want to make each word into its own <span> inside the element,
// so let's grab every top level element that should have the words split
const split_by_words = document.getElementsByClassName("-with-words");

// now let's do the splitting for every entry of those
for (elem of split_by_words) {
	// grab the text and do the split
	const words = elem.innerText.split(" ");
	
	// now that we have the text saved, let's clear out
	// whatever's inside
	while(elem.firstChild.remove());
	
	for (
		var i = 0, word;
		word = words[i];
		i++
	) {
		// space out every word except the last one
		var spacer_elem = document.createElement("span");
		spacer_elem.classList.add("-has-space");
		spacer_elem.appendChild(
			document.createElement("span")
		);
		
		var word_elem_outer = document.createElement("span");
		var word_elem_inner = document.createElement("span");
		word_elem_inner.appendChild(
			document.createTextNode(word)
		);
		word_elem_outer.appendChild(word_elem_inner);
		elem.appendChild(word_elem_outer);
		if (i < words.length-1) {
			elem.appendChild(spacer_elem);
		}
	}
	
}

// do the same with letters
const split_by_letters = document.getElementsByClassName("-with-letters");
for (elem of split_by_letters) {
	const letters = elem.innerText.split("");
	
	// now that we have the text saved, let's clear out
	// whatever's inside
	while(elem.firstChild.remove());
	
	for (
		var i = 0, letter;
		letter = letters[i];
		i++
	) {
		var letter_elem_outer = document.createElement("span");
		if (letter == " ") { letter_elem_outer.classList.add("-has-space"); }
		var letter_elem_inner = document.createElement("span");
		letter_elem_inner.appendChild(
			document.createTextNode(letter)
		);
		letter_elem_outer.appendChild(letter_elem_inner);
		elem.appendChild(letter_elem_outer);
	}
	
}

// do fly in
const should_animate = document.getElementsByClassName("-animate");
for (elem of should_animate) {
	var delay = parseInt(elem.dataset.delay);
	
	// apply hidden to every element
	var child;
	for (
		var i = 0;
		child = elem.children[i];
		i++
	){
		child.classList.add("-before");
		
		function set(cl) {
			cl.classList.remove("-before");
			cl.classList.add("-after");
		}
		
		// animate after a certain period
		setTimeout(
			set.bind(this, child),
			i * delay
		);
	}
}
