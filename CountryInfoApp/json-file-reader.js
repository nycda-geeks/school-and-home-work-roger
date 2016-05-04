fs = require('fs')
var countryname = process.argv[2];

function readandparse (filename, callback) {
	fs.readFile(filename, function (error, filedata) {
		if(error) {
			console.log(error);
			throw error;
		} else {
			callback(JSON.parse(filedata))
		}
	});
};

module.exports.info = readandparse
