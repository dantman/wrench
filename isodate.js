if ( isNaN(Date.parse("2000-01-01T00:00:00.000Z")) ) {
	// This browser has not implemented parsing of ISO dates
	(function(NativeDate) {
		var Date = function(arg) {
			if ( this instanceof Date || this instanceof NativeDate ) {
				var d = isString(arg) ?
					new NativeDate(Date.parse(arg)) : // We explicitly pass it through parse
					// We have to manually make calls depending on argument length here
					arguments.length >= 7 ?
					new NativeDate(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5], arguments[6]) :
					arguments.length >= 6 ?
					new NativeDate(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]) :
					arguments.length >= 5 ?
					new NativeDate(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]) :
					arguments.length >= 4 ?
					new NativeDate(arguments[0], arguments[1], arguments[2], arguments[3]) :
					arguments.length >= 3 ?
					new NativeDate(arguments[0], arguments[1], arguments[2]) :
					arguments.length >= 2 ?
					new NativeDate(arguments[0], arguments[1]) :
					arguments.length >= 1 ?
					new NativeDate(arguments[0]) :
					new NativeDate();
				d.constructor = Date; // Prevent mixups with unfixed Date object
				return d;
			}
			return NativeDate.apply(this, arguments);
		}
		// Copy any custom methods a 3rd party library may have added
		for ( var key in NativeDate )
			Date[key] = NativeDate[key];
		// Copy native methods explicitly, they may be non-enumerable
		Date.now = NativeDate.now;
		Date.UTC = NativeDate.UTC;
		// Upgrade Date.parse to handle the ISO dates we use (maybe we'll upgrade it more later and put it into Wrench.js)
		Date.parse = function(string) {
			var m = /^(\d\d\d\d)-(\d\d)-(\d\d)T(\d\d):(\d\d):(\d\d(?:\.\d+)?)Z$/.exec(string);
			if ( m ) {
				m.shift(); // kill the match string
				for ( var i = 0; i < m.length; i++ ) {
					m[i] = parseFloat(m[i], 10); // use parseFloat instead of parseInt so the milliseconds don't get stripped
					if ( i === 1 ) // This is the month, we need to decrement this
						m[i]--;
				}
				if ( m.length > 5 ) {
					var floor = Math.floor(m[5])
					m[6] = Math.round((m[5] - floor) * 1000); // For some reason in my test 27.677 is being turned into 676.9999999999995 instead of 677
					m[5] = floor;
				}
				return NativeDate.UTC.apply(this, m);
			}
			return NativeDate.parse.apply(this, arguments);
		};
		window.Date = Date;
	})(Date);
}
