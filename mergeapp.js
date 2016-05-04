var fs = require('fs');

var numFilesRead = 0;
function complete() {
	numFilesRead++;
	if (numFilesRead === 2) {
		console.log('it\'s ready');
		console.log('do some work');
	}
}

fs.readFile('./people1.json', function( err, data) {
	console.log('first file read');
	if ( error ) {
		console.log( "Mistakes have been made: " + error )
		throw error
	} 
	var people2 = JSON.parse(data)
	complete();
});

fs.readFile('./people2.json', function( err, data) {
	console.log('second file read');
		if ( error ) {
		console.log( "Mistakes have been made: " + error )
		throw error
	} 
	var people2 = JSON.parse(data)
	complete();
});

var fileContents = people1 + people2;

fs.writeFile("./peoplecomplete.txt", fileContents, function(err) {
	if(err) {
		throw err;
	}
});