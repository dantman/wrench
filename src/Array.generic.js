/**
 * @fileOverview This file contains generics for Array methods
 */

Array.slice = function slice(arr) {
	return Array.prototype.slice.apply(arr, Array.prototype.slice.call(arguments, 1));
};

(function fn(method) {
	if(method in Array) return fn;
	Array[method] = function(arr) {
		return Array.prototype[method].apply(arr, Array.slice(arguments, 1));
	};
	return fn;
})('diff')('intersect')('unique')('shuffle')('item')('has')('indexOf')('lastIndexOf')
('every')('some')('filter')('forEach')('map')('reduce')('reduceRight')('join');

