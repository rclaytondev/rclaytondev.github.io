const SUPPORTED_SCREEN_RATIOS = [
	/*
	Screen ratios take the format of width / height.
	*/
	4/3,
	3/4
];
document.body.onresize = function() {
	var clientScreenRatio = window.innerWidth / window.innerHeight;
	var closestScreenRatio = SUPPORTED_SCREEN_RATIOS.min(ratio => Math.dist(ratio, clientScreenRatio));
	var dimensions = utils.largestSimilarRect(
		{ x: 0, y: 0, w: closestScreenRatio, h: 1 },
		{ x: 0, y: 0, w: window.innerWidth * 0.8, h: window.innerHeight * 0.8 }
	);
	var contentContainer = document.getElementById("project-container");
	contentContainer.style.width = dimensions.w + "px";
	contentContainer.style.height = dimensions.h + "px";
	contentContainer.style.left = ((window.innerWidth - dimensions.w) / 2) + "px";
	contentContainer.style.top = ((window.innerHeight - dimensions.h) / 2) + "px";
};
document.body.onresize();
