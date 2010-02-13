(function() {
	var F = function() {};
	Function.prototype.newApply = function newApply(args) {
		if ( this === Object || this === Boolean || this === String || this === Number ) {
			if ( args.length === 0 ) {
				return new this();
			} else {
				return new this(args[0]);
			}
		} else {
			F.prototype = this.prototype;
			var thisp = new F();
			var returned = this.apply(thisp, args);
			if ( returned !== undefined )
				thisp = returned;
			return thisp;
		}
	};
})();

