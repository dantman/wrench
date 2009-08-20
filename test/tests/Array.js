
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

exports["array.every"] = function() {
	pending();
};

exports["array.some"] = function() {
	pending();
};

exports["array.filter"] = function() {
	pending();
};

exports["array.forEach"] = function() {
	pending();
};

exports["array.map"] = function() {
	pending();
};


exports["array.reduce"] = function() {
	pending();
};

exports["array.reduceRight"] = function() {
	pending();
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
	pending();
};

exports["array.has"] = function() {
	pending();
};

exports["array.unique"] = function() {
	pending();
};

exports["array.shuffle"] = function() {
	pending();
};

exports["array.item"] = function() {
	pending();
};

exports["array.remove"] = function() {
	pending();
};

exports["array.append"] = function() {
	pending();
};

exports["array.clear"] = function() {
	pending();
};

exports["array.clean"] = function() {
	pending();
};

exports["array.rand"] = function() {
	pending();
};

exports["array.reduceNative"] = function() {
	pending();
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

