
/**
 * ES5: Returns the prototype for this instance
 * 
 * @see // http://ejohn.org/blog/objectgetprototypeof/#js-4
 * 
 * @name getPrototypeOf
 * @methodOf Object
 * 
 * @param {Object} object The object to get the protoype of
 * @return {Object} The object's prototype
 */
if ( !Object.getPrototypeOf ) {
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

if ( !Array.isArray )
	Array.isArray = function(arr) {
		return Object.prototype.toString.call(arr) === '[object Array]';
	};

