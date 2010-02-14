
(function(toString, hasOwnProperty) {
	var global = this;
	
	global.isString = function isString(str) {
		return typeof str === 'string' || toString.call(str) === '[object String]';
	};
	
	global.isNumber = function isNumber(num) {
		return typeof num === 'number' || toString.call(num) === '[object Number]';
	};
	
	global.isArray = Array.isArray;
	
	global.isObject = function isObject(obj) {
		return toString.call(obj) === '[object Object]';
	};
	
	// Based on jQuery.isPlainObject with some local improvements to the tests
	global.isObjectLiteral = function(obj) {
		// Must be an Object.
		// Because of IE, we also have to check the presence of the constructor property.
		if ( !obj || toString.call(obj) !== "[object Object]" ) {
			return false;
		}
		
		// Make sure that window objects don't pass through
		// In IE setTimeout isn't a function, however it doesn't have a valid constructor so we can special case it
		if ( isFunction(obj.setTimeout) || ( isObject(obj.setTimeout) && obj.setTimeout.constructor === undefined ) ) {
			return false;
		}

		// Not own constructor property must be Object and can't have a toString of type "unknown" (DOM nodes in IE)
		if ( obj.constructor
			&& !hasOwnProperty.call(obj, "constructor")
			&& !hasOwnProperty.call(obj.constructor.prototype, "isPrototypeOf"
			&& typeof obj.constructor.toString !== "unknown") ) {
			return false;
		}
		
		// Own properties are enumerated firstly, so to speed up,
		// if last one is own, then all properties are own.
		var key;
		for ( key in obj ) {}
		return key === undefined || hasOwnProperty.call(obj, key);
	};
	
	global.isFunction = function isFunction(fn) {
		return toString.call(fn) === '[object Function]';
	};
	
}).call(this, Object.prototype.toString, Object.prototype.hasOwnProperty);

