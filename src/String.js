/**
 * Repeat a string a number of times.
 * 
 * @param int num The number of times to repeat
 * @return String the repeated string
 */
String.prototype.repeat = function(num) {
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
String.prototype.expand = function(len) this.repeat(Math.ceil(len / this.length)).chop(len);

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

String.prototype.strip = function strip() {

};

String.prototype.stripLeft = function stripLeft() {

};

String.prototype.stripRight = function stripRight() {

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

String.prototype.explode = function() {
	
};

/**
 * Converts a dash (foo-bar) or underscore (foo_bar) style name into a
 * cammel case (fooBar) name.
 */
String.prototype.toCamelCase = function toCamelCase() {
	return this.replace(/[-_][a-z]/g, function(i) i[1].uc));
};

/**
 * Converts a cammel case (fooBar) name into an underscore (foo_bar) style name.
 */
String.prototype.toUnderscore = function toUnderscore() {
	return this.replace(/[A-Z]/, function(i) '_' + i.lc));
};

/**
 * Converts a cammel case (fooBar) name into a dash (foo-bar) style name.
 */
String.prototype.toDash = function toDash() {
	return this.replace(/[A-Z]/, function(i) '-' + i.lc));
}

