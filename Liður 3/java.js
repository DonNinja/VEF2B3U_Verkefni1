	var fylki = ["popp", "coke", "sjampó", "lasagna", "pappír"];
	var text, i, len;
	
	for (i = 0, len = fylki.length, text = ""; i < len; i++) {
		text += fylki[i] + "<br>";
	}
	
	document.getElementById("one").innerHTML = text;