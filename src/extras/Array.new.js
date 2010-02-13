/**
 * @fileOverview This file contains array diff and intersect methods for JS 1.8
 */

/**
 * Compare this array with another one and return an array with all the items
 * in this one that are not in the other.
 * @jsver 1.8+
 * 
 * @param {Array} otherArray The array to compare to
 * @return {Array} An array with all items in this array not in otherArray
 */
Array.prototype.diff =
	function(otherArray) [ i for each( i in this ) if( !otherArray.has( i ) ) ];

/**
 * Compare this array with another one and return an array with all the items
 * that are in both arrays.
 * @jsver 1.8+
 * 
 * @param {Array} otherArray The array to compare to
 * @return {Array} An array with all items in this array and otherArray
 */
Array.prototype.intersect =
	function(otherArray) [ i for each( i in this ) if( otherArray.has( i ) ) ];

