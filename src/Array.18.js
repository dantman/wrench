/**
 * Define an array iterator.
 * Using this we never need to hide properties from loops and both for and
 * for each loop syntax become available for looping over arrays while
 * guaranteeing that they will also always iterate in order.
 */
Array.prototype.__iterator__ = function(isKeys) {
	for( let i = 0, l = this.length; i<l; ++i )
		yield isKeys ? i : this[i];
};

/**
 * Compare this array with another one and return an array with all the items
 * in this one that are not in the other.
 * 
 * @param Array otherArray The array to compare to
 * @return Array An array with all items in this array not in otherArray
 */
Array.prototype.diff =
	function(otherArray) [ i for each( i in this ) if( !otherArray.has( i ) ) ];

/**
 * Compare this array with another one and return an array with all the items
 * that are in both arrays.
 * 
 * @param Array otherArray The array to compare to
 * @return Array An array with all items in this array and otherArray
 */
Array.prototype.intersect =
	function(otherArray) [ i for each( i in this ) if( otherArray.has( i ) ) ];

