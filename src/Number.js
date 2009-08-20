/**
 * @fileOverview This file contains new methods for the Number class
 */
/**
 * @name Number
 * @class A built-in class for numeric data which handles integers and floats within itself.
 */

/**
 * Return a padded string for the number.
 * 
 * @param {Number} len The minimum length of the string to return
 * @param {String} [chars="0"] Characters to use when padding the number
 * @param [radix=10] The radix to use when turning the number into a string
 */
Number.prototype.pad =
Number.prototype.padLeft = function pad(len, chars, radix) {
	return this.toString(radix || 10).padLeft(len || 0, chars || "0");
};

