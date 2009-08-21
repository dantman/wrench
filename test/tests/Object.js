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
	var o = {};
	assert(Object.merge(o, {}) === o, "Does not return the first object");
	var arr = [], o2 = {};
	Object.merge(o, { foo: 4, bar: arr, baz: o2 });
	assert(o.foo === 4, "Does not merge values");
	assert(o.bar === arr, "Copies arrays");
	assert(o.baz === o2, "Copies objects in non-deep mode");
	Object.merge(o, { foo: 5 });
	assert(o.foo === 5, "Does not override existing keys");
	Object.merge(o, { foo: 6 }, { foo: 7 });
	assert(o.foo === 7, "Does not have right dominance");
	var arr2 = [], o3 = {};
	Object.merge(o, { bar: arr2, baz: o3 });
	assert(o.bar !== arr, "Does not override arrays in non-deep");
	assert(o.baz !== o2, "Does not override objects in non-deep");
	Object.merge(true, o, { baz: { foo: 3 } });
	assert(o.baz !== o3 && o.baz.foo === 3, "Does not recursively merge in deep mode");
	Object.merge(true, o, { baz: { foo: 5 } });
	assert(o.baz.foo === 5, "Does not override deeply");
	var zoo = { foo: 5 };
	Object.merge(true, o, { zoo: zoo });
	assert(o.zoo && o.zoo.foo === 5, "Does not handle deep clone when no object exists in place");
	assert(o.zoo !== zoo, "Copies objects to non-existant keys instead of cloning them");
	Object.merge(true, o, { bar: ["foo"] });
	assert(o.bar.length === 0, "Mangles arrays trying to merge them when it shouldn't");
	var now = new Date;
	Object.merge(true, o, { date: now });
	assert(o.date === now, "Mangles object instances like date by trying to copy them when it shouldn't");
};

exports["Object.count returns number of keys in object"] = function() {
	assert(Object.count({a:1,b:2}) === 2);
	assert(Object.count({}) === 0, "Fails on empty object");
	function Foo() {}
	var f = new Foo();
	f.a = 1;
	f.b = 2;
	assert(Object.count(f) === 2, "Fails on non-literal objects");
	Foo.prototype.z = 3;
	assert(Object.count(f) === 2, "Polluted by prototypes");
};

exports["Object.keys returns array of keys in object"] = function() {
	assert.matchOne(Object.keys({a:1,b:2}), [["a", "b"], /*or*/ ["b", "a"]]);
	assert(Object.keys({}).length === 0, "Fails on empty object");
	function Foo() {}
	var f = new Foo();
	f.a = 1;
	f.b = 2;
	assert(Object.keys(f).length === 2, "Fails on non-literal objects");
	Foo.prototype.z = 3;
	assert(Object.keys(f).length === 2, "Polluted by prototypes");
};

exports["Object.values returns array of values in object"] = function() {
	assert.matchOne(Object.values({a:1,b:2}), [[1, 2], /*or*/ [2, 1]]);
	assert(Object.values({}).length === 0, "Fails on empty object");
	function Foo() {}
	var f = new Foo();
	f.a = 1;
	f.b = 2;
	assert(Object.values(f).length === 2, "Fails on non-literal objects");
	Foo.prototype.z = 3;
	assert(Object.values(f).length === 2, "Polluted by prototypes");
};

