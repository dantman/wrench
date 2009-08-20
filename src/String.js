/**
 * @fileOverview This file contains new methods for the String class
 */
/**
 * @name String
 * @class A built-in class for sequences of UTF-16 characters forming a "string" of textual data.
 */

/**
 * Repeat a string a number of times.
 * 
 * @param {Number} num The number of times to repeat
 * @param {String} separator An optional separator to insert in between the strings
 * @return {String} the repeated string
 */
String.prototype.repeat = function repeat(num, separator) {
	return Array.fill(typeof num === 'number' ? num : 1, this).join(separator||'');
};

/**
 * Expand a string repeating it up to a certain length.
 * 
 * @param {Number} len The length of the string to expand to
 * @return {String} the expanded string
 */
String.prototype.expand = function expand(len) {
	return this.repeat(Math.ceil(len / this.length)).substr(0, len);
};

/**
 * Return a version of this string with the first character in upper case
 * 
 * @return {String} The string with the modified case
 */
String.prototype.toFirstUpperCase = function toFirstUpperCase() {
	return this.charAt(0).toUpperCase() + this.substr(1);
};

/**
 * Return a version of this string with the first character in lower case
 * 
 * @return {String} The string with the modified case
 */
String.prototype.toFirstLowerCase = function toFirstLowerCase() {
	return this.charAt(0).toLowerCase() + this.substr(1);
};

/**
 * Return a version fo this string with all words matched by \w given an upper
 * case first character.
 * 
 * @return {String} The string with the modified case
 */
String.prototype.toTitleCase = function toTitleCase() {
	return this.replace(/\w+/g, function(m) { return m.toFirstUpperCase(); });
};

/**
 * Check and see if this string starts with another
 * 
 * @return {Boolean} A boolean indicating if this string starts with another
 */
String.prototype.startsWith = function startsWith(other) {
	return this.substr(0, other.length) === other;
};

/**
 * Check and see if this string ends with another
 * 
 * @return {Boolean} A boolean indicating if this string ends with another
 */
String.prototype.endsWith = function endsWith(other) {
	return this.substr(-other.length) === other;
};

/**
 * Check and see if this string contains another
 * 
 * @return {Boolean} A boolean indicating if this string contains another
 */
String.prototype.contains = function contains(other) {
	return this.indexOf(other) > -1;
};

/**
 * Count the number of times a substring is found within this string
 * 
 * @param {String} other The substring to search for
 * @param {Number} [offset=0] The offset from the start of the string for the search
 * @return {Number} An integer indicating how many times the substring is found
 */
String.prototype.numberOf = function numberOf(other, offset) {
	offset = offset || 0;
	var i, c = 0;
	while( (i = this.indexOf(other, offset)) && i >= 0 ) {
		c++;
		offset = i + other.length;
	}
	return c;
};

/**
 * Reverse the order of characters in this string
 * 
 * @return {String} A new string with characters in the reverse order
 */
String.prototype.reverse = function reverse() {
	return this.split('').reverse().join('');
};
/**
 * Trim all whitespace from the left side of the string
 * 
 * @return {String} The new trimmed string
 */

/**
 * Trim all whitespace from the left side of the string
 * 
 * @return {String} The new trimmed string
 */
if ( !String.prototype.trimLeft )
	String.prototype.trimLeft = function trimLeft() {
		return this.replace(/^\s\s*/, '');
	};

/**
 * Trim all whitespace from the right side of the string
 * 
 * @return {String} The new trimmed string
 */
if ( !String.prototype.trimRight )
	String.prototype.trimRight = function trimRight() {
		return this.replace(/\s*\s*$/, '');
	};

/**
 * Trim all whitespace from both sides of the string
 * 
 * @return {String} The new trimmed string
 */
if ( !String.prototype.trim )
	String.prototype.trim = function trim() {
		return this.trimLeft().trimRight();
	};


/**
 * Strip characters from both sides of the string
 * 
 * @param {String} chars The characters to remove
 * @return {String} The new stripped string
 */
String.prototype.strip = function strip(chars, internal) {
	if(!chars) throw new TypeError("Stripping requires a list of characters to strip");
	internal = internal || 3;
	// This creates a table where chars[char] will be truthy/falsey for inclusion
	var chars = Object.invert(typeof chars === 'string' ? chars.split('') : chars);
	
	var start = 0, end = this.length;
	
	if ( internal & 1 ) { // Left
		while( this.charAt(start) in chars )
			start++;
	}
	if ( internal & 2 ) { // Right
		while( this.charAt(end-1) in chars && end > start )
			end--;
	}
	
	return this.substring(start, end);
};

/**
 * Strip characters from the left side of the string
 * 
 * @param {String} chars The characters to remove
 * @return {String} The new stripped string
 */
String.prototype.stripLeft = function stripLeft(chars) {
	return this.strip(chars, 1);
};

/**
 * Strip characters from the right side of the string
 * 
 * @param {String} chars The characters to remove
 * @return {String} The new stripped string
 */
String.prototype.stripRight = function stripRight(chars) {
	return this.strip(chars, 2);
};

/**
 * Pad a string on both sides to a certain length
 * If the string is equal to or larger than that length then it's size will be left alone
 * 
 * @param {Number} len The length to pad the string to
 * @param {String} [chars=" "] The characters to pad the string with
 */
String.prototype.pad = function pad(len, chars) {
	return this.padLeft(Math.floor(len/2), chars).padRight(Math.ceil(len/2), chars);
};

/**
 * Pad a string on the left side to a certain length
 * If the string is equal to or larger than that length then it's size will be left alone
 * 
 * @param {Number} len The length to pad the string to
 * @param {String} [chars=" "] The characters to pad the string with
 */
String.prototype.padLeft = function padLeft(len, chars) {
	chars = chars || ' ';
	return chars.expand(Math.max(0, len - this.length)) + this;
};

/**
 * Pad a string on the right side to a certain length
 * If the string is equal to or larger than that length then it's size will be left alone
 * 
 * @param {Number} len The length to pad the string to
 * @param {String} [chars=" "] The characters to pad the string with
 */
String.prototype.padRight = function padRight() {
	chars = chars || ' ';
	return this + chars.expand(Math.max(0, len - this.length));
};

/**
 * Partition a string. This breaks up a string by the first occurence of a separator
 * and returns a 3 item array containing the part before the separator,
 * the separator itself, and the part after the separator.
 * If the separator is not found then the returned array will contain the string
 * followed by two empty strings.
 * @see http://docs.python.org/library/stdtypes.html#str.partition
 * 
 * @param {String|RegExp} sep The separator to split by
 * @return {Array} The three item partitioned array
 */
String.prototype.partition = function partition(sep) {
	if ( sep instanceof RegExp ) {
		var m = this.match(m);
		var i = m ? m.index : -1;
		sep = m[0];
	} else {
		var i = this.indexOf(sep);
	}
	var l = sep.length;
	
	return i > -1 ?
		[ this.substr(0, i), sep, this.substr(i+l) ] :
		[ this, '', '' ];
};

/**
 * Same as string.partition but from the rightmost occurence of the separator
 * @see String#partition
 * 
 * @param {String} sep The separator to split by
 * @return {Array} The three item partitioned array
 */
String.prototype.partitionRight = function partitionRight(sep) {
	var i = this.lastIndexOf(sep);
	return i > -1 ?
		[ this.substr(0, i), sep, this.substr(i+sep.length) ] :
		[ '', '', this ];
};

String.prototype.explode = function explode(sep, limit) {
	
};

String.prototype.scan = function scan(regex, offset) {
	var m, list = [];
	offset = offset || 0;
	if ( regex.global ) {
		var str = this.substr(offset);
		while( m = regex.exec(str) )
			list.push( m.length > 1 ? m.slice(1) : m[0] );
	} else {
		while( m = this.substr(offset).match(regex) ) {
			offset = m.index + m[0].length;
			list.push( m.length > 1 ? m.slice(1) : m[0] );
		}
	}
	
	return list;
};

/**
 * Converts a dash (foo-bar) or underscore (foo_bar) style name into a
 * cammel case (fooBar) name.
 * 
 * @return {String} The new cammel case style string
 */
String.prototype.toCamelCase = function toCamelCase() {
	return this.replace(/[-_][a-z]/g, function(i) { return i.charAt(1).toUpperCase(); });
};

/**
 * Converts a cammel case (fooBar) name into an underscore (foo_bar) style name.
 * 
 * @return {String} The new underscore style string
 */
String.prototype.toUnderscore = function toUnderscore() {
	return this.replace(/[A-Z]/, function(i) { return '_' + i.toLowerCase(); });
};

/**
 * Converts a cammel case (fooBar) name into a dash (foo-bar) style name.
 * 
 * @return {String} The new dash style string
 */
String.prototype.toDash = function toDash() {
	return this.replace(/[A-Z]/, function(i) { return '-' + i.toLowerCase(); });
};

