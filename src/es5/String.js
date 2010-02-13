/**
 * @fileOverview This file contains es5 compat methods for the String class
 */
/**
 * @name String
 * @class A built-in class for sequences of UTF-16 characters forming a "string" of textual data.
 */

/**
 * Trim all whitespace from both sides of the string
 * Native to js1.8.1 and es5
 * 
 * @return {String} The new trimmed string
 */
if ( !String.prototype.trim )
	String.prototype.trim = function trim() {
		return this.replace(/^\s\s*/, '').replace(/\s*\s*$/, '');
	};

