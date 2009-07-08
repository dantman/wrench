/**
 * Repeat a string a number of times.
 * 
 * @param int num The number of times to repeat
 * @return String the repeated string
 */
String.prototype.repeat = function repeat(num) {
	var arr = new Array(num||1);
	for ( var i = arr.length-1; i >= 0; --i )
		arr[i] = this;
	return arr.join('');
};

/**
 * Expand a string repeating it up to a certain length.
 * 
 * @param int len The length of the string to expand to
 * @return String the expanded string
 */
String.prototype.expand = function expand(len) {
	return this.repeat(Math.ceil(len / this.length)).substr(0, len);
};

/**
 * Return a version of this string with the first character in upper case
 * 
 * @return String The string with the modified case
 */
String.prototype.toFirstUpperCase = function toFirstUpperCase() {
	return this.charAt(0).toUpperCase() + this.substr(1);
};

/**
 * Return a version of this string with the first character in lower case
 * 
 * @return String The string with the modified case
 */
String.prototype.toFirstLowerCase = function toFirstLowerCase() {
	return this.charAt(0).toLowerCase() + this.substr(1);
}

/**
 * Check and see if this string starts with another
 * 
 * @return Boolean A boolean indicating if this string starts with another
 */
String.prototype.startsWith = function startsWith(other) {
	return this.substr(0, other.length) === other;
};

/**
 * Check and see if this string ends with another
 * 
 * @return Boolean A boolean indicating if this string ends with another
 */
String.prototype.endsWith = function endsWith(other) {
	return this.substr(-other.length) === other;
};

/**
 * Check and see if this string contains another
 * 
 * @return Boolean A boolean indicating if this string contains another
 */
String.prototype.contains = function contains(other) {
	return this.indexOf(other) > -1;
};

/**
 * Count the number of times a substring is found within this string
 * 
 * @param other The substring to search for
 * @param offset An optional offset from the start of the string for the search
 * @return Number An integer indicating how many times the substring is found
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
 * @return String A new string with characters in the reverse order
 */
String.prototype.reverse = function reverse() {
	return this.split('').reverse().join('');
};

if ( !String.prototype.trimLeft )
	String.prototype.trimLeft = function trimLeft() {
		return this.replace(/^\s\s*/, '');
	};

if ( !String.prototype.trimRight )
	String.prototype.trimRight = function trimRight() {
		return this.replace(/\s*\s*$/, '');
	};

if ( !String.prototype.trim )
	String.prototype.trim = function trim() {
		return this.trimLeft().trimRight();
	};

String.prototype.strip = function strip(chars, internal) {
	if(!chars) throw new TypeError("Stripping requires a list of characters to strip");
	internal = internal || 3;
	var chars = Object.invert(chars); // This creates a table where chars[char] will be truthy/falsey for inclusion
	
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

String.prototype.stripLeft = function stripLeft(chars) {
	return this.strip(chars, 1);
};

String.prototype.stripRight = function stripRight(chars) {
	return this.strip(chars, 2);
};

String.prototype.pad = function pad() {

};

String.prototype.padLeft = function padLeft() {

};

String.prototype.padRight = function padRight() {

};

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

String.prototype.partitionRight = function partitionRight(sep) {
	var i = this.lastIndexOf(sep);
	return i > -1 ?
		[ this.substr(0, i), sep, this.substr(i+sep.length) ] :
		[ '', '', this ];
};

String.prototype.explode = function explode(sep, limit) {
	
};

String.prototype.scan = function scan(regex) {
	
};

/**
 * Converts a dash (foo-bar) or underscore (foo_bar) style name into a
 * cammel case (fooBar) name.
 */
String.prototype.toCamelCase = function toCamelCase() {
	return this.replace(/[-_][a-z]/g, function(i) { return i[1].uc; });
};

/**
 * Converts a cammel case (fooBar) name into an underscore (foo_bar) style name.
 */
String.prototype.toUnderscore = function toUnderscore() {
	return this.replace(/[A-Z]/, function(i) { return '_' + i.lc; });
};

/**
 * Converts a cammel case (fooBar) name into a dash (foo-bar) style name.
 */
String.prototype.toDash = function toDash() {
	return this.replace(/[A-Z]/, function(i) { return '-' + i.lc; });
}

