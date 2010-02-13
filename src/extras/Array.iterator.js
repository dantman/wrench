/**
 * @fileOverview This file contains the JS 1.7+ Array iterator
 */

/**
 * Define an array iterator.
 * Using this we never need to hide properties from loops and both for and
 * for each loop syntax become available for looping over arrays while
 * guaranteeing that they will also always iterate in order.
 * 
 * @example
 * for each ( var item in [1, 2, 3] )
 * 	print(item); // Prints 1 then 2 then 3
 * 
 * @example
 * for ( var key in [1, 2, 3] )
 * 	print(key); // Prints 0 then 1 then 2
 * 
 * @methodOf Array
 * @name __iterator__
 */
Array.prototype.__iterator__ = function(isKeys) {
	for( let i = 0, l = this.length; i<l; ++i )
		yield isKeys ? i : this[i];
};

