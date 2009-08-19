function AssertionError(message) {
	return {
		constructor: Error,
		__proto__: Error.prototype,
		message: message,
		name: "AssertionError"
	};
}
function PendingError() {
	return {
		constructor: AssertionError,
		__proto__: Error.prototype,
		message: "Pending",
		name: "PendingError"
	};
}

function assert(ok, message) {
	if(!ok)
		throw new AssertionError(message || "Fail");
}
assert.not = function(nok, message) {
	assert(!nok, message);
};
function pending() {
	throw new PendingError("Pending");
};

