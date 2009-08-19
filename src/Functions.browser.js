(function(toString) {
	
	this.isString = function isString(str) {
		return typeof str === 'string' || toString(str) === '[object String]';
	};

	this.isNumber = function isNumber(num) {
		return typeof num === 'number' || toString(num) === '[object Number]';
	};

	this.isArray = function isArray(arr) {
		return toString(arr) === '[object Array]';
	};

	this.isObject = function isObject(obj) {
		return toString(obj) === '[object Object]';
	};

	this.isFunction = function isFunction(fn) {
		return toString(fn) === '[object Function]';
	};
	
}).call(this, Object.prototype.toString);

