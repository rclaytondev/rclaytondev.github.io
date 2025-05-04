const PROJECTS = [
	"random-survival-game",
	"stick-dungeon",
	"hypocube-translocation",
	"raycaster"
];

let dialogShown = null;

function openDialog(containerID) {
	const container = document.getElementById(containerID);
	const image = container.querySelector("img");
	const text = container.querySelector(".project-text");
	image.style["-webkit-filter"] = "blur(50px)";
	container.style["z-index"] = "1";
	image.style["z-index"] = "1";
	text.style.opacity = "1";
}
function closeDialog(containerID) {
	const container = document.getElementById(containerID);
	const image = container.querySelector("img");
	const text = container.querySelector(".project-text");
	image.style["-webkit-filter"] = "blur(0px)";
	container.style["z-index"] = "0";
	image.style["z-index"] = "0";
	text.style.opacity = "0";
}

function addHoverEffect(containerID) {
	const container = document.getElementById(containerID);
	container.onclick = function() {
		for(const id of PROJECTS) {
			closeDialog(id);
		}
		if(dialogShown === containerID) {

		}
		else {
			openDialog(containerID);
			dialogShown  = containerID;
		}
	};
};
window.onload = function() {
	addHoverEffect("random-survival-game");
	addHoverEffect("stick-dungeon");
	addHoverEffect("hypocube-translocation");
	addHoverEffect("raycaster");
};
