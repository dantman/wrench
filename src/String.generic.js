(function fn(method) {
	Array[method] = function(arr) {
		return Array.prototype[method].apply(arr, Array.slice(arguments, 1));
	};
	return fn;
})('split')('explode')
('repeat')('expand');

