/**
 * @fileOverview This file contains extra property getters for 1.7+
 */

/**#@+
 * @type String
 * @fieldOf String.prototype
 * @jsver 1.7+
 */
/**
 * A quick shorthand getter to return the upper case version of a string
 * @name uc
 * @see String#toUpperCase
 */
String.prototype.__defineGetter__( 'uc', String.prototype.toUpperCase );

/**
 * A quick shorthand getter to return the lower case version of a string
 * @name lc
 * @see String#toLowerCase
 */
String.prototype.__defineGetter__( 'lc', String.prototype.toLowerCase );

/**
 * A quick shorthand getter to return the first letter upper case version of a string
 * @name ucfirst
 * @see String#toFirstUpperCase
 */
String.prototype.__defineGetter__( 'ucfirst', String.prototype.toFirstUpperCase );

/**
 * A quick shorthand getter to return the first letter upper case version of a string
 * @name lcfirst
 * @see String#toFirstLowerCase
 */
String.prototype.__defineGetter__( 'lcfirst', String.prototype.toFirstLowerCase );
/**#@-*/

