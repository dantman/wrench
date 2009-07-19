/**
 * @fileOverview This file contains Array compatibility prototypes for those introduced in JavaScript 1.6
 */

/**#@+
 * @native 1.6
 */

/**
 * Returns the first index at which a given element can be found in the array, or -1 if it is not present. 
 * 
 * @see https://developer.mozilla.org/en/Core_JavaScript_1.5_Reference/Objects/Array/indexOf
 * 
 * @name indexOf
 * @methodOf Array.prototype
 * 
 * @param elt Element to locate in the array
 * @param {Number} [from=0] The index at which to begin the search
 * @return {Number} The index of the first occurence of the element or -1 if not found
 */
if (!Array.prototype.indexOf) {
	Array.prototype.indexOf = function(elt /*, from*/) {
		var len = this.length >>> 0;
		
		var from = Number(arguments[1]) || 0;
		from = (from < 0) ? Math.ceil(from) : Math.floor(from);
		if (from < 0)
			from += len;

		for (; from < len; from++) {
			if (from in this && this[from] === elt)
				return from;
		}
		return -1;
	};
}

/**
 * Returns the last index at which a given element can be found in the array,
 * or -1 if it is not present. The array is searched backwards, starting at fromIndex.
 * 
 * @see https://developer.mozilla.org/en/Core_JavaScript_1.5_Reference/Objects/Array/lastIndexOf
 * 
 * @name lastIndexOf
 * @methodOf Array.prototype
 * 
 * @param elt Element to locate in the array
 * @param {Number} [from=0] The index at which to begin the search
 * @return {Number} The index of the last occurence of the element or -1 if not found
 */
if (!Array.prototype.lastIndexOf) {
	Array.prototype.lastIndexOf = function(elt /*, from*/) {
		var len = this.length;
		
		var from = Number(arguments[1]);
		if (isNaN(from)) {
			from = len - 1;
		} else {
			from = (from < 0) ? Math.ceil(from) : Math.floor(from);
			if (from < 0)
				from += len;
			else if (from >= len)
				from = len - 1;
		}
		
		for (; from > -1; from--) {
			if (from in this && this[from] === elt)
				return from;
		}
		return -1;
	};
}

/**
 * Tests whether all elements in the array pass the test implemented by the provided function. 
 * 
 * @see https://developer.mozilla.org/en/Core_JavaScript_1.5_Reference/Objects/Array/every
 * 
 * @name every
 * @methodOf Array.prototype
 * 
 * @param {Function} fun Function to test for each element
 * @param [thisp] Object to use as this when executing callback
 * @return {Boolean} Boolean indicating whether all elements in the array passed or not
 */
if (!Array.prototype.every) {
	Array.prototype.every = function(fun /*, thisp*/) {
		var len = this.length >>> 0;
		if (typeof fun != "function")
			throw new TypeError();
		
		var thisp = arguments[1];
		for (var i = 0; i < len; i++) {
			if (i in this && !fun.call(thisp, this[i], i, this))
				return false;
		}
		
		return true;
	};
}

/**
 * Creates a new array with all elements that pass the test implemented by the provided function
 * 
 * @see https://developer.mozilla.org/en/Core_JavaScript_1.5_Reference/Objects/Array/filter
 * 
 * @name filter
 * @methodOf Array.prototype
 * 
 * @param {Function} fun Function to test each element of the array
 * @param [thisp] Object to use as this when executing callback
 * @return {Array} New array with all elements that passed
 */
if (!Array.prototype.filter) {
	Array.prototype.filter = function(fun /*, thisp*/) {
		var len = this.length >>> 0;
		if (typeof fun != "function")
			throw new TypeError();
		
		var res = new Array();
		var thisp = arguments[1];
		for (var i = 0; i < len; i++) {
			if (i in this) {
				var val = this[i]; // in case fun mutates this
				if (fun.call(thisp, val, i, this))
					res.push(val);
			}
		}
		
		return res;
	};
}

/**
 * Executes a provided function once per array element
 * 
 * @see https://developer.mozilla.org/en/Core_JavaScript_1.5_Reference/Objects/Array/forEach
 * 
 * @name forEach
 * @methodOf Array.prototype
 * 
 * @param {Function} fun Function to execute for each element
 * @param [thisp] Object to use as this when executing callback
 */
if (!Array.prototype.forEach) {
	Array.prototype.forEach = function(fun /*, thisp*/) {
		var len = this.length >>> 0;
		if (typeof fun != "function")
			throw new TypeError();
		
		var thisp = arguments[1];
		for (var i = 0; i < len; i++) {
			if (i in this)
				fun.call(thisp, this[i], i, this);
		}
	};
}

/**
 * Creates a new array with the results of calling a provided function on every element in this array
 * 
 * @see https://developer.mozilla.org/en/Core_JavaScript_1.5_Reference/Objects/Array/map
 * 
 * @name map
 * @methodOf Array.prototype
 * 
 * @param {Function} fun Function that produces an element of the new Array from an element of the current one
 * @param [thisp] Object to use as this when executing callback
 * @return {Array} New array with the collected results
 */
if (!Array.prototype.map) {
	Array.prototype.map = function(fun /*, thisp*/) {
		var len = this.length >>> 0;
		if (typeof fun != "function")
			throw new TypeError();
		
		var res = new Array(len);
		var thisp = arguments[1];
		for (var i = 0; i < len; i++) {
			if (i in this)
				res[i] = fun.call(thisp, this[i], i, this);
		}
		
		return res;
	};
}

/**
 * Tests whether some element in the array passes the test implemented by the provided function.
 * 
 * @see https://developer.mozilla.org/en/Core_JavaScript_1.5_Reference/Objects/Array/some
 * 
 * @name some
 * @methodOf Array.prototype
 * 
 * @param {Function} fun Function to test for each element
 * @param [thisp] Object to use as this when executing callback
 * @return {Boolean} Boolean indicating whether some element in the array passed or not
 */
if (!Array.prototype.some) {
	Array.prototype.some = function(fun /*, thisp*/) {
		var i = 0, len = this.length >>> 0;
		
		if (typeof fun != "function")
			throw new TypeError();
		
		var thisp = arguments[1];
		for (; i < len; i++) {
			if (i in this && fun.call(thisp, this[i], i, this))
				return true;
		}
		
		return false;
	};
}
/**#@-*/

