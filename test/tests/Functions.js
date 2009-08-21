
exports["Object.getPrototypeOf"] = function() {
	assert(Object.getPrototypeOf(new Date) === Date.prototype);
	assert(Object.getPrototypeOf({}) === Object.prototype, "Object fails");
	assert(Object.getPrototypeOf("") === String.prototype, "String fails");
	assert(Object.getPrototypeOf(5) === Number.prototype, "Number fails");
	assert(Object.getPrototypeOf([]) === Array.prototype, "Array fails");
	assert(Object.getPrototypeOf(/./) === RegExp.prototype, "RegExp fails");
	assert(Object.getPrototypeOf(function() {}) === Function.prototype, "Function fails");
	function Foo() {}
	assert(Object.getPrototypeOf(new Foo) === Foo.prototype, "Custom fails");
};

exports["isString"] = function() {
	assert(isString("foo"));
	assert(isString(new String("foo")), "Fails on String object");
	assert.not(isString({}), "False positives");
	assert.not(isString([]), "False positives");
	assert.not(isString(new Date), "False positives");
	assert.not(isString(function() {}), "False positives");
};

exports["isNumber"] = function() {
	assert(isNumber(5));
	assert(isNumber(new Number(5)), "Fails on Number object");
	assert.not(isNumber({}), "False positives (object)");
	assert.not(isNumber([]), "False positives (array)");
	assert.not(isNumber(new Date), "False positives (date)");
	assert.not(isNumber(function() {}), "False positives (function)");
	assert.not(isNumber(/./), "False positives (regex)");
};

exports["isArray"] = function() {
	assert(isArray([]));
	assert.not(isArray({}), "False positives (object)");
	assert.not(isArray({length:0}), "False positives (object with length)");
	assert.not(isArray(""), "False positives (string)");
	assert.not(isArray(new Date), "False positives (date)");
	assert.not(isArray(function() {}), "False positives (function)");
};

exports["isObject"] = function() {
	assert(isObject({}));
	assert(isObject({length:0}), "Fails with .length set");
	assert.not(isObject(""), "False positives");
	assert.not(isObject([]), "False positives");
	assert.not(isObject(new Date), "False positives (date)");
	assert.not(isObject(function() {}), "False positives (function)");
	assert.not(isObject(/./), "False positives (regex)");
};

exports["isFunction"] = function() {
	assert(isFunction(function() {}));
	assert.not(isFunction({}), "False positives (object)");
	assert.not(isFunction(""), "False positives (string)");
	assert.not(isFunction([]), "False positives (array)");
	assert.not(isFunction(new Date), "False positives (date)");
	assert.not(isFunction(/./), "False positives (regex)");
	assert(isFunction(isNaN), "Doesn't consider native isNaN function a function");
	assert(isFunction(Object), "Doesn't consider native Object function a function");
	assert(isFunction(Array), "Doesn't consider native Array function a function");
	assert(isFunction(Date), "Doesn't consider native Date function a function");
};

