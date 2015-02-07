var http = require('http');

function getURL(URL) {
	return new Promise(function (resolve, reject) {
		http.get(URL, function (res) {
			var body = '';
			res.setEncoding('utf8');
			res.on('data', function (chunk) {
				body += chunk;
			});
			res.on('end', function () {
				ret = JSON.parse(body);
				resolve(ret);
			});
		}).on('error', function (e) {
			reject(new Error(e));
		});
	});
};

var URL = 'http://httpbin.org/get';
getURL(URL).then(function onFulfilled(value) {
	console.log(value);
}).catch(function onRejected(error) {
	console.error(error);
});
