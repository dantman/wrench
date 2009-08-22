
/**
 * ES5: Returns the prototype for this instance
 * 
 * @see // http://ejohn.org/blog/objectgetprototypeof/#js-4
 * 
 * @name getPrototypeOf
 * @methodOf Object
 * 
 * @param {Object} object The object to get the protoype of
 * @return {Objedct} The object's prototype
 */
if (!Object.getPrototypeOf) {
	if ( typeof "test".__proto__ === "object" ) {
		Object.getPrototypeOf = function(object) {
			return object.__proto__;
		};
	} else {
		Object.getPrototypeOf = function(object){
			// May break if the constructor has been tampered with
			return object.constructor.prototype;
		};
	}
}

(function(toString) {
	
	this.isString = function isString(str) {
		return typeof str === 'string' || toString.call(str) === '[object String]';
	};

	this.isNumber = function isNumber(num) {
		return typeof num === 'number' || toString.call(num) === '[object Number]';
	};

	this.isArray = function isArray(arr) {
		return toString.call(arr) === '[object Array]';
	};

	this.isObject = function isObject(obj) {
		return toString.call(obj) === '[object Object]';
	};

	this.isFunction = function isFunction(fn) {
		return toString.call(fn) === '[object Function]';
	};
	
}).call(this, Object.prototype.toString);

