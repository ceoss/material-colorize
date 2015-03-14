function colorSwitcher(color, all) {
	var ids = ["all", "red", "pink", "purple", "deep-purple", "indigo", "blue", "light-blue", "cyan", "teal", "green", "light-green", "lime", "yellow", "amber", "orange", "deep-orange", "brown", "grey", "blue-grey", "bnw", "color-ref", "color-ref-divider"]; // 23 different ids; two not for colors
	var colorNames = ["Color", "Red", "Pink", "Purple", "Deep Purple", "Indigo", "Blue", "Light Blue", "Cyan", "Teal", "Green", "Light Green", "Lime", "Yellow", "Amber", "Orange", "Deep Orange", "Brown", "Grey", "Blue Grey", "Black and White"]; // same order as above
	if (all) { // debugging only
		for (var i = ids.length - 1; i >= 0; i--) {
			document.getElementById(ids[i]).style.display = "block";
			document.getElementById("color-drop").innerHTML = "Debug"; // set dropdown text
		};
	} else { // end debugging
		for (var i = ids.length - 1; i >= 0; i--) {
			document.getElementById(ids[i]).style.display = "none"; // hide all
		};
		if (color === "grey" || color === "bnw") { // set titles and dividers
			document.getElementById(ids[21]).style.display = "block";
			document.getElementById(ids[22]).style.display = "block";
		} else if (color === "all") {
			for (var i = ids.length - 1; i >= 0; i--) {
				document.getElementById(ids[i]).style.display = "block"; // display all
			};
			document.getElementById(ids[21]).style.display = "none"; // hide ref title
			document.getElementById(ids[22]).style.display = "none"; // hide ref divider
		} else { // you're a pretty color :D (well and you, brown)
		};
		document.getElementById(color).style.display = "block"; // display chosen
		document.getElementById("color-drop").innerHTML = colorNames[ids.indexOf(color)]; // set dropdown text 
	};
}