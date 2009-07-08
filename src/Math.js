/**
 * Extension to Math.random which returns an integer between 2 values instead of
 * a random float.
 * Partly borrowed from https://developer.mozilla.org/en/Core_JavaScript_1.5_Reference/Global_Objects/Math/random#Example.3a_Using_Math.random
 */
Math.rand = function rand(min, max) {
	return Math.floor( Math.random() * ( max - min + 1 ) ) + min;
};

