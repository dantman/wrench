
// Maybe we should just get rid of these two?
// I didn't bother implementing tests for the rest of the array methods which come from MDC
exports["array.indexOf"] = function() {
	var arr = [1,2,3,1,2,3];
	assert(arr.indexOf(2) === 1, "indexOf not returning correct index");
	assert(arr.indexOf(5) === -1, "indexOf did not return -1 for non-present index");
};

exports["array.lastIndexOf"] = function() {
	var arr = [1,2,3,1,2,3];
	assert(arr.lastIndexOf(2) === 4, "lastIndexOf not returning correct index");
	assert(arr.lastIndexOf(5) === -1, "lastIndexOf did not return -1 for non-present index");
};

exports["Array.fill()"] = function() {
	var arr = Array.fill();
	assert(arr.length === 0, "Array length is not 0");
};
exports["Array.fill(5)"] = function() {
	var arr = Array.fill(5);
	assert(arr.length === 5, "Array length is not 5");
	assert(arr[0] === undefined, "Array does not contain undefined items");
	assert(arr[2] === undefined, "Array only fills one item");
};

exports["Array.fill(5, 5)"] = function() {
	var arr = Array.fill(5, 5);
	assert(arr.length === 5, "Array length is not 5");
	assert(arr[0] === 5, "Array does not contain the number 5");
	assert(arr[2] === 5, "Array only fills one item");
};

exports["Array.fill(2, {})"] = function() {
	var arr = Array.fill(2, {});
	assert(arr.length === 2, "Array length is not 2"); 
	assert(arr[0] === arr[1], "Array.fill copies objects rather than using the same one");
};

exports["array.repeat"] = function() {
	var a = [];
	assert.not(a.repeat() === a, "Modifies arrays instead of returning a new one");
	assert.match([].repeat(0), []);
	assert.match([].repeat(1), []);
	assert.match([].repeat(2), []);
	assert.match(["foo", "bar", "baz"].repeat(0), [], "Does not return empty array on .repeat(0)");
	assert.match(["foo", "bar", "baz"].repeat(1), ["foo", "bar", "baz"], "Does not pass through on .repeat(1)");
	assert.match(["foo", "bar", "baz"].repeat(2), ["foo", "bar", "baz", "foo", "bar", "baz"], "Fails to repeat array");
	assert.match(["foo", "bar", "baz"].repeat(5), ["foo", "bar", "baz", "foo", "bar", "baz", "foo", "bar", "baz", "foo", "bar", "baz", "foo", "bar", "baz"], "Fails on repeats larger than 2");
};

exports["array.item"] = function() {
	var arr = ["foo", "bar"];
	assert(arr[0] === arr.item(0) && arr[1] === arr.item(1));
};

exports["array.has"] = function() {
	assert(["foo", "bar", "baz"].has("bar"));
	assert.not(["foo", "bar", "baz"].has("zoo"), "False positives");
	assert(["foo", "bar", "baz"].has("baz"), "Fails on match on last index");
	assert(["foo", "bar", "baz"].has("foo"), "Fails on match on first index");
};

exports["array.remove"] = function() {
	var arr = ["foo", "bar", "baz"];
	arr.remove("bar");
	assert.match(arr, ["foo", "baz"]);
	
	var arr = ["foo", "bar", "baz"];
	arr.remove("bar", 0);
	assert.match(arr, ["foo", "bar", "baz"], "Ignores 0 max");
	
	var arr = ["foo", "bar", "baz"];
	arr.remove("foo");
	assert.match(arr, ["bar", "baz"], "Fails on match on first index");
	
	var arr = ["foo", "bar", "baz"];
	arr.remove("baz");
	assert.match(arr, ["foo", "bar"], "Fails on match on first index");
	
	var arr = ["foo", "bar", "baz", "foo", "foo"];
	arr.remove("foo", 1);
	assert.match(arr, ["bar", "baz", "foo", "foo"], "Incorrect handling of multiple matches with explicit 1 (or new dominance?)");
	
	var arr = ["foo", "bar", "baz", "foo", "foo"];
	arr.remove("foo");
	assert.match(arr, ["bar", "baz", "foo", "foo"], "Incorrect handling of multiple matches with implied 1");
	
	var arr = ["foo", "bar", "baz", "foo", "foo"];
	arr.remove("foo", 2);
	assert.match(arr, ["bar", "baz", "foo"], "Incorrect handling of multiple matches with specified 2");
	
	var arr = ["foo", "bar", "baz", "foo", "foo"];
	arr.remove("foo", Infinity);
	assert.match(arr, ["bar", "baz"], "Incorrect handling of multiple matches with specified Infinity");
	
	var arr = ["foo", "bar", "baz", "foo", "foo"];
	arr.remove("foo", -1);
	assert.match(arr, ["bar", "baz"], "Incorrect handling of multiple matches with specified Infinity");
};

exports["array.unique"] = function() {
	var a = [];
	assert.not(a.unique() === a, "Modifies arrays instead of returning a new one");
	assert.match(["foo", "bar"].unique(), ["foo", "bar"], "Mangles arrays");
	assert.match(["foo", "bar", "foo"].unique(), ["foo", "bar"]);
};

exports["array.shuffle"] = function() {
	var arr = "abcdefghijklmnopqrstuvwxyz".split(''); // this has to be large to avoid getting the same array via .rand
	var rand = arr.slice();
	assert(rand.shuffle() === rand, "Does not return the same array");
	assert.nomatch(rand, arr, "Did not randomize (double check, there is a slim chance randomness could have returned the same array");
};

exports["array.append"] = function() {
	var arr = ["foo", "bar"];
	arr.append(["baz", "splat"]);
	assert.match(arr, ["foo", "bar", "baz", "splat"]);
};

exports["array.clear"] = function() {
	var a = [];
	assert.not(a.clear() === a, "Not supposed to return old array");
	var a = ["foo", "bar", "baz"];
	var arr = a.clear();
	assert.match(a, [], "Does not clear out array");
	assert.match(arr, ["foo", "bar", "baz"], "Does not return copy of old array");
};

exports["array.clean"] = function() {
	var a = [];
	assert.not(a.clean() === a, "Modifies arrays instead of returning a new one");
	assert.match(["foo", false, "bar", "", undefined, null, "baz"].clean(), ["foo", false, "bar", "", "baz"]);
	assert.match(["foo", false, "bar", "", undefined, null, "baz"].clean(false), ["foo", false, "bar", "", null, "baz"], "Fails on undefined only clean");
	assert.match(["foo", false, "bar", "", undefined, null, "baz"].clean(true), ["foo", false, "bar", "baz"], "Fails on empty clean");
};

exports["array.rand"] = function() {
	pending();
};

exports["array.reduceNative"] = function() {
	assert([1,2,3].reduceNative(Math.max) === 3);
	assert([1,2,3].reduceNative(Math.min) === 1);
	assert([1,2,3].reduceNative(Math.sum) === 6, "Fails on custom Math.sum function");
};

exports["array.flat"] = function() {
	var arr = [1, 2, [3, [4, 5], 6], 7];
	var flat = arr.flat();
	assert.match(flat, [1, 2, 3, 4, 5, 6, 7]);
	assert(arr !== flat, "Mutates arrays rather than creating a new one");
};

exports["array.diff"] = function() {
	var a = ["a", "b"];
	var b = ["b", "c"];
	var i = a.diff(b);
	assert(i.length === 1, "Array is not the right size");
	assert(a[0] === "a", "array.diff does not computer proper differences");
	assert(i !== a && i !== b, "Mutates arrays rather than creating a new one");
};

exports["array.intersect"] = function() {
	var a = ["a", "b"];
	var b = ["b", "c"];
	var i = a.intersect(b);
	assert(i.length === 1, "Array is not the right size");
	assert(i[0] === "b", "array.intersect does not compute proper intersections");
	assert(i !== a && i !== b, "Mutates arrays rather than creating a new one");
};

