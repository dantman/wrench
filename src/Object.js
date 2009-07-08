Object.invert = function(obj) {
	var o = {};
	for( var k in obj )
		if( obj.hasOwnProperty(k) )
			o[obj[k]] = k;
	return o;
};

