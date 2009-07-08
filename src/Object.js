Object.invert = function(obj) {
	var o = {};
	for( var k in obj ) o[obj[k]] = k;
	return o;
};

