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
assert.matchOne = function(a, bs, message) {
	for ( var i = 0; i < bs.length; i++ ) {
		var b = bs[i];
		// b is the hard test, a should match it
		if ( b instanceof Array ) {
			if(!(a instanceof Array))
				assert(false, message);
			if( b.length !== a.length )
				assert(false, message);
			for ( var i = 0; i < b.length; i++ )
				if ( a[i] !== b[i] )
					assert(false, message);
		} else {
			if( a instanceof Array )
				assert(false, message);
			for ( var k in b ) {
				if ( a.hasOwnProperty(k) && a[k] === b[k] )
					continue;
				assert(false, message);
			}
		}
	}
	assert(true, message);
};
assert.match = function(a, b, message) {
	assert.matchOne(a, [b], message);
};
function pending() {
	throw new PendingError("Pending");
};

