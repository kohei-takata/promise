var http = require('http');

function getURLCallback(URL, callback) {
		http.get(URL, function (res) {
			var body = '';
			var ret = '';
			res.setEncoding('utf8');
			res.on('data', function (chunk) {
				body += chunk;
			});
			res.on('end', function () {
				ret = JSON.parse(body);
			});
			if (res.statusCode === 200) {
				callback(null, res.text);
			} else {
				callback(new Error(req.statusText), req.response);
			}
		}).on('error', function (e) {
			callback(new Error(req.statusText));
		});
};

function jsonParse(callback, error, value) {
	if (error) {
		callback(error, value);
	} else {
		try {
			var result = JSON.parse(value);
			callback(null, result);
		} catch (e) {
			callback(e, value);
		}
	}
};

var request = {
	comment: function getComment(callback) {
		return getURLCallback('http://azu.github.io/promises-book/json/comment.json', jsonParse.bind(null, callback));
	},
	people: function getPeople(callback) {
		return getURLCallback('http://azu.github.io/promises-book/json/people.json', jsonParse(null, callback));
	}
}

function allRequest(requests, callback, results) {
	if (requests.length === 0) {
		return callback(null, results);
	}
	var req = requests.shift();
	req(function (error, value) {
		if (error) {
			callback(error, value);
		} else {
			results.push(value);
			allRequest(requests, callback, results);
		}
	});
};

function main(callback) {
	allRequest([request.comment, request.people], callback, []);
}

main(function (error, results) {
	if (error) {
		return console.error(error);
	}
	console.log(results);
});
