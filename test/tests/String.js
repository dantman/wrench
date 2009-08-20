
exports["string.repeat"] = function() {
	assert("".repeat(0) === "");
	assert("".repeat(1) === "");
	assert("".repeat(2) === "");
	assert("foo".repeat(0) === "", "Does not return empty string on .repeat(0)");
	assert("foo".repeat(1) === "foo", "Does not pass through on .repeat(1)");
	assert("foo".repeat(2) === "foofoo", "Fails to repeat string");
	assert("foo".repeat(5) === "foofoofoofoofoo", "Fails on repeats larger than 2");
	// separator
	assert("foo".repeat(3, ',') === "foo,foo,foo", "Fails to handle separators");
	assert("foo".repeat(0, ',') === "", "Does not return empty string on .repeat(0, separator);");
};

exports["string.expand"] = function() {
	assert("".expand(0) === "");
	assert("foo".expand(3) === "foo", "Expanding to same length does not work.");
	assert("foo".expand(6) === "foofoo", "Fails to expand to double size");
	assert("foo".expand(5) === "foofo", "Fails to expand to partial size");
	assert("foo".expand(7) === "foofoof", "Fails to expand to past twice the size");
	assert("foo".expand(0) === "", "Does not return empty string on .expand(0)");
	assert("foo".expand(2) === "fo", "Fails to truncate string");
};

exports["string.toFirstUpperCase"] = function() {
	assert("asdf".toFirstUpperCase() === "Asdf");
	assert("Asdf".toFirstUpperCase() === "Asdf", "Does not pass through ucfirst strings");
	assert("aSdF".toFirstUpperCase() === "ASdF", "Mangles case");
};

exports["string.toFirstLowerCase"] = function() {
	assert("Asdf".toFirstLowerCase() === "asdf");
	assert("asdf".toFirstLowerCase() === "asdf", "Does not pass through lcfirst strings");
	assert("AsDf".toFirstLowerCase() === "asDf", "Mangles case");
};

exports["string.toTitleCase"] = function() {
	pending();
};

exports["string.startsWith"] = function() {
	assert("foobarbaz".startsWith("foo"), "Does not match proper comparisons");
	assert.not("afoobarbaz".startsWith("foo"), "False positives");
	assert.not("FOOBARBAZ".startsWith("foo"), "Not case-sensitive");
	assert.not("bazbarfoo".startsWith("foo"), "Matches strings ending with");
	assert("foo".startsWith("foo"), "Fails when comparing the same string");
};

exports["string.endsWith"] = function() {
	assert("foobarbaz".endsWith("baz"), "Does not match proper comparisons");
	assert.not("foobarbaza".endsWith("baz"), "False positives");
	assert.not("FOOBARBAZ".endsWith("baz"), "Not case-sensitive");
	assert.not("bazbarfoo".endsWith("baz"), "Matches strings ending with");
	assert("baz".endsWith("baz"), "Fails when comparing the same string");
};

exports["string.contains"] = function() {
	pending();
};

exports["string.numberOf"] = function() {
	pending();
};

exports["string.reverse"] = function() {
	assert(typeof "asdf".reverse() === 'string', "Does not return strings");
	assert("asdf".reverse() === "fdsa", "Incorrect string reversal");
};

exports["string.trimLeft"] = function() {
	assert("asdf".trimLeft() === "asdf", "Mangles strings");
	assert(" asdf".trimLeft() === "asdf", "Fails to trim");
	assert("  asdf".trimLeft() === "asdf", "Fails to trim more than one character");
	assert("  asdf  ".trimLeft() === "asdf  ", "Trims off the right");
	// @todo Tests for non-space/tab/newline whitespace
};

exports["string.trimRight"] = function() {
	assert("asdf".trimRight() === "asdf", "Mangles strings");
	assert("asdf ".trimRight() === "asdf", "Fails to trim");
	assert("asdf  ".trimRight() === "asdf", "Fails to trim more than one character");
	assert("  asdf  ".trimRight() === "  asdf", "Trims off the left");
	// @todo Tests for non-space/tab/newline whitespace
};

exports["string.trim"] = function() {
	assert("asdf".trim() === "asdf", "Mangles strings");
	assert(" asdf".trim() === "asdf", "Fails to trim");
	assert("asdf ".trim() === "asdf", "Fails to trim");
	assert("  asdf".trim() === "asdf", "Fails to trim more than one character");
	assert("  asdf  ".trim() === "asdf", "Fails to trim both sides properly");
	// @todo Tests for non-space/tab/newline whitespace
};

exports["string.strip"] = function() {
	pending();
};

exports["string.stripLeft"] = function() {
	pending();
};

exports["string.stripRight"] = function() {
	pending();
};

exports["string.pad"] = function() {
	pending();
};

exports["string.padLeft"] = function() {
	pending();
};

exports["string.padRight"] = function() {
	pending();
};

exports["string.partition"] = function() {
	pending();
};

exports["string.partitionRight"] = function() {
	pending();
};

exports["string.explode"] = function() {
	pending();
};

exports["string.scan"] = function() {
	pending();
};

exports["string.toCamelCase"] = function() {
	assert("camelCase".toCamelCase() === "camelCase", "Does not pass through existing camelCase strings");
	assert("TitleCase".toCamelCase() === "TitleCase", "Mangles TitleCase strings");
	assert("dash-string".toCamelCase() === "dashString", "Fails on dash-strings");
	assert("dash-string-extend".toCamelCase() === "dashStringExtend", "Fails with more than one dash (missing /g likely)");
	assert("-dash-string".toCamelCase() === "DashString", "Fails with - prefixed dash-strings");
	assert("underscore_string".toCamelCase() === "underscoreString", "Fails on undescore_strings");
	assert("-mixed_set-asdfString".toCamelCase() === "MixedSetAsdfString", "Fails on mixed");
};

exports["string.toUnderscore"] = function() {
	pending();
};

exports["string.toDash"] = function() {
	pending();
};

