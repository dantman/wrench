Object.invert = function invert(obj) {
	var o = {};
	for( var k in obj )
		if( obj.hasOwnProperty(k) )
			o[obj[k]] = k;
	return o;
};

Object.merge = function merge() {
	
};

(function(useCount) {
	Object.count = function count(obj) {
		if ( useCount ) return obj.__count__;
		return Object.keys(obj).length;
	};
})(({}).__count__ === 0);

Object.keys = function keys(obj) {
	var keys = [];
	for ( var k in obj )
		if ( obj.hasOwnProperty( k ) )
			keys.push( k );
	return keys;
};

Object.values = function values(obj) {
	var values = [];
	for ( var k in obj )
		if ( obj.hasOwnProperty( k ) )
			values.push( obj[k] );
	return values;
};


