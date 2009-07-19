/**
 * @fileOverview This file contains new methods for the Array class
 */
/**
 * @name Array
 * @class A built-in class for expressing ordered lists of values.
 */

/**
 * Create a new array of a specified length filled with a certain value
 * 
 * @constructs
 * @param {Number} size The size of the array to create
 * @param [value=undefined] The value to populate all the items in the array with
 */
Array.fill = function fill(size, value) {
	var arr = new Array(Number(size||0));
	for ( var i = arr.length-1; i >= 0; --i )
		arr[i] = value;
	return arr;
};

/**
 * Return a new array with the contents of this array repeated over
 * `num` amount of times.
 * 
 * @param {Number} num The number of times to repeat the array
 * @return {Array} The new repeated array
 */
Array.prototype.repeat = function repeat(num) {
	return Array.prototype.concat.apply([], Array.fill(num, this));
};

/**
 * Check if the array contains an item
 * 
 * @param {Number} item The item to look for
 * @return {Boolean} Whether or not the item was found within the array
 */
Array.prototype.has = function has(item) {
	return this.indexOf(item) > -1;
};

/**
 * Return an array where all duplicate items have been removed
 * 
 * @return {Array} A new array with a unique list of all items in this array
 */
Array.prototype.unique = function unique() {
	return this.filter(function(item, i, arr) { return arr.indexOf(item) >= i; });
};

/**
 * Shuffle the array
 * 
 * @return {Array} The same array for convenience
 */
Array.prototype.shuffle = function shuffle() {
	return this.sort(function() { return Math.random() > 0.5 ? 1 : -1; });
};

/**
 * Return an item from an index in the array
 * This is provided for client-side convenience so you have the same technique
 * for getting an item on both an array and a list of html nodes.
 * 
 * @param {Number} i The index to return the item from
 */
Array.prototype.item = function item(i) {
	return this[i];
};

/**
 * Remove the first (or more) occurrence(s) of an item from the array
 * 
 * @param item The item to remove
 * @param {Number} [max=1] The max number of items to remove, use Infinity to remove them all
 */
Array.prototype.remove = function remove(item, max) {
	max = max || 1;
	while(max) {
		var i = this.indexOf(item);
		if( i < 0 ) break;
		this.splice(i, 1);
		max--;
	}
	// ToDo: Determine a reasonable return value
};

/**
 * Append a list of items from an array onto the end of this array
 * 
 * @param items Array The array of items to append to this array
 */
Array.prototype.append = function append(items) {
	return Array.prototype.push.apply( this, items );
};

/**
 * Clear an array of all items
 */
Array.prototype.clear = function clear() {
	return this.splice(0, this.length);
};

/**
 * Clean out all undefined and null values inside of an array
 * if false is passed to empty then only undefined items are cleaned
 * if true is passed to empty then empty strings will also be cleaned
 * 
 * @param {Boolean} [empty=undefined] Whether to also clean out empty strings or to not clear out nulls
 */
Array.prototype.clean = function clean(empty) {
	return this.filter(function(item) {
		if ( item === undefined ) return false;
		if ( empty !== false && item === null ) return false;
		if ( empty === true && item === "" ) return false;
		return true;
	});
};

/**
 * Return a random item from this array.
 * 
 * @return A random item from the array
 */
Array.prototype.rand = function() {
	return this[Math.rand(0, this.length-1)];
};

/**
 * A version of array.reduce() which only passes the two values to reduce on
 * to the callback so you can use native methods like Math.max inside a reduce.
 * 
 * @param Function fn The callback function
 */
Array.prototype.reduceNative = function reduceNative(fn) {
	return this.reduce(function(a, b) { return fn(a, b); });
};

/**
 * Returns a new version of this array which has been flattened
 * Flattening turns an array like [[1,2,3], [4,5,6], [7,8,9]];
 * into one like [1,2,3,4,5,6,7,8,9];
 * 
 * @return {Array} The new flattened array
 */
Array.prototype.flat = function flat() {
	var arr = [];
	function reduce(item) {
		if( item instanceof Array )
			item.forEach(reduce);
		else arr.push(item);
	};
	this.forEach(reduce);
	return arr;
};

