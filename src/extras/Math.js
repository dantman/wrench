/**
 * @fileOverview This file contains new methods for the Math namespace
 */
/**
 * @name Math
 * @namespace A built in namespace containing mathmatical constants and functions.
 */

/**
 * Extension to Math.random which returns an integer between 2 values instead of
 * a random float.
 * Partly borrowed from {@link https://developer.mozilla.org/en/Core_JavaScript_1.5_Reference/Global_Objects/Math/random#Example.3a_Using_Math.random}
 * 
 * @param {Number} min The lowest number (inclusive) to return
 * @param {Number} max The highest number (inclusive) to return
 * @return {Number} A random integer between min and max
 */
Math.rand = function rand(min, max) {
	return Math.floor( Math.random() * ( max - min + 1 ) ) + min;
};

/**
 * Calculate the sum of a list of numbers. Is also useful as an argument to .reduceNative
 * 
 * @param {Number} ... Arguments forming a list of numbers to sum up tp a total
 * @return {Number} The total sum of all the numbers passed
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
 * 
 * @param {Number} ... Arguments forming a list of numbers to create and average of
 * @return {Number} The average of all the numbers passed
 */
Math.avg = function avg(/*...*/) {
	return Math.sum.apply(Math, arguments) / arguments.length;
};

