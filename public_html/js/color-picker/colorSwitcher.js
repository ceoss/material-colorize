function colorSwitcher(newColor) {
	ids = ["all", "red", "pink", "purple", "deep-purple", "indigo", "blue", "light-blue", "cyan", "teal", "green", "light-green", "lime", "yellow", "amber", "orange", "deep-orange", "brown", "grey", "blue-grey", "bnw", "color-ref-grey", "color-ref-grey-divider", "color-ref-bnw", "color-ref-bnw-divider"];
	if (newColor==="all") {
		values = ["initial", "initial", "initial", "initial", "initial", "initial", "initial", "initial", "initial", "initial", "initial", "initial", "initial", "initial", "initial", "initial", "initial", "initial", "initial", "initial", "initial", "none", "none", "none", "none"];
	} else if (newColor==="red"){
		values = ["none", "initial", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none"];
	} else if (newColor==="pink"){
		values = ["none", "none", "initial", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none"];
	} else if (newColor==="purple"){
		values = ["none", "none", "none", "initial", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none"];
	} else if (newColor==="deep-purple"){
		values = ["none", "none", "none", "none", "initial", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none"];
	} else if (newColor==="indigo"){
		values = ["none", "none", "none", "none", "none", "initial", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none"];
	} else if (newColor==="blue"){
		values = ["none", "none", "none", "none", "none", "none", "initial", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none"];
	} else if (newColor==="light-blue"){
		values = ["none", "none", "none", "none", "none", "none", "none", "initial", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none"];
	} else if (newColor==="cyan"){
		values = ["none", "none", "none", "none", "none", "none", "none", "none", "initial", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none"];
	} else if (newColor==="teal"){
		values = ["none", "none", "none", "none", "none", "none", "none", "none", "none", "initial", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none"];
	} else if (newColor==="green"){
		values = ["none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "initial", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none"];
	} else if (newColor==="light-green"){
		values = ["none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "initial", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none"];
	} else if (newColor==="lime"){
		values = ["none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "initial", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none"];
	} else if (newColor==="yellow"){
		values = ["none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "initial", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none"];
	} else if (newColor==="amber"){
		values = ["none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "initial", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none"];
	} else if (newColor==="orange"){
		values = ["none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "initial", "none", "none", "none", "none", "none", "none", "none", "none", "none"];
	} else if (newColor==="deep-orange"){
		values = ["none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "initial", "none", "none", "none", "none", "none", "none", "none", "none"];
	} else if (newColor==="brown"){
		values = ["none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "initial", "none", "none", "none", "none", "none", "none", "none"];
	} else if (newColor==="grey"){
		values = ["none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "initial", "none", "none", "initial", "initial", "none", "none"];
	} else if (newColor==="blue-grey"){
		values = ["none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "initial", "none", "none", "none", "none", "none"];
	} else if (newColor==="bnw"){
		values = ["none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "initial", "none", "none", "initial", "initial"];
	};
	displayProvider();
}

function displayProvider() {
	for (var i = ids.length - 1; i >= 0; i--) {
		document.getElementById(ids[i]).style.display = values[i];
	};
}