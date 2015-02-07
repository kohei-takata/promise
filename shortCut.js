new Promise(function(resolve) {
	resolve(42);
});

Promise.resolve(42).then(function (value) {
	console.log(value);
});
