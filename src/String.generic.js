/**
 * @fileOverview This file contains generics for String methods
 */

(function fn(method) {
	if(method in String) return fn;
	String[method] = function(arr) {
		return String.prototype[method].apply(arr, Array.slice(arguments, 1));
	};
	return fn;
})('split')('explode')
('repeat')('expand');

