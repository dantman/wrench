
if ( !Object.getPrototypeOf )
	Object.getPrototypeOf = function(obj) {
		return obj.__proto__;
	};

function isString(str) {
	return typeof str === 'string' || str instanceof String;
}

function isNumber(num) {
	return typeof num === 'number' || num instanceof Number;
}

function isArray(arr) {
	return arr instanceof Array;
}

function isObject(obj) {
	return Object.getPrototypeOf(obj) === Object.prototype;
}

function isFunction(fn) {
	return typeof fn === 'function';
}

