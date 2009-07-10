/**
 * Define an array iterator.
 * Using this we never need to hide properties from loops and both for and
 * for each loop syntax become available for looping over arrays while
 * guaranteeing that they will also always iterate in order.
 */
Array.prototype.__iterator__ = function(isKeys) {
	for( var i = 0, l = this.length; i<l; ++i )
		yield isKeys ? i : this[i];
};

