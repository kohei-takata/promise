var assert = require('assert');

it('should use done for test?', function (done) {
	var promise = Promise.resolve();
	promise.then(function (value) {
		assert(true);
	}).then(done, done);
});
