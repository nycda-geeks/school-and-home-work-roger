var x = 5;

var local = function () {
	var z = 2;
	return z + x;
}

console.log(local());
