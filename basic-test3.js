var assert = require('assert');

if('should use done for test?', function (done) {
	var promise = Promise.resolve();
	promise.then(function (value) {
		assert(false);
	}).then(done, done);
});
