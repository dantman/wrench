/**
 * @fileOverview This file contains Array compatibility prototypes for those introduced in JavaScript 1.8 and es5
 */

/**#@+
 * @native 1.8
 */

/**
 * Apply a function against an accumulator and each value of the array (from left-to-right) as to reduce it to a single value.
 * 
 * @see https://developer.mozilla.org/en/Core_JavaScript_1.5_Reference/Objects/Array/reduce
 * 
 * @name reduce
 * @methodOf Array.prototype
 * 
 * @param {Function} fun Function to execute on each value in the array
 * @param [initial] Object to use as the first argument to the first call of the callback
 * @return The final value created by the reduce
 */
if (!Array.prototype.reduce) {
	Array.prototype.reduce = function(fun /*, initial*/) {
		var len = this.length >>> 0;
		if (typeof fun != "function")
			throw new TypeError();
		
		// no value to return if no initial value and an empty array
		if (len == 0 && arguments.length == 1)
			throw new TypeError();
		
		var i = 0;
		if (arguments.length >= 2)
		{
			var rv = arguments[1];
		}
		else
		{
			do {
				if (i in this) {
					rv = this[i++];
					break;
				}
				
				// if array contains no values, no initial value to return
				if (++i >= len)
					throw new TypeError();
			}
			while (true);
		}
		
		for (; i < len; i++) {
			if (i in this)
				rv = fun.call(null, rv, this[i], i, this);
		}
		
		return rv;
	};
}

/**
 * Apply a function simultaneously against two values of the array (from right-to-left) as to reduce it to a single value.
 * 
 * @see https://developer.mozilla.org/en/Core_JavaScript_1.5_Reference/Objects/Array/reduceRight
 * 
 * @name reduceRight
 * @methodOf Array.prototype
 * 
 * @param {Function} fun Function to execute on each value in the array
 * @param [initial] Object to use as the first argument to the first call of the callback
 * @return The final value created by the reduce
 */
if (!Array.prototype.reduceRight) {
	Array.prototype.reduceRight = function(fun /*, initial*/) {
		var len = this.length >>> 0;
		if (typeof fun != "function")
			throw new TypeError();
		
		// no value to return if no initial value, empty array
		if (len == 0 && arguments.length == 1)
			throw new TypeError();
		
		var i = len - 1;
		if (arguments.length >= 2) {
			var rv = arguments[1];
		} else {
			do {
				if (i in this) {
					rv = this[i--];
					break;
				}
				
				// if array contains no values, no initial value to return
				if (--i < 0)
					throw new TypeError();
			}
			while (true);
		}
		
		for (; i >= 0; i--) {
			if (i in this)
				rv = fun.call(null, rv, this[i], i, this);
		}
		
		return rv;
	};
}
/**#@-*/

