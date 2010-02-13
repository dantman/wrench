if ( isNaN(Date.parse("2000-01-01T00:00:00.000Z")) ) {
	// This embedding implementation does not handle ISO dates
	(function(NativeDate, global) {
		var Date = function(arg) {
			if ( this instanceof Date || this instanceof NativeDate ) {
				var d = isString(arg) ?
                    // We explicitly pass it through parse:
					new NativeDate(Date.parse(arg)) :
                    // We have to manually make calls depending on argument
                    // length here
                    NativeDate.constructor.apply(new NativeDate(), arguments)
				d.constructor = Date; // Prevent mixups with unfixed Date object
				return d;
			}
			return NativeDate.apply(this, arguments);
		}
		// Copy any custom methods a 3rd party library may have added
		for ( var key in NativeDate )
			Date[key] = NativeDate[key];
		// Copy "native" methods explicitly, they may be non-enumerable
		Date.now = NativeDate.now;
		Date.UTC = NativeDate.UTC;
		Date.prototype = NativeDate.prototype;
        // Upgrade Date.parse to handle the ISO dates we use
        // TODO review specification to ascertain whether it is
        // necessary to implement partial ISO date strings.
		Date.parse = function(string) {
			var m = /^(\d\d\d\d)-(\d\d)-(\d\d)T(\d\d):(\d\d):(\d\d(?:\.\d+)?)Z$/.exec(string);
			if ( m ) {
				m.shift(); // kill the match string
				for ( var i = 0; i < m.length; i++ ) {
                    // use parseFloat instead of parseInt so the milliseconds
                    // don't get stripped
                    // XXX consider separating the seconds and miliseconds
                    // to avoid floating point precision error.
					m[i] = parseFloat(m[i], 10);
                    // m[1] is the month. Months are 0-11 in JavaScript
                    // Date objects, but 1-12 in ISO notation, so we
                    // decrement.
					if ( i === 1 )
						m[i]--;
				}
				if ( m.length > 5 ) {
					var floor = Math.floor(m[5])
                    // Because of floating point precision, in one of Dan
                    // Friesen's tests, 27.677 is being turned into
                    // 676.9999999999995 instead of 677
					m[6] = Math.round((m[5] - floor) * 1000);
					m[5] = floor;
				}
				return NativeDate.UTC.apply(this, m);
			}
			return NativeDate.parse.apply(this, arguments);
		};
		global.Date = Date;
	})(
        Date,
        this.Date === Date ? // this === global ?
        this : undefined // XXX where is "global" if "this" !== "global" ?
        // (Helma NG, GPSEE, possibly Flusspferd)
    );
}
