/**
 * @fileOverview This file contains array diff and intersect methods for JS 1.5 to 1.7 (note that JsDoc does not index Array.new.js)
 */

/**
 * Compare this array with another one and return an array with all the items
 * in this one that are not in the other.
 * 
 * @param {Array} otherArray The array to compare to
 * @return {Array} An array with all items in this array not in otherArray
 */
Array.prototype.diff = function diff(otherArray) {
	return this.filter(function(item) {
		return !otherArray.has(item);
	});
};

/**
 * Compare this array with another one and return an array with all the items
 * that are in both arrays.
 * 
 * @param {Array} otherArray The array to compare to
 * @return {Array} An array with all items in this array and otherArray
 */
Array.prototype.intersect = function intersect(otherArray) {
	return this.filter(function(item) {
		return otherArray.has(item);
	});
};

