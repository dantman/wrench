/**
 * @fileOverview This file contains new methods for the Object class
 */
/**
 * @name Object
 * @class The built-in object class which all objects prototype which acts somewhat like a hash of key/value pairs.
 */

/**
 * Returns a new object with the passed object's keys as the new object's values
 * and the passed object's values as the keys to those values.
 * 
 * @param {Object} obj The object to create an inverted object from
 * @return {Object} The inverted object
 */
Object.invert = function invert(obj) {
	var o = {};
	for( var k in obj )
		if( obj.hasOwnProperty(k) )
			o[obj[k]] = k;
	return o;
};

Object.merge = function merge() {
	
};

/**
 * Return the number of key/value pairs within an object
 * 
 * @param {Object} obj The object to count
 * @return {Number} The number of pairs in the object
 */
(function(useCount) {
	Object.count = function count(obj) {
		if ( useCount ) return obj.__count__;
		return Object.keys(obj).length;
	};
})(({}).__count__ === 0);

/**
 * Return an array containing the list of keys within the object
 * 
 * @param {Object} obj The object to take keys from
 * @return {Array} The array of keys
 */
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
Object.values = function values(obj) {
	var values = [];
	for ( var k in obj )
		if ( obj.hasOwnProperty( k ) )
			values.push( obj[k] );
	return values;
};

