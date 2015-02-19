var assert = require('assert');
it('should use done for test?', function (done) {
	var promise = Promise.resolve(42);
	promise.then(function (value) {
		assert(value === 42);
		done();
	});
});
