var promise = Promise.reject(new Error('message'));

promise['catch'](function (error) {
	console.log(error);
});
