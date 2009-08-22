
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
	assert("Foo".toTitleCase() === "Foo", "Does not pass through proper strings");
	assert("foo".toTitleCase() === "Foo");
	assert("fOO".toTitleCase() === "FOO", "Mangles case");
	assert("foo bar".toTitleCase() === "Foo Bar", "Fails on multiple words (likely missing /g)");
	assert("foo-bar".toTitleCase() === "Foo-Bar", "Fails on dash");
	assert("foo\t\nbar".toTitleCase() === "Foo\t\nBar", "Fails on non-space whitespace");
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
	assert("foobarbaz".contains("bar"), "Does not match proper comparisons");
	assert.not("foobarbaz".contains("me"), "False positives");
	assert("foobarbaz".contains("baz"), "Fails on end of string match");
	assert("foobarbaz".contains("foo"), "Fails on start of string match");
};

exports["string.numberOf"] = function() {
	assert("abcdabaz".numberOf("c") === 1);
	assert("abcdabaz".numberOf("e") === 0, "Fails on not-found");
	assert("abcdabaz".numberOf("b") === 2, "Fails on more than 1");
	assert("abcdabaz".numberOf("z") === 1, "Fails on end of string match");
	assert("abcdabaz".numberOf("a") === 3, "Fails on start of string match");
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
	assert("__asdfqwerty__".strip("_") === "asdfqwerty");
};

exports["string.stripLeft"] = function() {
	assert("__asdfqwerty__".stripLeft("_") === "asdfqwerty__");
};

exports["string.stripRight"] = function() {
	assert("__asdfqwerty__".stripRight("_") === "__asdfqwerty");
};

exports["string.pad"] = function() {
	assert("asdf".pad(2) === "asdf", "Mangles padding strings larger than pad length");
	assert("asdf".pad(10) === "   asdf   ");
	assert("asdf".pad(10, "@") === "@@@asdf@@@", "Fails with character list");
	assert("asdf".pad(8, "@!") === "@!asdf@!", "Fails with multi-character list");
	assert("asdf".pad(7, "@!") === "@asdf@!", "Outputs incorrectly on pad lengths which create odd number of characters to pad");
};

exports["string.padLeft"] = function() {
	assert("asdf".padLeft(2) === "asdf", "Mangles padding strings larger than pad length");
	assert("asdf".padLeft(10) === "      asdf");
	assert("asdf".padLeft(10, "@") === "@@@@@@asdf", "Fails with character list");
	assert("asdf".padLeft(10, "@!") === "@!@!@!asdf", "Fails with multi-character list");
	assert("asdf".padLeft(7, "@!") === "@!@asdf", "Outputs incorrectly on pad lengths which create odd number of characters to pad");
};

exports["string.padRight"] = function() {
	assert("asdf".padRight(2) === "asdf", "Mangles padding strings larger than pad length");
	assert("asdf".padRight(10) === "asdf      ");
	assert("asdf".padRight(10, "@") === "asdf@@@@@@", "Fails with character list");
	assert("asdf".padRight(10, "@!") === "asdf@!@!@!", "Fails with multi-character list");
	assert("asdf".padRight(7, "@!") === "asdf@!@", "Outputs incorrectly on pad lengths which create odd number of characters to pad");
};

exports["string.partition"] = function() {
	assert.match("foo=bar=baz".partition("="), ["foo", "=", "bar=baz"], "Fails on partition");
	assert.match("foo-bar-baz".partition("="), ["foo-bar-baz", "", ""], "Fails on no partition");
};

exports["string.partitionRight"] = function() {
	assert.match("foo=bar=baz".partitionRight("="), ["foo=bar", "=", "baz"], "Fails on partition");
	assert.match("foo-bar-baz".partitionRight("="), ["", "", "foo-bar-baz"], "Fails on no partition");
};

exports["string.explode"] = function() {
	var str = "foo,bar,baz";
	assert.match(str.explode(','), str.split(','), "Explode with no limit does not give same output as .split");
	assert.match(str.explode(',', 2), ["foo","bar,baz"], "Fails with limit");
	assert.match(str.explode(',', 3), ["foo","bar", "baz"], "Fails with even limit");
	assert.match(str.explode(',', 4), ["foo","bar", "baz"], "Fails with limit over the number of items");
	//var str = ".asdf.asdf.asdf";
	//assert.match(str.explode(/./), ["", "asdf", "asdf", "asdf"], "Fails on regex");
	//assert.match(str.explode(/^./g), ["", "asdf.asdf.asdf"], "Fails on /g regex using ^");
	//assert.match(str.explode(/^./), ["", "asdf.asdf.asdf"], "Fails on non-/g regex using ^");
};

exports["string.scan"] = function() {
	assert.match("foo bar baz".scan(/\w+/), ["foo","bar","baz"]);
	assert.match("foo bar baz".scan(/\w+/, 4), ["bar","baz"], "Fails on offset");
	var s = "foo1 bar2 baz3".scan(/(\w+)(\d)/);
	assert.match(s[0], ["foo","1"], "Fails on groups");
	assert.match(s[1], ["bar","2"], "Fails on groups");
	assert.match(s[2], ["baz","3"], "Fails on groups");
	assert("foo bar baz".scan(/(\w+)/)[0], ["foo"], "Fails on single group");
	assert("foo bar baz".scan(/(\w+)/g)[0], ["foo"], "Fails on offset using groups");
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
	assert("underscore_string".toUnderscore() === "underscore_string", "Does not pass through existing undescore_strings");
	assert("camelCase".toUnderscore() === "camel_case", "Failes on camelCase");
	assert("camelCaseExtend".toUnderscore() === "camel_case_extend", "Fails with more than one hump (missing /g likely)");
	assert("TitleCase".toUnderscore() === "_title_case", "Failes on TitleCase");
};

exports["string.toDash"] = function() {
	assert("dash-string".toDash() === "dash-string", "Does not pass through existing dash-strings");
	assert("camelCase".toDash() === "camel-case", "Failes on camelCase");
	assert("camelCaseExtend".toDash() === "camel-case-extend", "Fails with more than one hump (missing /g likely)");
	assert("TitleCase".toDash() === "-title-case", "Failes on TitleCase");
};

