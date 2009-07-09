/**
 * Return a padded string for the number. By defeault this function zero fills.
 * 
 * @param len The minimum lenght of the string to return
 * @param chars Characters to use when padding the number, defaulting to zero padding
 * @param radix An optional radix to use when turning the number into a string
 */
Number.prototype.pad = function pad(len, chars, radix) {
	return this.toString(radix || 10).padLeft(len || 0, chars || "0");
};

