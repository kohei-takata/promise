var assert = require('assert');

function failTest() {
	throw new Error('Expectd promise to be rejected but it was fulfilled');
};

function mayBeRejected() {
	return Promise.resolve();
}

it('catch -> then', function() {
	return mayBeRejected().then(failTest, function (error) {
		assert(error.message === 'woo');
	});
});
