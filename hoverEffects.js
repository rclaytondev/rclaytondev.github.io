function addHoverEffect(containerID) {
	var container = document.getElementById(containerID);

	var linkElement = container.children[0];
	var image = linkElement.children[0];
	var text = linkElement.children[1];

	var hovering = false;
	container.onmouseover = function() {
		image.style["-webkit-filter"] = "blur(50px)";
		container.style["z-index"] = "1";
		image.style["z-index"] = "1";
		text.style.opacity = "1";
	};
	container.onmouseout = function() {
		image.style["-webkit-filter"] = "blur(0px)";
		container.style["z-index"] = "0";
		image.style["z-index"] = "0";
		text.style.opacity = "0";
	};
};
window.onload = function() {
	addHoverEffect("random-survival-game");
	addHoverEffect("stick-dungeon");
	addHoverEffect("hypocube-translocation");
	addHoverEffect("raycaster");
};
