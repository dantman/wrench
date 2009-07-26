(function(toString) {
	
	function isString(str) {
		return typeof str === 'string' || toString(str) === '[object String]';
	}

	function isNumber(num) {
		return typeof num === 'number' || toString(num) === '[object Number]';
	}

	function isArray(arr) {
		return toString(arr) === '[object Array]';
	}

	function isObject(obj) {
		return toString(obj) === '[object Object]';
	}

	function isFunction(fn) {
		return toString(fn) === '[object Function]';
	}
	
})(Object.prototype.toString);

