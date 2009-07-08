Object.invert = function(obj) {
	var o = {};
	for( let k in obj ) o[obj[k]] = k;
	return o;
};

