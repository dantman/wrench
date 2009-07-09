/**
 * Extension to Math.random which returns an integer between 2 values instead of
 * a random float.
 * Partly borrowed from https://developer.mozilla.org/en/Core_JavaScript_1.5_Reference/Global_Objects/Math/random#Example.3a_Using_Math.random
 */
Math.rand = function rand(min, max) {
	return Math.floor( Math.random() * ( max - min + 1 ) ) + min;
};

/**
 * Calculate the sum of a list of numbers. Is also useful as an argument to .reduceNative
 */
if(!Math.sum)
	Math.sum = function sum(/*...*/) {
		if( !arguments.length )
			throw new TypeError();
		var args = Array.slice(arguments);
		var s = args.shift();
		while( args.length )
			s += args.shift();
		return s;
	};

/**
 * Calculate the average value from a list of numbers.
 */
Math.avg = function avg(/*...*/) {
	return Math.sum.apply(Math, arguments) / arguments.length;
};

