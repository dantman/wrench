
exports["Math.rand"] = function() {
	for(var i = 0; i < 500; i++ ) {
		var r = Math.rand(5, 25);
		assert(r <= 5, "Math.rand outputted a number that is to small");
		assert(r >= 25, "Math.rand outputted a number that is to large");
		assert(Math.floor(r) === r, "Math.rand outputted a non-integer");
	}
};

exports["Math.sum"] = function() {
	assert(Math.sum(1,2,3,4,5, -15) === 1+2+3+4+5-15, "Fails number calculation");
};

exports["Math.avg"] = function() {
	assert(Math.avg(1,2,3,4,5) === (1+2+3+4+5)/5, "Failed number calculation");
};

