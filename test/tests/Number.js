
exports["number.pad"] = function() {
	assert((15).pad(2) === "15");
	assert((15).pad(1) === "15", "Mangles number when length is smaller than length of the number's text");
	assert((15).pad(5) === "00015", "Fails to zero fill strings");
	assert((15).pad(5, " ") === "   15", "Fails to use character");
	assert((15).pad(5, " ", 16) === "    f", "Fails on non-decimal numbers");
};

