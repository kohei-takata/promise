var promise = Promise.reject(new Error('message'));

promise.then(undefined, function (error) {
	console.log(error);
});
