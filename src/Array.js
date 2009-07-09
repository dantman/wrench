/**
 * Create a new array of a specified length filled with a certain value
 * 
 * @param size The size of the array to create
 * @param value The value to populate all the items in the array with
 */
Array.fill = function fill(size, value) {
	var arr = new Array(Number(size||0));
	for ( var i = arr.length-1; i >= 0; --i )
		arr[i] = value;
	return arr;
};

/**
 * Check if the array contains an item
 */
Array.prototype.has = function has(item) {
	return this.indexOf(item) > -1;
};

/**
 * Return an array where all duplicate items have been removed
 * 
 * @return Array A new array with a unique list of all items in this array
 */
Array.prototype.unique = function unique() {
	return this.filter(function(item, i, arr) { return arr.indexOf(item) >= i; });
};

/**
 * Shuffle the array
 * 
 * @return Array The same array for convenience
 */
Array.prototype.shuffle = function shuffle() {
	return this.sort(function() { return Math.random() > 0.5 ? 1 : -1; });
};

/**
 * Return an item from an index in the array
 * This is provided for client-side convenience so you have the same technique
 * for getting an item on both an array and a list of html nodes.
 */
Array.prototype.item = function item(i) {
	return this[i];
};

/**
 * Remove the first (or more) occurrence(s) of an item from the array
 * 
 * @param item The item to remove
 * @param max The max number of items to remove, use Infinity to remove them all
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
 * Clear an array of all items
 */
Array.prototype.clear = function clear() {
	return this.splice(0, this.length);
};

/**
 * Return a random item from an array
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
