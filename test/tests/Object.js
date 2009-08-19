exports["Object.invert inverts objects"] = function() {
	var object = { "foo": "bar", "baz": "splat" };
	var inverted = Object.invert(object);
	assert(object !== inverted, "Object was mutated rather than cloned");
	assert.not(inverted.foo === "bar", "Object may not have been inverted, foo key is still set to bar");
	assert.not("foo" in inverted, "Object may not have been inverted, foo key still exists");
	assert("bar" in inverted, "Inverted object is missing the bar key");
	assert("splat" in inverted, "Inverted object is missing the splat key but not the bar key");
	
	function F() {}
	F.prototype = { "badkey": "badvalue" }
	var object2 = new F;
	object2.foo = "bar";
	var inverted2 = Object.invert(object2);
	assert.not("badvalue" in inverted2, "Inverted objects are taking keys from up the prototype chain");
};

exports["Object.merge merges objects"] = function() {
	pending();
};

exports["Object.count returns number of keys in object"] = function() {
	pending();
};

exports["Object.keys returns array of keys in object"] = function() {
	pending();
};

exports["Object.values returns array of values in object"] = function() {
	pending();
};

