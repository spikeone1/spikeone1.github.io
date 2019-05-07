menu.onclick = function myFunction() {
	var x = document.getElementById('myTopnav');
	var b = document.getElementById('menu');

	if (x.className === "topnav") {
		x.className += " responsive";

	} else {
		x.className = "topnav";
	}

	if (b.className === "icon") {
		b.className += " icon_activ";

	} else {
		b.className = "icon";
	}
}