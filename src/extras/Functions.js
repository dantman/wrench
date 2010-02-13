
(function(toString) {
	
	this.isString = function isString(str) {
		return typeof str === 'string' || toString.call(str) === '[object String]';
	};

	this.isNumber = function isNumber(num) {
		return typeof num === 'number' || toString.call(num) === '[object Number]';
	};

	this.isArray = Array.isArray;

	this.isObject = function isObject(obj) {
		return toString.call(obj) === '[object Object]';
	};

	this.isFunction = function isFunction(fn) {
		return toString.call(fn) === '[object Function]';
	};
	
}).call(this, Object.prototype.toString);

