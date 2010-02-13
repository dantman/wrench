/**
 * @fileOverview This file contains es5 compat methods for the Object class
 */
/**
 * @name Object
 * @class The built-in object class which all objects prototype which acts somewhat like a hash of key/value pairs.
 */

/**
 * Return an array containing the list of keys within the object
 * 
 * @param {Object} obj The object to take keys from
 * @return {Array} The array of keys
 */
if ( !Object.keys )
	Object.keys = function keys(obj) {
		var keys = [];
		for ( var k in obj )
			if ( obj.hasOwnProperty( k ) )
				keys.push( k );
		return keys;
	};

/**
 * Return an array containing the list of values within the object
 * 
 * @param {Object} obj The object to take values from
 * @return {Array} The array of values
 */
if ( !Object.values )
	Object.values = function values(obj) {
		var values = [];
		for ( var k in obj )
			if ( obj.hasOwnProperty( k ) )
				values.push( obj[k] );
		return values;
	};

