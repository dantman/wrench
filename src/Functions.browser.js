(function(toString) {
	
	window.isString = function isString(str) {
		return typeof str === 'string' || toString(str) === '[object String]';
	};

	window.isNumber = function isNumber(num) {
		return typeof num === 'number' || toString(num) === '[object Number]';
	};

	window.isArray = function isArray(arr) {
		return toString(arr) === '[object Array]';
	};

	window.isObject = function isObject(obj) {
		return toString(obj) === '[object Object]';
	};

	window.isFunction = function isFunction(fn) {
		return toString(fn) === '[object Function]';
	};
	
})(Object.prototype.toString);

