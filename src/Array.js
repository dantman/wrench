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
 * Return a random item from an array
 */
Array.prototype.rand = function() {
	return this[Math.rand(0, this.length-1)];
};

