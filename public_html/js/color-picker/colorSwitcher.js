function colorSwitcher(color, all) {
	var ids = ["all", "red", "pink", "purple", "deep-purple", "indigo", "blue", "light-blue", "cyan", "teal", "green", "light-green", "lime", "yellow", "amber", "orange", "deep-orange", "brown", "grey", "blue-grey", "bnw", "color-ref-grey", "color-ref-grey-divider", "color-ref-bnw", "color-ref-bnw-divider"]; // 25 different ids; four not for colors
	var displayed = "initial"; // set all to 'initial' ('block' for cards)
	if (all) { // debugging only
		for (var i = ids.length - 1; i >= 0; i--) {
			document.getElementById(ids[i]).style.display = displayed; 
		};
	} else { // end debugging
		for (var i = ids.length - 1; i >= 0; i--) {
			document.getElementById(ids[i]).style.display = "none"; // hide all
		};	
		if (color === "grey") { //set titles and dividers
			document.getElementById(ids[21]).style.display = displayed;
			document.getElementById(ids[22]).style.display = displayed;
		} else if (color === "bnw") {
			document.getElementById(ids[23]).style.display = displayed;
			document.getElementById(ids[24]).style.display = displayed;
		} else if (color === "all") {
			for (var i = ids.length - 1; i >= 0; i--) {
				document.getElementById(ids[i]).style.display = displayed; // display all
			};	
		} else {
			// you're a pretty color :D (well and you, brown)
		};
		document.getElementById(color).style.display = displayed; // display chosen
	};
}