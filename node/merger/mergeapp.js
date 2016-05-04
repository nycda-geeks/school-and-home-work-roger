var fs = require ( 'fs' )
var everyone = [] // Initialise empty array to hold the people
var readfiles = 0 // Variable to track the number of filers that have completely loaded

// Function to keep track of when file loads are complete
function done ( ) {
	readfiles ++
	if ( readfiles == 2 ) {
		fs.writeFile ( 'peopleComplete.txt', everyone.sort(), function ( error ) {
			if ( error ) {
				console.log ( 'No noes' + error )
				throw error
			}

		})
	}
}

////////////////////////////////////////////////////
// file statements to load files into everyone array
////////////////////////////////////////////////////

// Calling readfile on json data


function readJSON ( file ) {
	fs.readFile (file, function (error, filedata ) {
		if ( error ) {
				console.log ( 'No noes' + error )
				throw error
			}  
		filedata = JSON.parse ( filedata )
		filedata.forEach ( function ( person ) {
		everyone.push ( person )
	})
	done ( )
})
}

readJSON ( 'people1.json' )
readJSON ( 'people2.json' )