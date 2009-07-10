// https://developer.mozilla.org/en/Core_JavaScript_1.5_Reference/Objects/Array/indexOf
if (!Array.prototype.indexOf) {
	Array.prototype.indexOf = function(elt /*, from*/) {
		var len = this.length >>> 0;
		
		var from = Number(arguments[1]) || 0;
		from = (from < 0) ? Math.ceil(from) : Math.floor(from);
		if (from < 0)
			from += len;

		for (; from < len; from++) {
			if (from in this && this[from] === elt)
				return from;
		}
		return -1;
	};
}

// https://developer.mozilla.org/en/Core_JavaScript_1.5_Reference/Objects/Array/lastIndexOf
if (!Array.prototype.lastIndexOf) {
	Array.prototype.lastIndexOf = function(elt /*, from*/) {
		var len = this.length;
		
		var from = Number(arguments[1]);
		if (isNaN(from)) {
			from = len - 1;
		} else {
			from = (from < 0) ? Math.ceil(from) : Math.floor(from);
			if (from < 0)
				from += len;
			else if (from >= len)
				from = len - 1;
		}
		
		for (; from > -1; from--) {
			if (from in this && this[from] === elt)
				return from;
		}
		return -1;
	};
}

// https://developer.mozilla.org/en/Core_JavaScript_1.5_Reference/Objects/Array/every
if (!Array.prototype.every) {
	Array.prototype.every = function(fun /*, thisp*/) {
		var len = this.length >>> 0;
		if (typeof fun != "function")
			throw new TypeError();
		
		var thisp = arguments[1];
		for (var i = 0; i < len; i++) {
			if (i in this && !fun.call(thisp, this[i], i, this))
				return false;
		}
		
		return true;
	};
}

// https://developer.mozilla.org/en/Core_JavaScript_1.5_Reference/Objects/Array/filter
if (!Array.prototype.filter) {
	Array.prototype.filter = function(fun /*, thisp*/) {
		var len = this.length >>> 0;
		if (typeof fun != "function")
			throw new TypeError();
		
		var res = new Array();
		var thisp = arguments[1];
		for (var i = 0; i < len; i++) {
			if (i in this) {
				var val = this[i]; // in case fun mutates this
				if (fun.call(thisp, val, i, this))
					res.push(val);
			}
		}
		
		return res;
	};
}

// https://developer.mozilla.org/en/Core_JavaScript_1.5_Reference/Objects/Array/forEach
if (!Array.prototype.forEach) {
	Array.prototype.forEach = function(fun /*, thisp*/) {
		var len = this.length >>> 0;
		if (typeof fun != "function")
			throw new TypeError();
		
		var thisp = arguments[1];
		for (var i = 0; i < len; i++) {
			if (i in this)
				fun.call(thisp, this[i], i, this);
		}
	};
}

// https://developer.mozilla.org/en/Core_JavaScript_1.5_Reference/Objects/Array/map
if (!Array.prototype.map) {
	Array.prototype.map = function(fun /*, thisp*/) {
		var len = this.length >>> 0;
		if (typeof fun != "function")
			throw new TypeError();
		
		var res = new Array(len);
		var thisp = arguments[1];
		for (var i = 0; i < len; i++) {
			if (i in this)
				res[i] = fun.call(thisp, this[i], i, this);
		}
		
		return res;
	};
}

// https://developer.mozilla.org/en/Core_JavaScript_1.5_Reference/Objects/Array/some
if (!Array.prototype.some) {
	Array.prototype.some = function(fun /*, thisp*/) {
		var i = 0, len = this.length >>> 0;
		
		if (typeof fun != "function")
			throw new TypeError();
		
		var thisp = arguments[1];
		for (; i < len; i++) {
			if (i in this && fun.call(thisp, this[i], i, this))
				return true;
		}
		
		return false;
	};
}

