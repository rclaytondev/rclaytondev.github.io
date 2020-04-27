Function.prototype.method = function(name, code) {
	this.prototype[name] = code;
	return this;
};
Array.method("min", function(func, thisArg) {
	/*
	Returns the lowest item, or the item for which func() returns the lowest value.
	*/
	thisArg = thisArg || this;
	if(typeof func === "function") {
		var lowestIndex = 0;
		var lowestValue = Infinity;
		for(var i = 0; i < this.length; i ++) {
			var value = func.call(thisArg, this[i], i, this);
			if(value < lowestValue) {
				lowestIndex = i;
				lowestValue = value;
			}
		}
		return this[lowestIndex];
	}
	else {
		var lowestIndex = 0;
		var lowestValue = Infinity;
		for(var i = 0; i < this.length; i ++) {
			if(this[i] < lowestValue) {
				lowestIndex = i;
				lowestValue = this[i];
			}
		}
		return this[lowestIndex];
	}
});
Math.dist = function(x1, y1, x2, y2) {
	/*
	Returns the distance between ('x1', 'y1') and ('x2', 'y2')
	*/
	if(arguments.length === 2) {
		return Math.abs(arguments[0] - arguments[1]);
	}
	else if(arguments.length === 4) {
		return Math.hypot(x1 - x2, y1 - y2);
	}
	else {
		throw new Error("Math.dist() must be called with 2 or 4 arguments.")
	}
};
Object.method("clone", function() {
	if(Array.isArray(this)) {
		var clone = [];
	}
	else {
		var clone = Object.create(this.__proto__);
	}
	for(var i in this) {
		if(this.hasOwnProperty(i)) {
			if(typeof this[i] === "object" && this[i] !== null) {
				clone[i] = this[i].clone();
			}
			else {
				clone[i] = this[i];
			}
		}
	}
	return clone;
});
var utils = {
	largestSimilarRect: function(rect1, rect2) {
		/*
		Returns the largest location and size 'rect1' can be scaled to while still being able to fit inside 'rect2'. All rectangles take the form of objects w/ properties 'x', 'y', 'w', and 'h'.
		*/
		var rectangle = rect1.clone();
		function rectangleFits() {
			const BUFFER = 1;
			return (rectangle.w <= rect2.w + BUFFER && rectangle.h <= rect2.h + BUFFER);
		};
		/* scale it so that it fits vertically */
		var scaleFactor = rect2.h / rect1.h;
		rectangle.w *= scaleFactor;
		rectangle.h *= scaleFactor;
		if(!rectangleFits()) {
			rectangle = rect1.clone();
			scaleFactor = rect2.w / rect1.w;
			rectangle.w *= scaleFactor;
			rectangle.h *= scaleFactor;
		}
		/* center it within the larger rectangle */
		// rectangle.x = (rect2.x + (rect2.w / 2)) - (rectangle.w / 2);
		// rectangle.y = (rect2.y + (rect2.h / 2)) - (rectangle.h / 2);
		return rectangle;
	}
};
