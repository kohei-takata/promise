var promise = new Promise(function (resolve) {
	console.log('inner promise');
	resolve(42);
});

promise.then(function (value) {
	console.log(42);
});

console.log('outer promise');
