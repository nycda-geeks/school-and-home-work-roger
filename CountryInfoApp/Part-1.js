var fs = require ('fs')
var countryname = process.argv[2];

fs.readFile("./countries.json", function ( error, filedata ) {
	if ( error ) {
		console.log( "Mistakes have been made: " + error )
		throw error
	} 
	var jsondata = JSON.parse(filedata)
	jsondata.forEach(function(country)
	{
		if (country.name == countryname)
		{
			console.log('Country: ' + country.name)
			console.log('Top Level Domain: ' + country.topLevelDomain)
		}
	})
});